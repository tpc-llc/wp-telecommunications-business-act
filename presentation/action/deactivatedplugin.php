<?php
/**
 * Dectivated Plugin.
*/

namespace WPTBA\Presentation\Action;

/**
 * Deactivated Plugin.
*/
class DectivatedPlugin
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
        add_action('deactivated_plugin', array($this, 'deactivatedPlugin'));
    }

    /**
     * Activated Plugin.
     *
     * @param string $plugin Plugin.
    */
    private function deactivatedPlugin($plugin)
    {
    }
}
