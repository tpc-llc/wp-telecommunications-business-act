<?php
/**
 * 描画先を生成するショートコード.
 *
 * @package WPTBA
 */

namespace WPTBA\Presentation\ShortCode;

/**
 * ショートコードを登録する.
 */
class RegisterWPTBAShortCode
{
    public function __construct()
    {
        add_shortcode('電気通信事業法', array($this, 'wptbaShortcode'));
    }

    private function wptbaShortcode()
    {
        wp_enqueue_script(
            'wptba-page-TBAWidget.js',
            plugins_url('../frontend/dist/assets/TBAWidget.js', dirname(__FILE__)),
            array(
                'jquery',
                'wp-element',
            ),
            wp_rand(),
            true
        );
        wp_localize_script(
            'wptba-page-TBAWidget.js',
            'wptba',
            array(
                '_wpnonce' => wp_create_nonce('wp_rest'),
            )
        );
        return '<div id="wptba-root"></div>';
    }
}
