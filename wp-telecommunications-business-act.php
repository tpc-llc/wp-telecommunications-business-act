<?php
/**
 * Plugin Name: Telecommunications Business Act WP
 * Plugin URI: https://github.com/tpc-llc/wp-telecommunications-business-act
 * Description: This is a plugin that efficiently creates external transmission information specified by the revised Telecommunications Business Act.
 * Author: TPC LLC
 * Version: 0.2.2
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author URI: https://tori-piyo.com
 * Text Domain: WPTBA
 * Domain Path: /languages/
 *
 * @package WPTBA
 */

namespace WPTBA;

load_plugin_textdomain(
    'WPTBA',
    false,
    plugin_basename(dirname(__FILE__)) . '/languages'
);

define('WPTBA_VERSION', '0.2.2');
define('WPTBA_ENV', 'production');

use WPTBA\Presentation\Filter\AddModuleTypeWithScriptLoaderTag;

use WPTBA\Presentation\ShortCode\RegisterWPTBAShortCode;

use WPTBA\Presentation\Endpoint\Admin\PageInfo\GetAdminPageInfo;
use WPTBA\Presentation\Endpoint\Admin\ServicePolicies\PostServicePolicies;
use WPTBA\Presentation\Endpoint\Public\ServicePolicies\GetPublicServicePolicies;
use WPTBA\Presentation\Endpoint\Admin\Register\PostRegister;
use WPTBA\Presentation\Endpoint\Admin\EmailOptin\PatchEmailOptin;

use WPTBA\Presentation\Page\AdminPage;

use WPTBA\Presentation\Action\ActivatedPlugin;
use WPTBA\Presentation\Action\DectivatedPlugin;
use WPTBA\Presentation\Action\UpgraderProcessComplete;

use WPTBA\Presentation\Hook\RegisterUninstallHook;


use WPTBA\Container\Container;

// Require autoloader.
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
}
require_once __DIR__ . '/lib/require-once.php';
require_once __DIR__ . '/infrastructure/require-once.php';
require_once __DIR__ . '/domain/require-once.php';
require_once __DIR__ . '/application/require-once.php';
require_once __DIR__ . '/presentation/require-once.php';
require_once __DIR__ . '/container.php';

//Require updater.
require 'plugin-update-checker/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$updateChecker = PucFactory::buildUpdateChecker(
    'https://github.com/tpc-llc/wp-telecommunications-business-act',
    __FILE__,
    'telecommunications-business-act-wp'
);

//Set the branch that contains the stable release.
$updateChecker->setBranch('release');
//Get branch only.
$updateChecker->setAuthentication('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');

$container = new Container();

// Filter.
new AddModuleTypeWithScriptLoaderTag();

// Shortcode.
new RegisterWPTBAShortCode();

// Endpoint.
new GetAdminPageInfo($container->getAdminApplication());
new PostServicePolicies($container->getAdminApplication());
new PostRegister($container->getAdminApplication());
new PatchEmailOptin($container->getAdminApplication());

new GetPublicServicePolicies($container->getPublicApplication());

// Page.
$page_name = __('Telecommunications Business Act', 'WPTBA');
$settings_page_slug = 'telecommunications-business-act';
$js_name = 'AdminPage';
new AdminPage($page_name, $settings_page_slug, $js_name);

// Action.
$plugin_basename = plugin_basename(__FILE__);
new ActivatedPlugin($container->getPluginStateManagementApplication(), $plugin_basename, $settings_page_slug);
new DectivatedPlugin($container->getPluginStateManagementApplication(), $plugin_basename);
new UpgraderProcessComplete($container->getPluginStateManagementApplication(), $plugin_basename);

function wptba_uninstall_hook()
{
    $container = new Container();
    new RegisterUninstallHook($container->getPluginStateManagementApplication());
}
register_uninstall_hook(__FILE__, 'WPTBA\wptba_uninstall_hook');
