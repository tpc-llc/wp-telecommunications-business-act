<?php
/**
 * Get Admin Page Info.
 *
 * @package WPTBA
*/

namespace WPTBA\Presentation\Endpoint\Admin\PageInfo;

use WP_REST_Response;

use WPTBA\Presentation\Endpoint\Endpoint;
use WPTBA\Presentation\Endpoint\Admin\PageInfo\GetAdminPageInfoResponse;

use WPTBA\Application\Admin\AdminApplication;

/**
 * Get Admin Page Info.
 *
 * @OA\Get(
 *   path="/admin/pageinfo",
 *   summary="管理者ページ情報取得",
 *   @OA\Response(
 *     response=200,
 *     description="取得成功",
 *       @OA\JsonContent(ref="#/components/schemas/GetAdminPageInfoResponse")
 *     )
 *   )
 * )
*/
class GetAdminPageInfo
{
    /**
     * Admin Application.
     *
     * @var AdminApplication $admin_application Admin Application.
    */
    private $admin_application;

    /**
     * Constructor
     *
     * @param AdminApplication $admin_application Admin Application.
     */
    public function __construct($admin_application)
    {
        $this->admin_application = $admin_application;

        $callback_function = function () {
            $admin_page_info = $this->admin_application->getAdminPageInfo();
            $response = new GetAdminPageInfoResponse(
                $admin_page_info['service_official_policies_uids'],
                $admin_page_info['is_new_user'],
                $admin_page_info['current_user_email'],
                $admin_page_info['email_optin']
            );
            return new WP_REST_Response(
                array(
                    'service_official_policies_uids' => $response->getServiceOfficialUids(),
                    'is_new_user' => $response->getIsNewUser(),
                    'current_user_email' => $response->getCurrentUserEmail(),
                    'email_optin' => $response->getEmailOptin()
                ),
                200
            );
        };

        $permission_callback_function = function () {
            return current_user_can('manage_options');
        };

        new Endpoint(
            'admin/pageinfo',
            'GET',
            $callback_function,
            $permission_callback_function
        );
    }
}
