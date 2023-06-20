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
            $response = new GetAdminPageInfoResponse($admin_page_info['service_official_policies_uids']);
            return new WP_REST_Response(
                array(
                    'service_official_policies_uids' => $response->getServiceOfficialUids()
                ),
                200
            );
        };

        $permission_callback_function = function () {
            return true;
        };

        new Endpoint(
            'admin/pageinfo',
            'GET',
            $callback_function,
            $permission_callback_function
        );
    }
}
