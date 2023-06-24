<?php
/**
 * Script Loader Tag.
 *
 * @package WPTBA
 */

namespace WPTBA\Presentation\Filter;

/**
 * Viteで生成したjsファイルの読み込み時にimport, exportを使うためtype="module"を付与する.
*/
class AddModuleTypeWithScriptLoaderTag
{
    /**
     * Constructor.
    */
    public function __construct()
    {
        add_filter('script_loader_tag', array($this, 'scriptLoaderTag'), 10, 3);
    }

    /**
    * Viteで生成したjsファイルの読み込み時にimport, exportを使うためtype="module"を付与する.
    *
    * @param string $tag タグ.
    * @param string $handle wp_enqueue_scriptで読み込まれるタグ.
    * @param string $src URL.
    */
    public function scriptLoaderTag($tag, $handle, $src)
    {
        if (strpos($handle, 'wptba-page') === 0) {
            $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
        }
        return $tag;
    }
}
