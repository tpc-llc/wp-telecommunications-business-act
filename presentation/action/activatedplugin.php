<?php
/**
 * Activated Plugin.
*/

namespace WPTBA\Presentation\Action;

/**
 * Activated Plugin.
*/
class ActivatedPlugin
{
    /**
     * Plugin Basename.
     *
     * @var string $plugin_basename Plugin Basename.
    */
    private $plugin_basename = 'wp-telecommunications-business-act/wp-telecommunications-business-act.php';

    /**
     * WPTBA Setting Page Path.
     *
     * @var string $wptba_setting_page_path WPTBA Setting Page Path.
    */
    private $wptba_setting_page_path = 'options-general.php?page=telecommunications-business-act';

    /**
     * Constructor.
    */
    public function __construct()
    {
        add_action('activated_plugin', array($this, 'wptba_activated_plugin'));
    }

    /**
     * Activated Plugin.
     *
     * @param string $plugin Plugin.
    */
    private function wptba_activated_plugin($plugin)
    {
        if ($plugin == $this->plugin_basename) {
            $this->wptba_redirect_to_plugin_setting_page();
        }
    }

    /**
     * Redirect to Plugin Setting Page.
    */
    private function wptba_redirect_to_plugin_setting_page()
    {
        wp_safe_redirect(admin_url($this->wptba_setting_page_path));
        exit;
    }
}
