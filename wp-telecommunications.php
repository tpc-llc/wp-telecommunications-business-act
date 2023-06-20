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

use WPTBA\Page\ServiceSelectPage;

// Require autoloader.
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
}

require_once __DIR__ . '/filter/require-once.php';
add_filter('script_loader_tag', 'wptba_script_loader_tag', 10, 3);

require_once __DIR__ . '/shortcode/require-once.php';
add_shortcode('電気通信事業法', 'wptba_shortcode');

require_once __DIR__ . '/page/require-once.php';
new ServiceSelectPage();