<?php
/**
 * Post Register User.
 *
 * @package WPTBA
*/

namespace WPTBA\Presentation\Endpoint\Admin\Register;

use WP_REST_Response;

use WPTBA\Presentation\Endpoint\Endpoint;
use WPTBA\Presentation\Endpoint\Admin\Register\PostRegisterRequest;

use WPTBA\Application\Admin\AdminApplication;

/**
 * Post Service Policies.
 *
 * @OA\Post(
 *   path="/admin/register",
 *   summary="管理者ページ情報を登録",
 *   @OA\RequestBody(
 *     required=true,
 *     @OA\JsonContent(ref="#/components/schemas/PostRegisterRequest")
 *   ),
 *   @OA\Response(
 *     response=200,
 *     description="作成成功",
 *   ),
 *  @OA\Response(
 *     response=400,
 *     description="メールアドレスが登録済みの場合",
 *  ),
 * )
*/
class PostRegister
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
            $register_request = new PostRegisterRequest(
                $request->get_params()['email'],
                $request->get_params()['email_optin']
            );
            $email = $register_request->getEmail();
            $email_optin = $register_request->getEmailOptin();
            $response = $this->admin_application->registerUserInfo($email, $email_optin);
            if (is_wp_error($response)) {
                $error_message = $response->get_error_message();
                return new WP_REST_Response($error_message, 400);
            }
            return new WP_REST_Response(null, 200);
        };

        $permission_callback_function = function () {
            return current_user_can('manage_options');
        };

        new Endpoint(
            'admin/register',
            'POST',
            $callback_function,
            $permission_callback_function
        );
    }
}
