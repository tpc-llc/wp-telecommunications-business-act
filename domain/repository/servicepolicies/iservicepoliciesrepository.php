<?php
/**
 * サービスとポリシーの保存と取得を行う.
 *
 * @package WPTBA
 */

namespace WPTBA\Repository;

/**
 * Service policies repository.
 */
interface IServicePoliciesRepository
{
    /**
     * Constructor.
    */
    public function __construct();

    /**
     * サービスのUnique IDの配列を保存する.
     *
     * @param array $service_official_policies サービスのUnique IDの配列.
    */
    public function saveAllServiceOfficialPolicies($service_policies);

    /**
     * サービスのUnique IDの配列を取得する.
     *
     * @return array サービスのUnique IDの配列.
    */
    public function getAllServiceOfficialPolicies();
}
