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
use WPTBA\Repository\IUserInfoRepository;
use WPTBA\Repository\UserInfoRepository;
use WPTBA\Repository\UserInfoRepositoryTest;

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
     * User Info Repository.
     *
     * @var IUserInfoRepository User Info Repository.
    */
    private $user_info_repository;

    /**
     * Constructor.
    */
    public function __construct()
    {
        switch (WPTBA_ENV) {
            case 'test':
                $this->service_policies_repository = new ServicePoliciesRepositoryTest();
                $this->user_info_repository = new UserInfoRepositoryTest();
                break;
            default:
                $this->service_policies_repository = new ServicePoliciesRepository();
                $this->user_info_repository = new UserInfoRepository();
                break;
        }
    }

    /**
     * Get Admin Application.
    */
    public function getAdminApplication()
    {
        return new AdminApplication($this->service_policies_repository, $this->user_info_repository);
    }

    /**
     * Get Public Application.
    */
    public function getPublicApplication()
    {
        return new PublicApplication($this->service_policies_repository);
    }
}
