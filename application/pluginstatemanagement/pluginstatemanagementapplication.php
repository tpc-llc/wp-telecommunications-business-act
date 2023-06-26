<?php
/**
 * Plugin State Management Application.
 *
 * @package WPTBA
*/

namespace WPTBA\Application;

use WPTBA\Repository\IUserInfoRepository;
use WPTBA\Domain\Model\UserInfo;

/**
 * Plugin State Management Application.
*/
class PluginStateManagementApplication
{
    /**
     * ユーザー情報の保存と取得を行う.
     *
     * @var IUserInfoRepository ユーザー情報の保存と取得を行う.
    */
    private $user_info_repository;

    /**
     * コンストラクタ.
     *
     * @param IUserInfoRepository $user_info_repository ユーザー情報の保存と取得を行う.
     *
     * @return void
    */
    public function __construct($user_info_repository)
    {
        $this->user_info_repository = $user_info_repository;
    }

    /**
     * ユーザー情報をプラグイン更新時に更新する.
    */
    public function updated()
    {
        $user_info = new UserInfo($this->user_info_repository);
        if ($user_info->isNewUser()) {
            return;
        }
        $user_info->fetchUserInfo();
        return $user_info->saveUserInfo();
    }

    /**
     * ユーザー情報をプラグイン有効化時に更新する.
    */
    public function activated()
    {
        $user_info = new UserInfo($this->user_info_repository);
        if ($user_info->isNewUser()) {
            return;
        }
        $user_info->fetchUserInfo();
        $user_info->pluginActivated();
        return $user_info->saveUserInfo();
    }

    /**
     * ユーザー情報をプラグイン無効化時に更新する.
    */
    public function deactivated()
    {
        $user_info = new UserInfo($this->user_info_repository);
        if ($user_info->isNewUser()) {
            return;
        }
        $user_info->fetchUserInfo();
        $user_info->pluginDeactivated();
        return $user_info->saveUserInfo();
    }

    /**
     * ユーザー情報をプラグイン削除時に更新する.
    */
    public function uninstalled()
    {
        $user_info = new UserInfo($this->user_info_repository);
        if ($user_info->isNewUser()) {
            return;
        }
        return $user_info->deleteUserInfo();
    }
}
