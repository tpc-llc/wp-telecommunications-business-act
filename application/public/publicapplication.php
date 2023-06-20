<?php
/**
 * Public Application.
 *
 * @package WPTBA
*/

namespace WPTBA\Application\Public;

use WPTBA\Repository\IServicePoliciesRepository;
use WPTBA\Domain\Model\ServicePolicies;

/**
 * Public Application.
*/
class PublicApplication
{
    /**
     * サービスとポリシーの保存と取得を行う.
     *
     * @var IServicePoliciesRepository サービスとポリシーの保存と取得を行う.
    */
    private $service_policies_repository;

    /**
     * コンストラクタ.
     *
     * @param IServicePoliciesRepository $service_policies_repository サービスとポリシーの保存と取得を行う.
     * @return void
    */
    public function __construct($service_policies_repository)
    {
        $this->service_policies_repository = $service_policies_repository;
    }

    /**
     * 利用するにチェックが入っているUnique IDを取得する.
     *
     * @return array 利用するにチェックが入っているUnique ID.
    */
    public function getServiceAndPolicies()
    {
        $service_policies = new ServicePolicies($this->service_policies_repository);
        $service_official_policies = $service_policies->getAllServiceOfficialPolicies();
        $service_official_policies_uids = array();
        foreach ($service_official_policies as $service_official_policy) {
            $service_official_policies_uids[] = $service_official_policy->getServiceUniqueId();
        }
        return array(
            'service_official_policies_uids' => $service_official_policies_uids
        );
    }
}
