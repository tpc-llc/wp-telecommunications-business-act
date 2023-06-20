<?php
/**
 * Admin Application.
 *
 * @package WPTBA
*/

namespace WPTBA\Application\Admin;

use WPTBA\Repository\IServicePoliciesRepository;
use WPTBA\Domain\Model\ServicePolicies;

/**
 * Admin Application.
*/
class AdminApplication
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
     * 管理画面で必要な情報を取得する.
     *
     * @return array 管理画面で必要な情報.
    */
    public function getAdminPageInfo()
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

    /** 
     * 利用しているサービスとポリシーを更新する.
     * 
     * @param array $service_and_policies_uids サービスとポリシーのUnique IDの配列.
    */
    public function updateServiceAndPolicies($service_and_policies_uids)
    {
        $service_policies = new ServicePolicies($this->service_policies_repository);
        $service_policies->updateAllServiceAndPolicies($service_and_policies_uids);
    }
}
