<?php
/**
 * 描画先を生成するショートコード.
 *
 * @package WPTBA
 */

/**
 * ショートコードを登録する.
 */
function wptba_shortcode() {
	wp_enqueue_script(
		'wptba-page-TBAWidget.js',
		plugins_url( '/frontend/dist/assets/TBAWidget.js', dirname( __FILE__ ) ),
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
			'_wpnonce' => wp_create_nonce( 'wp_rest' ),
		)
	);
	return '<div id="wptba-root"></div>';
}