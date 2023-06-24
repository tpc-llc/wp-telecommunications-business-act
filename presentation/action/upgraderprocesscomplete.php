<?php
/**
 * Upgeader Process Complete.
*/

namespace WPTBA\Presentation\Action;

use WP_Upgrader;
use WPTBA\Application\PluginStateManagementApplication;

/**
 * Upgeader Process Complete.
*/
class UpgraderProcessComplete
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
        add_action('upgrader_process_complete', array($this, 'upgraderProcessComplete'));
    }

    /**
     * Upgrader Process Complete.
     *
     * @param WP_Upgrader $upgrader WP_Upgrader.
     * @param array $hook_extra Hook Extra.
    */
    private function upgraderProcessComplete($upgrader, $hook_extra)
    {
        // https://developer.wordpress.org/reference/hooks/upgrader_process_complete/
        if ($hook_extra['action'] == 'update' && $hook_extra['type'] == 'plugin') {
            foreach ($hook_extra['plugins'] as $each_plugin) {
                if ($each_plugin==$this->plugin_basename) {
                    $this->plugin_state_management_application->updated();
                }
            }
        }
    }
}
