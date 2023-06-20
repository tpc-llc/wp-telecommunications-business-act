<?php
/** 
 * Service Policiesの単体テスト.
*/

namespace WPTBA\Test\Unit\ServicePolicies;

use PHPUnit\Framework\TestCase;

use WPTBA\Container\Container;
use WPTBA\Domain\Model\ServicePolicies;

/**
 * Service Policiesの単体テスト.
 */
class TestServicePolicies extends TestCase
{
    /**
     * @test
     */
    public function getAllServiceOfficialPolicies()
    {
        $service_policies = new ServicePolicies(Container::getServicePoliciesRepository());
        $this->assertEquals(array(), $service_policies->getAllServiceOfficialPolicies());
    }
}