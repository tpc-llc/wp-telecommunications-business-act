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
    private $plugin_basename;

    /**
     * WPTBA Setting Page Slug.
     *
     * @var string $redirect_page_path WPTBA Setting Page Slug.
    */
    private $redirect_page_slug;

    /**
     * Constructor.
     *
     * @param string $plugin_basename Plugin Basename.
     * @param string $redirect_page_slug WPTBA Setting Page Slug.
    */
    public function __construct($plugin_basename, $redirect_page_slug)
    {
        $this->plugin_basename = $plugin_basename;
        $this->redirect_page_slug = $redirect_page_slug;
        add_action('activated_plugin', array($this, 'activatedPlugin'));
    }

    /**
     * Activated Plugin.
     *
     * @param string $plugin Plugin.
    */
    private function activatedPlugin($plugin)
    {
        if ($plugin == $this->plugin_basename) {
            $this->redirectToPluginSettingPage();
        }
    }

    /**
     * Redirect to Plugin Setting Page.
    */
    private function redirectToPluginSettingPage()
    {
        wp_safe_redirect(admin_url('options-general.php?page=' . $this->redirect_page_slug));
        exit;
    }
}
