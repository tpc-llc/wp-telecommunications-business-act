<?php
/**
 * Admin Application.
 *
 * @package WPTBA
*/

namespace WPTBA\Application\Admin;

use WPTBA\Repository\IServicePoliciesRepository;
use WPTBA\Repository\IUserInfoRepository;
use WPTBA\Domain\Model\ServicePolicies;
use WPTBA\Domain\Model\UserInfo;

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
     * ユーザー情報の保存と取得を行う.
     *
     * @var IUserInfoRepository ユーザー情報の保存と取得を行う.
    */
    private $user_info_repository;

    /**
     * コンストラクタ.
     *
     * @param IServicePoliciesRepository $service_policies_repository サービスとポリシーの保存と取得を行う.
     * @param IUserInfoRepository $user_info_repository ユーザー情報の保存と取得を行う.
     *
     * @return void
    */
    public function __construct($service_policies_repository, $user_info_repository)
    {
        $this->service_policies_repository = $service_policies_repository;
        $this->user_info_repository = $user_info_repository;
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

        $user_info = new UserInfo($this->user_info_repository);
        $user_info->fetchUserInfo();

        return array(
            'service_official_policies_uids' => $service_official_policies_uids,
            'is_new_user' => $user_info->isNewUser(),
            'current_user_email' => $user_info->getEmail(),
            'email_optin' => $user_info->getEmailOptin()
        );
    }

    /**
     * Email Switch Optin, Optout.
     *
     * @param boolean $email_optin Email Optin.
    */
    public function emailSwitchOptin($email_optin)
    {
        $user_info = new UserInfo($this->user_info_repository);
        $user_info->getUserInfo();
        $user_info->emailSwitchOptin($email_optin);
        $user_info->saveUserInfo();
    }

    /**
     * 利用しているサービスとポリシーを更新する.
     *
     * @param array $service_official_policies_uids サービスとポリシーのUnique IDの配列.
    */
    public function updateServiceAndPolicies($service_official_policies_uids)
    {
        $service_policies = new ServicePolicies($this->service_policies_repository);
        $service_policies->updateAllServiceOfficialPolicies($service_official_policies_uids);
    }

    /**
     * ユーザー情報を登録する.
     *
     * @param string $email メールアドレス.
     * @param bool $email_optin メールアドレスのオプトイン.
    */
    public function registerUserInfo($email, $email_optin)
    {
        $user_info = new UserInfo($this->user_info_repository);
        $user_info->fetchUserInfo();
        return $user_info->registerUserInfo($email, $email_optin);
    }
}
