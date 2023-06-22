<?php
/**
 * ユーザー情報の取得と送信を行う.
 *
 * @package WPTBA
 */

namespace WPTBA\Repository;

use WPTBA\Repository\IUserInfoRepository;

/**
 * User Info Repository.
 */
class UserInfoRepository implements IUserInfoRepository
{
    /**
     * Constructor.
    */
    public function __construct()
    {
    }

    /**
     * サービスの利用者情報を保存する
     *
     * @param string $client_version クライアントのバージョン.
     * @param string $site_url サイトのURL.
     * @param string $email メールアドレス.
     * @param bool $email_optin メールアドレスのオプトイン.
    */
    public function saveUserInfo($client_version, $site_url, $email, $email_optin)
    {
        update_option('wptba_user_info', array(
            'client_version' => $client_version,
            'site_url' => $site_url,
            'email' => $email,
            'email_optin' => $email_optin
        ));
    }

    /**
     * サービスの利用者情報を取得する
     *
     * @return array サービスのUnique IDの配列.
    */
    public function getUserInfo()
    {
        return get_option('wptba_user_info', array());
    }

    /**
     * クライアントバージョンを読み込む.
     *
     * @return string クライアントバージョン.
    */
    public function loadPluginVersion()
    {
        $plugin_data = get_plugin_data(__FILE__);
        $plugin_version = $plugin_data['Version'];
        return $plugin_version;
    }

    /**
     * サイトURLを読み込む.
     *
     * @return string サイトURL.
    */
    public function loadSiteUrl()
    {
        return get_site_url();
    }

    /**
     * メールアドレスを読み込む.
     *
     * @return string メールアドレス.
    */
    public function loadEmail()
    {
        $current_user = wp_get_current_user();
        $email = $current_user->user_email;
        return $email;
    }

    /**
     * メールアドレスのオプトインを読み込む.
     *
     * @return bool メールアドレスのオプトイン.
    */
    public function loadEmailOptin()
    {
        $user_info = $this->getUserInfo();
        if (isset($user_info['email_optin'])) {
            return $user_info['email_optin'] === true;
        }
        return false;
    }
}
