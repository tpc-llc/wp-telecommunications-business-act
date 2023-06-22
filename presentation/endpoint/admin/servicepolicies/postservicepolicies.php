<?php
/**
 * Post service policies.
 *
 * @package WPTBA
*/

namespace WPTBA\Presentation\Endpoint\Admin\ServicePolicies;

use WP_REST_Response;

use WPTBA\Presentation\Endpoint\Endpoint;

use WPTBA\Application\Admin\AdminApplication;

/**
 * Post Service Policies.
 *
 * @OA\Post(
 *   path="/admin/service-policies",
 *   summary="サービスとポリシー更新",
 *   @OA\RequestBody(
 *     required=true,
 *     @OA\JsonContent(ref="#/components/schemas/PostServicePoliciesRequest")
 *   ),
 *   @OA\Response(
 *     response=200,
 *     description="更新成功",
 *   ),
 * )
*/
class PostServicePolicies
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

        $callback_function = function ($request) {
            $service_policies_request = new PostServicePoliciesRequest(
                $request->get_params()['service_official_policies_uids']
            );
            $service_official_policies_uids = $service_policies_request->getServiceOfficialUids();
            $this->admin_application->updateServiceAndPolicies($service_official_policies_uids);
            return new WP_REST_Response(null, 200);
        };

        $permission_callback_function = function () {
            return current_user_can('manage_options');
        };

        new Endpoint(
            'admin/service-policies',
            'POST',
            $callback_function,
            $permission_callback_function
        );
    }
}
