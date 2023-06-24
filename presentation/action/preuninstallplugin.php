<?php
/**
 * Pre Uninstall Plugin.
*/

namespace WPTBA\Presentation\Action;

use WPTBA\Application\PluginStateManagementApplication;

/**
 * Pre Uninstall Plugin.
*/
class PreUninstallPlugin
{
    /**
     * Plugin State Management Application.
     *
     * @var PluginStateManagementApplication $plugin_state_management_application Plugin State Management Application.
    */
    private $plugin_state_management_application;

    /**
     * Plugin Basename.
     *
     * @var string $plugin_basename Plugin Basename.
    */
    private $plugin_basename;

    /**
     * Constructor.
     *
     * @param PluginStateManagementApplication $plugin_state_management_application Plugin State Management Application.
     * @param string $plugin_basename Plugin Basename.
    */
    public function __construct($plugin_state_management_application, $plugin_basename)
    {
        $this->plugin_state_management_application = $plugin_state_management_application;
        $this->plugin_basename = $plugin_basename;
        add_action('pre_uninstall_plugin', array($this, 'preUninstallPlugin'));
    }

    /**
     * Pre Uninstall Plugin.
     *
     * @param string $plugin Plugin.
    */
    public function preUninstallPlugin($plugin)
    {
        if ($plugin == $this->plugin_basename) {
            $this->plugin_state_management_application->uninstalled();
        }
    }
}
