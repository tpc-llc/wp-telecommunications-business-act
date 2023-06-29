<?php
/**
 * Require once.
 *
 * @package WPTBA
 */

?>
<?php
// Require necessary client files.

require_once __DIR__ . '/client/lib/Api/UsersApi.php';
class_exists(
    "OpenAPI\Client\ApiException"
) ? null : require_once __DIR__ . '/client/lib/ApiException.php';
class_exists(
    "OpenAPI\Client\Configuration"
) ? null : require_once __DIR__ . '/client/lib/Configuration.php';
class_exists(
    "OpenAPI\Client\HeaderSelector"
) ? null : require_once __DIR__ . '/client/lib/HeaderSelector.php';
class_exists(
    "OpenAPI\Client\ObjectSerializer"
) ? null : require_once __DIR__ . '/client/lib/ObjectSerializer.php';

interface_exists(
    "OpenAPI\Client\Model\ModelInterface"
) ? null : require_once __DIR__ . '/client/lib/Model/ModelInterface.php';

// Require all models.
require_once __DIR__ . '/client/lib/Model/DeleteUsersRequest.php';
require_once __DIR__ . '/client/lib/Model/PatchUsersRequest.php';
require_once __DIR__ . '/client/lib/Model/PostUsersRequest.php';
require_once __DIR__ . '/client/lib/Model/PostUsersResponse.php';

require_once __DIR__ . '/client-conf/require-once.php';
