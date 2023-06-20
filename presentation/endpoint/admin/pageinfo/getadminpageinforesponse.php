<?php
/**
 * Admin Application Request and Response.
*/

namespace WPTBA\Presentation\Endpoint\Admin\PageInfo;

/**
 * Get service and policies response.
*/
class GetAdminPageInfoResponse
{
    /**
     * Service and policies.
     *
     * @var array $service_official_policies_uids Service official uids.
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
