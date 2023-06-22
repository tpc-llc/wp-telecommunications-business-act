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
        update_option('wptba_userinfo', array(
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
        return get_option('wptba_userinfo', array());
    }
}
