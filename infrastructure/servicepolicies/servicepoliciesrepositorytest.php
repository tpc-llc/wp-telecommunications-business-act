<?php
/**
 * サービスとポリシーの保存と取得を行う.
 *
 * @package WPTBA
 */

namespace WPTBA\Repository;

use WPTBA\Repository\IServicePoliciesRepository;

/**
 * Service policies repository.
 */
class ServicePoliciesRepositoryTest implements IServicePoliciesRepository
{
    /**
     * WP Options.
     *
     * @var array $wp_options WP Options.
    */
    public $wp_options;

    /**
     * Constructor.
    */
    public function __construct()
    {
        $this->wp_options = array();
    }

    /**
     * サービスのUnique IDの配列を保存する.
     *
     * @param array $service_official_policies サービスのUnique IDの配列.
    */
    public function saveAllServiceOfficialPolicies($service_policies)
    {
        $this->wp_options['wptba_service_official_policies'] = $service_policies;
    }

    /**
     * サービスのUnique IDの配列を取得する.
     *
     * @return array サービスのUnique IDの配列.
    */
    public function getAllServiceOfficialPolicies()
    {
        if (isset($this->wp_options['wptba_service_official_policies'])) {
            return $this->wp_options['wptba_service_official_policies'];
        }
        return array();
    }
}
