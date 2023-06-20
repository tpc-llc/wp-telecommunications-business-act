<?php
/**
 * Plugin Name: 電気通信事業法対応プラグイン
 * Plugin URI: https://github.com/tpc-llc/wp-telecommunications-business-act
 * Description: 3分で電気通信事業法に対応しましょう。サイトで使用中のサービスにチェックを入れるだけで対応完了です！
 * Author: 合同会社TPC
 * Version: 0.0.1
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author URI: https://tori-piyo.com
 * Text Domain: WPTBA
 * Domain Path: /languages
 *
 * @package WPTBA
 */

define('WPTBA_VERSION', '0.0.1');
define('WPTBA_ENV', 'production');

use WPTBA\Presentation\Endpoint\Admin\PageInfo\GetAdminPageInfo;
use WPTBA\Presentation\Endpoint\Admin\ServicePolicies\PostServicePolicies;
use WPTBA\Presentation\Endpoint\Public\ServicePolicies\GetPublicServicePolicies;
use WPTBA\Presentation\Page\ServiceSelectPage;

use WPTBA\Container\Container;

// Require autoloader.
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
}

require_once __DIR__ . '/infrastructure/require-once.php';
require_once __DIR__ . '/domain/require-once.php';
require_once __DIR__ . '/application/require-once.php';
require_once __DIR__ . '/presentation/require-once.php';
require_once __DIR__ . '/container.php';

$container = new Container();

// Filter.
add_filter('script_loader_tag', 'wptba_script_loader_tag', 10, 3);

// Shortcode.
add_shortcode('電気通信事業法', 'wptba_shortcode');

// Endpoint.
new GetAdminPageInfo($container->getAdminApplication());
new PostServicePolicies($container->getAdminApplication());

new GetPublicServicePolicies($container->getPublicApplication());

// Page.
new ServiceSelectPage();
