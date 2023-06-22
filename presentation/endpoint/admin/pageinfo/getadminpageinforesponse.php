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
 *  required={"service_official_policies_uids", "is_new_user"}
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
     * Constructor.
     *
     * @param array $service_official_policies_uids Service official uids.
     * @param bool $is_new_user Is new user.
     * 
     * @return void
    */
    public function __construct($service_official_policies_uids, $is_new_user)
    {
        $this->service_official_policies_uids = $service_official_policies_uids;
        $this->is_new_user = $is_new_user;
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
}
