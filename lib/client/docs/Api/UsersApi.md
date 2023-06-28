# OpenAPI\Client\UsersApi

All URIs are relative to http://localhost:8083/wp-json/wptbam, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**usersDelete()**](UsersApi.md#usersDelete) | **DELETE** /users | ユーザー情報を削除する |
| [**usersPatch()**](UsersApi.md#usersPatch) | **PATCH** /users | ユーザー情報を更新する |
| [**usersPost()**](UsersApi.md#usersPost) | **POST** /users | ユーザー情報を登録する |


## `usersDelete()`

```php
usersDelete($delete_users_request)
```

ユーザー情報を削除する

Delete users.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$delete_users_request = new \OpenAPI\Client\Model\DeleteUsersRequest(); // \OpenAPI\Client\Model\DeleteUsersRequest

try {
    $apiInstance->usersDelete($delete_users_request);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->usersDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **delete_users_request** | [**\OpenAPI\Client\Model\DeleteUsersRequest**](../Model/DeleteUsersRequest.md)|  | |

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



$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$patch_users_request = new \OpenAPI\Client\Model\PatchUsersRequest(); // \OpenAPI\Client\Model\PatchUsersRequest

try {
    $apiInstance->usersPatch($patch_users_request);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->usersPatch: ', $e->getMessage(), PHP_EOL;
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
usersPost($post_users_request): \OpenAPI\Client\Model\PostUsersResponse
```

ユーザー情報を登録する

Post users.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$post_users_request = new \OpenAPI\Client\Model\PostUsersRequest(); // \OpenAPI\Client\Model\PostUsersRequest

try {
    $result = $apiInstance->usersPost($post_users_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->usersPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_users_request** | [**\OpenAPI\Client\Model\PostUsersRequest**](../Model/PostUsersRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\PostUsersResponse**](../Model/PostUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
