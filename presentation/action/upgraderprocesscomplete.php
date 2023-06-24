<?php
/**
 * Upgeader Process Complete.
*/

namespace WPTBA\Presentation\Action;

use WP_Upgrader;

/**
 * Upgeader Process Complete.
*/
class UpgraderProcessComplete
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
    }
}
