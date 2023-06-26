<?php
/**
 * User Info.
 *
 * @package WPTBA
 */

namespace WPTBA\Domain\Model;

use WPTBA\Repository\IUserInfoRepository;

/**
 * User Info.
 */
class UserInfo
{
    /**
     * User Info Repository.
     *
     * @var IUserInfoRepository $user_info_repository User Info Repository.
    */
    private $user_info_repository;

    /**
     * Client Version.
     *
     * @var string $client_version Client Version.
    */
    private $client_version;

    /**
     * Site URL.
     *
     * @var string $site_url Site URL.
    */
    private $site_url;

    /**
     * Plugin Status.
     *
     * @var string $plugin_status Plugin Status.
    */
    private $plugin_status;

    /**
     * Email.
     *
     * @var string $email Email.
    */
    private $email;

    /**
     * Email Optin.
     *
     * @var bool $email_optin Email Optin.
    */
    private $email_optin;

    /**
     * Constructor.
     *
     * @param IUserInfoRepository $user_info_repository User Info Repository.
    */
    public function __construct($user_info_repository)
    {
        $this->user_info_repository = $user_info_repository;
    }

    /**
     * Get Email.
     *
     * @return string Email.
    */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Get Email Optin.
     *
     * @return bool Email Optin.
    */
    public function getEmailOptin()
    {
        return $this->email_optin;
    }

    /**
     * Plugin activated.
    */
    public function pluginActivated()
    {
        $this->plugin_status = 'active';
    }

    /**
     * Plugin deactivated.
    */
    public function pluginDeactivated()
    {
        $this->plugin_status = 'inactive';
    }

    /**
     * Get user info.
    */
    public function getUserInfo()
    {
        $current_info = $this->user_info_repository->getUserInfo();
        $this->client_version = $current_info['client_version'] ? (isset($current_info['client_version'])) : null;
        $this->site_url = $current_info['site_url'] ? (isset($current_info['site_url'])) : null;
        $this->email = $current_info['email'] ? (isset($current_info['email'])) : null;
        $this->email_optin = $current_info['email_optin'] ? (isset($current_info['email_optin'])) : null;
    }

    /**
     * Fetch all user info.
    */
    public function fetchUserInfo()
    {
        $this->client_version = $this->user_info_repository->loadPluginVersion();
        $this->site_url = $this->user_info_repository->loadSiteUrl();
        $this->email = $this->user_info_repository->loadEmail();
        $this->email_optin = $this->user_info_repository->loadEmailOptin();
    }

    /**
     * Email Switch Optin.
     *
     * @param bool $email_optin Email Optin.
    */
    public function emailSwitchOptin($email_optin)
    {
        $this->email_optin = $email_optin;
    }

    /**
     * Register user info.
     *
     * @param string $email Email.
     * @param bool $email_optin Email Optin.
    */
    public function registerUserInfo($email, $email_optin)
    {
        $this->email = $email;
        $this->email_optin = $email_optin;
        $this->client_version = $this->user_info_repository->loadPluginVersion();
        return $this->user_info_repository->registerUserInfo(
            $this->client_version,
            $this->site_url,
            $this->email,
            $this->email_optin
        );
    }

    /**
     * Save user info.
    */
    public function saveUserInfo()
    {
        return $this->user_info_repository->saveUserInfo(
            $this->client_version,
            $this->site_url,
            $this->email,
            $this->email_optin,
            $this->plugin_status
        );
    }

    /**
     * Is new user.
     *
     * @return bool Is new user.
    */
    public function isNewUser()
    {
        $user_info = $this->user_info_repository->getUserInfo();
        return empty($user_info);
    }

    /**
     * Is User Info existed.
     *
     * @return bool Is User Info existed.
    */
    public function isUserInfoExisted()
    {
        return !$this->isNewUser();
    }

    /**
     * Has update user info.
     *
     * @return bool Has update.
    */
    public function hasUpdateUserInfo()
    {
        $user_info = $this->user_info_repository->getUserInfo();
        return $user_info['client_version'] !== $this->client_version
            || $user_info['site_url'] !== $this->site_url
            || $user_info['email'] !== $this->email
            || $user_info['email_optin'] !== $this->email_optin;
    }

    /**
     * Delete user info.
    */
    public function deleteUserInfo()
    {
        $this->user_info_repository->cleanupPlugin();
    }
}
