<?php
/**
 * Get Service Policies for shortcode.
*/

namespace WPTBA\Presentation\Endpoint\Public\ServicePolicies;

use WP_REST_Response;

use WPTBA\Presentation\Endpoint\Endpoint;
use WPTBA\Presentation\Endpoint\Public\ServicePolicies\GetPublicServicePoliciesResponse;

use WPTBA\Application\Public\PublicApplication;

/**
 * Get Service Policies for shortcode.
*/
class GetPublicServicePolicies
{
    /**
     * Public Application.
     *
     * @var PublicApplication $public_application Public Application.
    */
    private $public_application;

    /**
     * Constructor
     *
     * @param PublicApplication $public_application Public Application.
     */
    public function __construct($public_application)
    {
        $this->public_application = $public_application;

        $callback_function = function () {
            $public_page_info = $this->public_application->getServiceAndPolicies();
            $response = new GetPublicServicePoliciesResponse($public_page_info['service_official_policies_uids']);
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
            'public/service-policies',
            'GET',
            $callback_function,
            $permission_callback_function
        );
    }
}
