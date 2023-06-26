<?php
/**
 * Require once.
 *
 * @package WPTBA
 */

?>
<?php

// Require necessary client files.
require_once __DIR__ . '/client/lib/Api/DefaultApi.php';
require_once __DIR__ . '/client/lib/ApiException.php';
require_once __DIR__ . '/client/lib/Model/ModelInterface.php';
require_once __DIR__ . '/client/lib/Configuration.php';
require_once __DIR__ . '/client/lib/HeaderSelector.php';
require_once __DIR__ . '/client/lib/ObjectSerializer.php';

// Require all models.
require_once __DIR__ . '/client/lib/Model/DeleteUsersRequest.php';
require_once __DIR__ . '/client/lib/Model/ModelInterface.php';
require_once __DIR__ . '/client/lib/Model/PatchUsersRequest.php';
require_once __DIR__ . '/client/lib/Model/PostUsersRequest.php';

require_once __DIR__ . '/client-conf/require-once.php';