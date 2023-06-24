<?php
/**
 * Patch Email Optin.
 *
 * @package WPTBA
*/

namespace WPTBA\Presentation\Endpoint\Admin\EmailOptin;

use WP_REST_Response;

use WPTBA\Presentation\Endpoint\Endpoint;
use WPTBA\Presentation\Endpoint\Admin\EmailOptin\PatchEmailOptinRequest;

use WPTBA\Application\Admin\AdminApplication;

/**
 * Patch Email Optin.
 *
 * @OA\Patch(
 *   path="/admin/email-optin",
 *   summary="メールのオプトインを更新する",
 *   @OA\RequestBody(
 *     required=true,
 *     @OA\JsonContent(ref="#/components/schemas/PatchEmailOptinRequest")
 *   ),
 *   @OA\Response(
 *     response=200,
 *     description="更新成功",
 *   ),
 *   @OA\Response(
 *     response=404,
 *     description="ユーザー情報が存在しない場合",
 *   ),
 * )
*/
class PatchEmailOptin
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
            $register_request = new PatchEmailOptinRequest(
                $request->get_params()['email_optin']
            );
            $email_optin = $register_request->getEmailOptin();
            $this->admin_application->emailSwitchOptin($email_optin);
            return new WP_REST_Response(null, 200);
        };

        $permission_callback_function = function () {
            return current_user_can('manage_options');
        };

        new Endpoint(
            'admin/email-optin',
            'PATCH',
            $callback_function,
            $permission_callback_function
        );
    }
}
