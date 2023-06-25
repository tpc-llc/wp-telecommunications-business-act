# OpenAPI\Client\DefaultApi

All URIs are relative to http://localhost:8083/wp-json/wptbam, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**usersPatch()**](DefaultApi.md#usersPatch) | **PATCH** /users | ユーザー情報を更新する |
| [**usersPost()**](DefaultApi.md#usersPost) | **POST** /users | ユーザー情報を登録する |


## `usersPatch()`

```php
usersPatch($patch_users_request)
```

ユーザー情報を更新する

Patch users.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$patch_users_request = new \OpenAPI\Client\Model\PatchUsersRequest(); // \OpenAPI\Client\Model\PatchUsersRequest

try {
    $apiInstance->usersPatch($patch_users_request);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->usersPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **patch_users_request** | [**\OpenAPI\Client\Model\PatchUsersRequest**](../Model/PatchUsersRequest.md)|  | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `usersPost()`

```php
usersPost($post_users_request)
```

ユーザー情報を登録する

Post users.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$post_users_request = new \OpenAPI\Client\Model\PostUsersRequest(); // \OpenAPI\Client\Model\PostUsersRequest

try {
    $apiInstance->usersPost($post_users_request);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->usersPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_users_request** | [**\OpenAPI\Client\Model\PostUsersRequest**](../Model/PostUsersRequest.md)|  | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
