<?php
/**
 * ユーザー情報の取得と送信を行う.
 *
 * @package WPTBA
 */

namespace WPTBA\Repository;

/**
 * User Info Repository.
 */
interface IUserInfoRepository
{
    /**
     * Constructor.
    */
    public function __construct();

    /**
     * サービスの利用者情報を登録する
     *
     *
     * @param string $client_version クライアントのバージョン.
     * @param string $site_url サイトのURL.
     * @param string $email メールアドレス.
     * @param bool $email_optin メールアドレスのオプトイン.
    */
    public function registerUserInfo($client_version, $site_url, $email, $email_optin);


    /**
     * サービスの利用者情報を保存する
     *
     * @param string $client_version クライアントのバージョン.
     * @param string $site_url サイトのURL.
     * @param string $email メールアドレス.
     * @param bool $email_optin メールアドレスのオプトイン.
     * @param string $plugin_status プラグインのステータス.
    */
    public function saveUserInfo($client_version, $site_url, $email, $email_optin, $plugin_status);

    /**
     * サービスの利用者情報を取得する
     *
     * @return array サービスのUnique IDの配列.
    */
    public function getUserInfo();

    /**
     * クライアントバージョンを読み込む.
     *
     * @return string クライアントバージョン.
    */
    public function loadPluginVersion();

    /**
     * サイトURLを読み込む.
     *
     * @return string サイトURL.
    */
    public function loadSiteUrl();

    /**
     * メールアドレスを読み込む.
     *
     * @return string メールアドレス.
    */
    public function loadEmail();

    /**
     * メールアドレスのオプトインを読み込む.
     *
     * @return bool メールアドレスのオプトイン.
    */
    public function loadEmailOptin();

    /**
     * プラグインの状態を読み込む.
     *
     * @return bool プラグインの状態.
    */
    public function loadIsPluginActive();

    /**
     * プラグインをクリーンアップする.
    */
    public function cleanupPlugin();
}
