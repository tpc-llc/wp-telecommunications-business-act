<?php
/**
 * Dectivated Plugin.
*/

namespace WPTBA\Presentation\Action;

use WPTBA\Application\PluginStateManagementApplication;

/**
 * Deactivated Plugin.
*/
class DectivatedPlugin
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
        add_action('deactivated_plugin', array($this, 'deactivatedPlugin'));
    }

    /**
     * Deactivated Plugin.
     *
     * @param string $plugin Plugin.
    */
    public function deactivatedPlugin($plugin)
    {
        if ($plugin == $this->plugin_basename) {
            $this->plugin_state_management_application->deactivated();
        }
    }
}
