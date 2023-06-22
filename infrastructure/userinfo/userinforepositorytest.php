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
class UserInfoRepositoryTest implements IUserInfoRepository
{
    /**
     * WP Options.
     *
     * @var array $wp_options WP Options.
    */
    public $wp_options;

    /**
     * Constructor.
    */
    public function __construct()
    {
        $this->wp_options = array();
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
        $this->wp_options['wptba_userinfo'] = array(
            'client_version' => $client_version,
            'site_url' => $site_url,
            'email' => $email,
            'email_optin' => $email_optin
        );
    }

    /**
     * サービスの利用者情報を取得する
     *
     * @return array サービスのUnique IDの配列.
    */
    public function getUserInfo()
    {
        if (isset($this->wp_options['wptba_userinfo'])) {
            return $this->wp_options['wptba_userinfo'];
        }
        return array();
    }

    /** 
     * クライアントバージョンを読み込む.
     * 
     * @return string クライアントバージョン.
    */
    public function loadPluginVersion()
    {
        return '0.0.1';
    }

    /** 
     * サイトURLを読み込む.
     * 
     * @return string サイトURL.
    */
    public function loadSiteUrl()
    {
        return 'http://example.com';
    }

    /** 
     * メールアドレスを読み込む.
     * 
     * @return string メールアドレス.
    */
    public function loadEmail()
    {
        return 'admin@admin.com';
    }

    /** 
     * メールアドレスのオプトインを読み込む.
     * 
     * @return bool メールアドレスのオプトイン.
    */
    public function loadEmailOptin()
    {
        $user_info = $this->getUserInfo();
        if (isset($user_info['email_optin']))
            return $user_info['email_optin'] === true;
        return false;
    }
}
