<?php
/**
 * Admin Application Request and Response.
*/

namespace WPTBA\Presentation\Endpoint\Admin\ServicePolicies;

/**
 * Post service and policies request.
 *
 * @OA\Schema(
 *  required={"service_official_policies_uids"}
 * )
*/
class PostServicePoliciesRequest
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
     * Constructor.
     *
     * @param array $service_official_policies_uids Service official uids.
     * @return void
    */
    public function __construct($service_official_policies_uids)
    {
        $this->service_official_policies_uids = $service_official_policies_uids;
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
}
