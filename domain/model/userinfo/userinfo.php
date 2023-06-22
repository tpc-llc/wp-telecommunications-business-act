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
}
