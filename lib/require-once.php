<?php
/**
 * Require once.
 *
 * @package WPTBA
 */

?>
<?php
// Require necessary client files.
class_exists("DefaultApi") ? null : require_once __DIR__ . '/client/lib/Api/DefaultApi.php';
class_exists("ApiException") ? null : require_once __DIR__ . '/client/lib/ApiException.php';
class_exists("Configuration") ? null : require_once __DIR__ . '/client/lib/Configuration.php';
class_exists("HeaderSelector") ? null : require_once __DIR__ . '/client/lib/HeaderSelector.php';
class_exists("ObjectSerializer") ? null : require_once __DIR__ . '/client/lib/ObjectSerializer.php';

// Require all models.
class_exists("ModelInterface") ? null : require_once __DIR__ . '/client/lib/Model/ModelInterface.php';
require_once __DIR__ . '/client/lib/Model/DeleteUsersRequest.php';
require_once __DIR__ . '/client/lib/Model/PatchUsersRequest.php';
require_once __DIR__ . '/client/lib/Model/PostUsersRequest.php';
require_once __DIR__ . '/client/lib/Model/PostUsersResponse.php';

require_once __DIR__ . '/client-conf/require-once.php';
