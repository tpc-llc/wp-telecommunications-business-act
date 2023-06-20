<?php
/**
 * Service Policiesの単体テスト.
*/

namespace WPTBA\Test\Unit\ServicePolicies;

use PHPUnit\Framework\TestCase;
use WPTBA\Repository\ServicePoliciesRepositoryTest;
use WPTBA\Domain\Model\ServicePolicies;
use WPTBA\Domain\Model\ServiceOfficialPolicy;

/**
 * Service Policiesの単体テスト.
 */
class TestServicePolicies extends TestCase
{
    /**
     * Service Policies Repository Test.
     *
     * @var ServicePoliciesRepositoryTest $service_policies_repository Service Policies Repository Test.
    */
    private $service_policies_repository;

    /**
     * Constructor.
    */
    public function __construct()
    {
        parent::__construct();
        $this->service_policies_repository = new ServicePoliciesRepositoryTest();
    }

    /**
     * Service Official Policiesが適切な型で取得できるか.
     */
    public function testGetAllServiceOfficialPolicies()
    {
        $this->service_policies_repository->saveAllServiceOfficialPolicies(array(
            'google-analytics',
        ));

        $service_policies = new ServicePolicies($this->service_policies_repository);
        $service_official_policies = $service_policies->getAllServiceOfficialPolicies();
        
        $this->assertEquals($service_official_policies, array(
            new ServiceOfficialPolicy('google-analytics'),
        ));
    }
}
