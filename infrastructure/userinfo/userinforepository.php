<?php
/**
 * ユーザー情報の取得と送信を行う.
 *
 * @package WPTBA
 */

namespace WPTBA\Repository;

use WPTBA\Repository\IUserInfoRepository;

use OpenAPI\Client\Api\DefaultApi;
use GuzzleHttp\Client;
use WPTBA\lib\BaseConfig;

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
     * サービスの利用者情報を登録する
     *
     * @param string $client_version クライアントのバージョン.
     * @param string $site_url サイトのURL.
     * @param string $email メールアドレス.
     * @param bool $email_optin メールアドレスのオプトイン.
    */
    public function registerUserInfo($client_version, $site_url, $email, $email_optin)
    {
        $this->saveUserInfo(
            $client_version,
            $site_url,
            $email,
            $email_optin,
            'active'
        );
        $this->createSecretKey();
        $client_secret = $this->getSecretKey();
        $base_config = new BaseConfig($client_secret);
		$api         = new DefaultApi(
			new Client(),
			$base_config
		);
        return $api->usersPostAsync(
            array(
                'client_secret' => $client_secret,
                'client_version' => $client_version,
                'site_url' => $site_url,
                'email' => $email,
                'email_optin' => $email_optin
            ));
    }

    /**
     * サービスの利用者情報を保存する
     *
     * @param string $client_version クライアントのバージョン.
     * @param string $site_url サイトのURL.
     * @param string $email メールアドレス.
     * @param bool $email_optin メールアドレスのオプトイン.
     * @param string $plugin_status プラグインのステータス.
    */
    public function saveUserInfo($client_version, $site_url, $email, $email_optin, $plugin_status)
    {
        update_option('wptba_user_info', array(
            'client_version' => $client_version,
            'site_url' => $site_url,
            'email' => $email,
            'email_optin' => $email_optin
        ));
        $client_secret = $this->getSecretKey();
        $base_config = new BaseConfig($client_secret);
		$api         = new DefaultApi(
			new Client(),
			$base_config
		);
        return $api->usersPatchAsync(
            array(
                'client_secret' => $client_secret,
                'client_version' => $client_version,
                'site_url' => $site_url,
                'email' => $email,
                'email_optin' => $email_optin,
                'plugin_status' => $plugin_status
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
        if (!function_exists('get_plugin_data')) {
            require_once(ABSPATH . 'wp-admin/includes/plugin.php');
        }
        $plugin_data = get_plugin_data(__DIR__ . '/../../wp-telecommunications.php');
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

    /**
     * プラグインの状態を読み込む.
     *
     * @return bool プラグインの状態.
    */
    public function loadIsPluginActive()
    {
        is_plugin_active(__DIR__ . '/../../wp-telecommunications.php');
    }

    /**
     * プラグインのシークレットキーを作成する.
    */
    private function createSecretKey()
    {
        $secret_key = wp_generate_uuid4();
        update_option('wptba_secret_key', $secret_key);
    }

    /**
     * プラグインのシークレットキーを読み込む.
    */
    private function getSecretKey()
    {
        return get_option('wptba_secret_key', null);
    }

    /**
     * プラグインをクリーンアップする.
    */
    public function cleanupPlugin()
    {
        delete_option('wptba_user_info');
        delete_option('wptba_secret_key');
        $client_secret = $this->getSecretKey();
        $base_config = new BaseConfig($client_secret);
		$api         = new DefaultApi(
			new Client(),
			$base_config
		);
        return $api->usersDeleteAsync(array(
            'client_secret' => $client_secret
        ));
    }
}
