<?php
/**
 * User Infoの単体テスト.
*/

namespace WPTBA\Test\Unit\UserInfo;

use PHPUnit\Framework\TestCase;
use WPTBA\Repository\UserInfoRepositoryTest;
use WPTBA\Domain\Model\UserInfo;

/**
 * User Infoの単体テスト.
 */
class TestUserInfo extends TestCase
{
    /**
     * User Info Repository Test.
     *
     * @var UserInfoRepositoryTest $user_info_repository User Info Repository Test.
    */
    private $user_info_repository;

    /**
     * Constructor.
    */
    public function __construct()
    {
        parent::__construct();
        $this->user_info_repository = new UserInfoRepositoryTest();
    }

    /**
     * 新しいユーザーの場合.
    */
    public function testNewUser()
    {
        $this->user_info_repository->wp_options = array();
        $user_info = new UserInfo($this->user_info_repository);
        $this->assertEquals($user_info->isNewUser(), true);
    }

    /**
     * 新しくないユーザーの場合.
    */
    public function testNotNewUser()
    {
        $this->user_info_repository->wp_options = array(
            'wptba_user_info' => array(
                'client_version' => '1.0.0',
                'site_url' => 'https://example.com',
                'email' => 'admin@admin.com',
                'email_optin' => true,
        ));
        $user_info = new UserInfo($this->user_info_repository);
        $this->assertEquals($user_info->isNewUser(), false);
    }

    /**
     * 適切に登録されるか.
    */
    public function testRegisterUserInfo()
    {
        $user_info = new UserInfo($this->user_info_repository);
        $user_info->fetchUserInfo();
        $user_info->registerUserInfo("admin@admin.com", true);
        $this->assertNotEmpty($this->user_info_repository->wp_options['wptba_secret_key']);
        $this->assertEquals(
            $this->user_info_repository->wp_options['wptba_user_info']['client_version'],
            '0.0.1'
        );
        $this->assertEquals(
            $this->user_info_repository->wp_options['wptba_user_info']['site_url'],
            'https://example.com'
        );
        $this->assertEquals(
            $this->user_info_repository->wp_options['wptba_user_info']['email'],
            'admin@admin.com'
        );
        $this->assertEquals(
            $this->user_info_repository->wp_options['wptba_user_info']['email_optin'],
            true
        );
    }

    /**
     * 適切に保存されるか.
    */
    public function testSaveUserInfo()
    {
        $user_info = new UserInfo($this->user_info_repository);
        $user_info->fetchUserInfo();
        $user_info->pluginActivated();
        $user_info->saveUserInfo();
        $this->assertEquals(
            $this->user_info_repository->wp_options['wptba_user_info']['client_version'],
            '0.0.1'
        );
        $this->assertEquals(
            $this->user_info_repository->wp_options['wptba_user_info']['site_url'],
            'https://example.com'
        );
        $this->assertEquals(
            $this->user_info_repository->wp_options['wptba_user_info']['email'],
            'admin@admin.com'
        );
        $this->assertEquals(
            $this->user_info_repository->wp_options['wptba_user_info']['email_optin'],
            false
        );
    }

    /**
     * 適切に削除されるか.
    */
    public function testDeleteUserInfo()
    {
        $user_info = new UserInfo($this->user_info_repository);
        $user_info->fetchUserInfo();
        $user_info->registerUserInfo("admin@admin.com", true);

        $user_info->deleteUserInfo();
        $user_info->fetchUserInfo();
        
        $this->assertTrue($user_info->isNewUser());
    }
}
