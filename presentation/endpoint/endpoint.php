<?php
/**
 * エンドポイント.
 *
 * @package WPTBA
 */

namespace WPTBA\Presentation\Endpoint;

/**
 * エンドポイント.
 *
 * @OA\Info(
 *   title="電気通信事業法プラグインのPHPバックエンド",
 *   description="電気通信事業法プラグインのPHPバックエンド",
 *   version="1.0.0",
 * )
 *
 * @OA\Server(url="http://localhost:8080/wp-json/wptba/")
 */
class Endpoint
{
    /**
     * Path設定
     *
     * @var string $route path.
     */
    private $route;

    /**
     * HTTP Method.
     *
     * @var string $method method.
     */
    private $method;

    /**
     * Callback function.
     *
     * @var function $callback function.
     */
    private $callback;

    /**
     * Permission check function.
     *
     * @var function $permission_callback Permission check.
     */
    private $permission_callback;

    /**
     * REST APIを受け付ける.
     *
     * @param string   $route パス（wp/v1以下）.
     * @param string   $method GET, POST, PUT, PATCH.
     * @param function $callback_func コールバック関数.
     * @param function $permission_callback_func 権限を確認する関数.
     */
    public function __construct($route, $method, $callback_func, $permission_callback_func)
    {
        $this->route               = $route;
        $this->method              = $method;
        $this->callback            = $callback_func;
        $this->permission_callback = $permission_callback_func;
        add_action(
            'rest_api_init',
            array(
                $this,
                'registerEndpoint',
            )
        );
    }

    /**
     * REST APIにendpointを登録する.
     */
    public function registerEndpoint()
    {
        register_rest_route(
            'wptba',
            $this->route,
            array(
                'methods'             => $this->method,
                'callback'            => $this->callback,
                'permission_callback' => $this->permission_callback,
            ),
            false
        );
    }
}
