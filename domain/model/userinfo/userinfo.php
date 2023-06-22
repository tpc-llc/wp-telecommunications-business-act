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
     * Email.
     * 
     * @var string $email Email.
    */
    public $email;

    /** 
     * Email Optin.
     * 
     * @var bool $email_optin Email Optin.
    */
    public $email_optin;

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
    public function fetchUserInfo() {
        $this->client_version = $this->user_info_repository->loadPluginVersion();
        $this->site_url = $this->user_info_repository->loadSiteUrl();
        $this->email = $this->user_info_repository->loadEmail();
        $this->email_optin = $this->user_info_repository->loadEmailOptin();
    }

    /** 
     * Save user info.
    */
    public function saveUserInfo()
    {
        $this->user_info_repository->saveUserInfo(
            $this->client_version,
            $this->site_url,
            $this->email,
            $this->email_optin
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
}
