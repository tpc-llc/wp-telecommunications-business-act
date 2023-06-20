<?php
/**
 * DIコンテナ.
 *
 * @package WPTBA
 */

namespace WPTBA\Container;

use WPTBA\Repository\IServicePoliciesRepository;
use WPTBA\Repository\ServicePoliciesRepository;
use WPTBA\Repository\ServicePoliciesRepositoryTest;

use WPTBA\Application\Admin\AdminApplication;
use WPTBA\Application\Public\PublicApplication;

/**
 * DIコンテナ.
*/
class Container
{
    /**
     * Service Policies Repository.
     *
     * @var IServicePoliciesRepository Service Policies Repository.
    */
    private $service_policies_repository;

    /**
     * Constructor.
    */
    public function __construct()
    {
        switch (WPTBA_ENV) {
            case 'test':
                $this->service_policies_repository = new ServicePoliciesRepositoryTest();
                break;
            default:
                $this->service_policies_repository = new ServicePoliciesRepository();
                break;
        }
    }

    /**
     * Get Admin Application.
    */
    public function getAdminApplication()
    {
        return new AdminApplication($this->service_policies_repository);
    }

    /**
     * Get Public Application.
    */
    public function getPublicApplication()
    {
        return new PublicApplication($this->service_policies_repository);
    }
}
