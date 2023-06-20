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

/**
 * DIコンテナ.
*/
class Container
{
    /**
     * サービスとポリシーの保存と取得を行う.
     *
     * @return IServicePoliciesRepository サービスとポリシーの保存と取得を行う.
    */
    public static function getServicePoliciesRepository()
    {
        if (WPTBA_ENV === 'test') {
            return new ServicePoliciesRepositoryTest();
        }
        return new ServicePoliciesRepository();
    }
}
