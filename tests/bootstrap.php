<?php
/** 
 * テストに必要なファイルをrequire_onceする.
*/

define('WPTBA_ENV', 'test');

require_once __DIR__ . '/../infrastructure/require-once.php';
require_once __DIR__ . '/../domain/require-once.php';
require_once __DIR__ . '/../container.php';
