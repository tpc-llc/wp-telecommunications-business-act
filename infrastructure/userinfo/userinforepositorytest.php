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
}
