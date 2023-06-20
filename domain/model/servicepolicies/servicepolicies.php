<?php
/**
 * Service Policies.
 *
 * @package WPTBA
 */

namespace WPTBA\Domain\Model;

use WPTBA\Domain\Model\ServiceOfficialPolicy;
use WPTBA\Repository\IServicePoliciesRepository;

/**
 * Service Policies.
 */
class ServicePolicies
{
    /**
     * Service Policies Repository.
     *
     * @var IServicePoliciesRepository $service_policies_repository Service Policies Repository.
    */
    private $service_policies_repository;

    /**
     * Constructor.
     *
     * @param IServicePoliciesRepository $service_policies_repository Service Policies Repository.
    */
    public function __construct($service_policies_repository)
    {
        $this->service_policies_repository = $service_policies_repository;
    }

    /**
     * Get all service official policies.
     * 
     * @return array All service official policies.
    */
    public function getAllServiceOfficialPolicies()
    {
        $service_official_policies = array();
        $service_unique_ids = $this->service_policies_repository->getAllServiceOfficialPolicies();
        foreach ($service_unique_ids as $service_unique_id) {
            $service_official_policies[] = new ServiceOfficialPolicy($service_unique_id);
        }
        return $service_official_policies;
    }

    /** 
     * Update all service and policies.
     * 
     * @param array $service_and_policies_uids Service and policies unique ids.
     * @return void
    */
    public function updateAllServiceAndPolicies($service_and_policies_uids)
    {
        $this->service_policies_repository->saveAllServiceOfficialPolicies($service_and_policies_uids);
    }
}
