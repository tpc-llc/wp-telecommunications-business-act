<?php
/**
 * 管理画面.
 *
 * @package WPTBA
 */

namespace WPTBA\Page;

/**
 * 管理画面にベースとなるdivを作成する.
 */
class ServiceSelectPage
{
    /**
     * Constructorで設定
     *
     * @var string $page_title
     */
    private $page_title;

    /**
     * URLのpage=の後ろのslug.
     *
     * @var string $page_slug
     */
    private $page_slug;

    /**
     * 生成したjsファイルの名前
     *
     * @var string $js_name
     */
    private $js_name;

    /**
     * Constructorで表示するかどうか切り替え、どこに表示するかを設定する.
     * 読み込むファイルを設定する.
     */
    public function __construct()
    {
        $this->page_title = "電気通信事業法";
        $this->page_slug  = "telecommunications-business-act";
        $this->js_name    = "ServiceSelect";

        if (is_admin()) {
            add_action(
                'admin_menu',
                array(
                    $this,
                    'addPageLinkToAdminDashboard',
                )
            );
            if ($this->pageJsRequested()) {
                add_action(
                    'admin_enqueue_scripts',
                    array(
                        $this,
                        'loadPageScript',
                    )
                );
                add_action(
                    'admin_head',
                    array(
                        $this,
                        'removeNeedlessStyles',
                    )
                );
            }
        }
    }

    /**
     * 描画用JSを読み込むか判定.
    */
    private function pageJsRequested()
    {
        if (array_key_exists('page', $_GET) && null !== $_GET['page']) {
            $current_admin_page = $_GET['page'];
            return $current_admin_page === $this->page_slug;
        } else {
            return false;
        }
    }

    /**
     * 管理者ページにメニューを追加する.
     */
    public function addPageLinkToAdminDashboard()
    {
        add_submenu_page(
            'options-general.php',
            $this->page_title,
            $this->page_title,
            'manage_options',
            $this->page_slug,
            array(
                $this,
                'loadPageScript',
            ),
            'dashicons-media-text',
            65
        );
    }

    /**
     * WPContentの余計なスタイルを削除.
     */
    public function removeNeedlessStyles()
    {
        echo '<style>' . esc_html(file_get_contents(__DIR__ . '/reset.css')) . '</style>';
    }

    /**
     * Pagesの中身を表示する.js, cssを読み込む
     */
    public function loadPageScript()
    {
        wp_enqueue_script(
            'wptba-page-' . $this->page_slug . 'js',
            plugins_url('../frontend/dist/assets/' . $this->js_name . '.js', dirname(__FILE__)),
            array(
                'jquery',
                'wp-element',
            ),
            wp_rand(),
            true
        );
        // nonceを渡す.
        wp_localize_script(
            'wptba-page-' . $this->page_slug . 'js',
            'wptba',
            array(
                '_wpnonce' => wp_create_nonce('wp_rest'),
            )
        );
    }
}
