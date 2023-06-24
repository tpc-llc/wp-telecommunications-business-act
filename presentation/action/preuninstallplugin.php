<?php
/**
 * Pre Uninstall Plugin.
*/

namespace WPTBA\Presentation\Action;

/**
 * Pre Uninstall Plugin.
*/
class PreUninstallPlugin
{
    /**
     * Plugin Basename.
     *
     * @var string $plugin_basename Plugin Basename.
    */
    private $plugin_basename;

    /**
     * Constructor.
     *
     * @param string $plugin_basename Plugin Basename.
    */
    public function __construct($plugin_basename)
    {
        $this->plugin_basename = $plugin_basename;
        add_action('pre_uninstall_plugin', array($this, 'preUninstallPlugin'));
    }

    /**
     * Pre Uninstall Plugin.
     *
     * @param string $plugin Plugin.
    */
    private function preUninstallPlugin($plugin)
    {
    }
}
