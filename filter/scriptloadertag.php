<?php
/**
 * Script Loader Tag.
 *
 * @package WPTBA
 */

/**
 * Viteで生成したjsファイルの読み込み時にimport, exportを使うためtype="module"を付与する.
 *
 * @param string $tag タグ.
 * @param string $handle wp_enqueue_scriptで読み込まれるタグ.
 * @param string $src URL.
 */
function wptba_script_loader_tag($tag, $handle, $src)
{
    if (strpos($handle, 'wptba-page') === 0) {
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}
