<?php
/**
 * RegisterUninstallHook.
*/

namespace WPTBA\Presentation\Hook;

use WPTBA\Application\PluginStateManagementApplication;

/**
 * RegisterUninstallHook.
*/
class RegisterUninstallHook
{
    /**
     * Plugin State Management Application.
     *
     * @var PluginStateManagementApplication $plugin_state_management_application Plugin State Management Application.
    */
    private $plugin_state_management_application;

    /**
     * Constructor.
     *
     * @param PluginStateManagementApplication $plugin_state_management_application Plugin State Management Application.
    */
    public function __construct($plugin_state_management_application)
    {
        $this->plugin_state_management_application = $plugin_state_management_application;
        $this->plugin_state_management_application->uninstalled();
    }
}
