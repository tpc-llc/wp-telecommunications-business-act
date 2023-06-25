<?php
/**
 * Admin Application Request and Response.
 *
 * @package WPTBA
*/

namespace WPTBA\Presentation\Endpoint\Admin\PageInfo;

/**
 * Get Admin Page Info response.
 *
 * @OA\Schema(
 *  required={"service_official_policies_uids", "is_new_user", "current_user_email", "email_optin"}
 * )
*/
class GetAdminPageInfoResponse
{
    /**
     * Service and policies.
     *
     * @var array $service_official_policies_uids Service official uids.
     *
     * @OA\Property(
     *   type="array",
     *   @OA\Items(
     *     type="string"
     *   )
     * )
    */
    private $service_official_policies_uids;

    /**
     * Is new user.
     *
     * @var bool $is_new_user Is new user.
     *
     * @OA\Property(
     *  type="boolean"
     * )
    */
    private $is_new_user;

    /**
     * Current user email.
     *
     * @var string $current_user_email Current user email.
     *
     * @OA\Property(
     * type="string"
     * )
    */
    private $current_user_email;

    /**
     * Email optin.
     *
     * @var bool $email_optin Email optin.
     *
     * @OA\Property(
     * type="boolean"
     * )
    */
    private $email_optin;


    /**
     * Constructor.
     *
     * @param array $service_official_policies_uids Service official uids.
     * @param bool $is_new_user Is new user.
     * @param string $current_user_email Current user email.
     * @param bool $email_optin Email optin.
     *
     * @return void
    */
    public function __construct($service_official_policies_uids, $is_new_user, $current_user_email, $email_optin)
    {
        $this->service_official_policies_uids = $service_official_policies_uids;
        $this->is_new_user = $is_new_user;
        $this->current_user_email = $current_user_email;
        $this->email_optin = $email_optin;
    }

    /**
     * Get service official uids.
     *
     * @return array Service official uids.
    */
    public function getServiceOfficialUids()
    {
        return $this->service_official_policies_uids;
    }

    /**
     * Get is new user.
     *
     * @return bool Is new user.
    */
    public function getIsNewUser()
    {
        return $this->is_new_user;
    }

    /**
     * Get current user email.
     *
     * @return string Current user email.
    */
    public function getCurrentUserEmail()
    {
        return $this->current_user_email;
    }

    /**
     * Get email optin.
     *
     * @return bool Email optin.
    */
    public function getEmailOptin()
    {
        return $this->email_optin;
    }
}
