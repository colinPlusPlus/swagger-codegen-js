# CherwellRestApi.UsersApi

All URIs are relative to *http://cherwelldev/CherwellAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersDeleteUserBatchV1**](UsersApi.md#usersDeleteUserBatchV1) | **POST** /api/V1/deleteuserbatch | Delete a batch of users
[**usersDeleteUserBatchV2**](UsersApi.md#usersDeleteUserBatchV2) | **POST** /api/V2/deleteuserbatch | Delete a batch of users
[**usersDeleteUserV1**](UsersApi.md#usersDeleteUserV1) | **DELETE** /api/V1/deleteuser/userrecordid/{userrecordid} | Delete a user by record ID
[**usersDeleteUserV2**](UsersApi.md#usersDeleteUserV2) | **DELETE** /api/V2/deleteuser/userrecordid/{userrecordid} | Delete a user by record ID
[**usersGetListOfUsers**](UsersApi.md#usersGetListOfUsers) | **GET** /api/V1/getlistofusers | Get a list of all system users.
[**usersGetUserBatchV1**](UsersApi.md#usersGetUserBatchV1) | **POST** /api/V1/getuserbatch | Get user information in a batch
[**usersGetUserByLoginIdV1**](UsersApi.md#usersGetUserByLoginIdV1) | **GET** /api/V1/getuserbyloginid/loginid/{loginid} | Get a user by login ID
[**usersGetUserByLoginIdV2**](UsersApi.md#usersGetUserByLoginIdV2) | **GET** /api/V2/getuserbyloginid | Get a user by login ID and login ID type
[**usersGetUserByLoginIdV3**](UsersApi.md#usersGetUserByLoginIdV3) | **GET** /api/V3/getuserbyloginid | Get a user by login ID and login ID type
[**usersGetUserByPublicIdV1**](UsersApi.md#usersGetUserByPublicIdV1) | **GET** /api/V1/getuserbypublicid/publicid/{publicid} | Get a user by public ID
[**usersGetUserByPublicIdV2**](UsersApi.md#usersGetUserByPublicIdV2) | **GET** /api/V2/getuserbypublicid/publicid/{publicid} | Get a user by public ID
[**usersGetUserByRecId**](UsersApi.md#usersGetUserByRecId) | **GET** /api/V1/getuserbyrecid/recid/{recid} | Get a user by record ID
[**usersSaveUserBatchV1**](UsersApi.md#usersSaveUserBatchV1) | **POST** /api/V1/saveuserbatch | Create or update users in a batch
[**usersSaveUserBatchV2**](UsersApi.md#usersSaveUserBatchV2) | **POST** /api/V2/saveuserbatch | Create or update users in a batch
[**usersSaveUserV1**](UsersApi.md#usersSaveUserV1) | **POST** /api/V1/saveuser | Create or update a user
[**usersSaveUserV2**](UsersApi.md#usersSaveUserV2) | **POST** /api/V2/saveuser | Create or update a user


<a name="usersDeleteUserBatchV1"></a>
# **usersDeleteUserBatchV1**
> UserBatchDeleteResponse usersDeleteUserBatchV1(request)

Delete a batch of users

Operation to delete a batch of users. To get record IDs, use \&quot;Get a user by login ID\&quot; or \&quot;Get a user by public id.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var request = new CherwellRestApi.UserBatchDeleteRequest(); // UserBatchDeleteRequest | Request object listing record IDs for users to be deleted and an error flag.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersDeleteUserBatchV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**UserBatchDeleteRequest**](UserBatchDeleteRequest.md)| Request object listing record IDs for users to be deleted and an error flag. | 

### Return type

[**UserBatchDeleteResponse**](UserBatchDeleteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersDeleteUserBatchV2"></a>
# **usersDeleteUserBatchV2**
> UserBatchDeleteV2Response usersDeleteUserBatchV2(request)

Delete a batch of users

Operation to delete a batch of users. To get record IDs, use \&quot;Get a user by login ID\&quot; or \&quot;Get a user by public id.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var request = new CherwellRestApi.UserBatchDeleteRequest(); // UserBatchDeleteRequest | Request object listing record IDs for users to be deleted and an error flag.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersDeleteUserBatchV2(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**UserBatchDeleteRequest**](UserBatchDeleteRequest.md)| Request object listing record IDs for users to be deleted and an error flag. | 

### Return type

[**UserBatchDeleteV2Response**](UserBatchDeleteV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersDeleteUserV1"></a>
# **usersDeleteUserV1**
> UserDeleteResponse usersDeleteUserV1(userrecordid)

Delete a user by record ID

Operation to delete a user by record ID. To get record IDs, use \&quot;Get a user by login ID\&quot; or \&quot;Get a user by public id.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var userrecordid = "userrecordid_example"; // String | Specify the record ID of the user you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersDeleteUserV1(userrecordid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userrecordid** | **String**| Specify the record ID of the user you want to delete | 

### Return type

[**UserDeleteResponse**](UserDeleteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersDeleteUserV2"></a>
# **usersDeleteUserV2**
> UserDeleteV2Response usersDeleteUserV2(userrecordid)

Delete a user by record ID

Operation to delete a user by record ID. To get record IDs, use \&quot;Get a user by login ID\&quot; or \&quot;Get a user by public id.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var userrecordid = "userrecordid_example"; // String | Specify the record ID of the user you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersDeleteUserV2(userrecordid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userrecordid** | **String**| Specify the record ID of the user you want to delete | 

### Return type

[**UserDeleteV2Response**](UserDeleteV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersGetListOfUsers"></a>
# **usersGetListOfUsers**
> UserListResponse usersGetListOfUsers(loginidfilter, opts)

Get a list of all system users.

Operation to get a list of all system users.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var loginidfilter = "loginidfilter_example"; // String | Specify the login ID filter to apply to the users list.

var opts = { 
  'stoponerror': true // Boolean | Specify whether the operation is interrupted if retrieving any user causes an error.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetListOfUsers(loginidfilter, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginidfilter** | **String**| Specify the login ID filter to apply to the users list. | 
 **stoponerror** | **Boolean**| Specify whether the operation is interrupted if retrieving any user causes an error. | [optional] 

### Return type

[**UserListResponse**](UserListResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersGetUserBatchV1"></a>
# **usersGetUserBatchV1**
> UserBatchReadResponse usersGetUserBatchV1(request)

Get user information in a batch

Operation to get user information in a batch. To get record IDs, use \&quot;Get a user by login ID\&quot; or \&quot;Get a user by public id.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var request = new CherwellRestApi.UserBatchReadRequest(); // UserBatchReadRequest | Request object that lists user record IDs or public IDs of users and an error flag.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetUserBatchV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**UserBatchReadRequest**](UserBatchReadRequest.md)| Request object that lists user record IDs or public IDs of users and an error flag. | 

### Return type

[**UserBatchReadResponse**](UserBatchReadResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersGetUserByLoginIdV1"></a>
# **usersGetUserByLoginIdV1**
> User usersGetUserByLoginIdV1(loginid)

Get a user by login ID

Operation to get detailed user information by login ID. Use to get user record IDs and account settings, for example. This operation has been deprecated by a V2 operation of the same name, but with query string parameters.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var loginid = "loginid_example"; // String | Specify the user's login ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetUserByLoginIdV1(loginid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginid** | **String**| Specify the user&#39;s login ID. | 

### Return type

[**User**](User.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersGetUserByLoginIdV2"></a>
# **usersGetUserByLoginIdV2**
> User usersGetUserByLoginIdV2(loginid, loginidtype)

Get a user by login ID and login ID type

Operation to get detailed user information by login ID. Use to get user record IDs and account settings, for example.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var loginid = "loginid_example"; // String | Specify the user's login ID.

var loginidtype = "loginidtype_example"; // String | Specify the login ID type.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetUserByLoginIdV2(loginid, loginidtype, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginid** | **String**| Specify the user&#39;s login ID. | 
 **loginidtype** | **String**| Specify the login ID type. | 

### Return type

[**User**](User.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersGetUserByLoginIdV3"></a>
# **usersGetUserByLoginIdV3**
> UserV2 usersGetUserByLoginIdV3(loginid, loginidtype)

Get a user by login ID and login ID type

Operation to get detailed user information by login ID. Use to get user record IDs and account settings, for example.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var loginid = "loginid_example"; // String | Specify the user's login ID.

var loginidtype = "loginidtype_example"; // String | Specify the login ID type.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetUserByLoginIdV3(loginid, loginidtype, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginid** | **String**| Specify the user&#39;s login ID. | 
 **loginidtype** | **String**| Specify the login ID type. | 

### Return type

[**UserV2**](UserV2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersGetUserByPublicIdV1"></a>
# **usersGetUserByPublicIdV1**
> UserReadResponse usersGetUserByPublicIdV1(publicid)

Get a user by public ID

Operation to get detailed user information by public ID. Use to get user record IDs and account settings, for example.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var publicid = "publicid_example"; // String | Specify the user's public ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetUserByPublicIdV1(publicid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicid** | **String**| Specify the user&#39;s public ID. | 

### Return type

[**UserReadResponse**](UserReadResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersGetUserByPublicIdV2"></a>
# **usersGetUserByPublicIdV2**
> UserReadV2Response usersGetUserByPublicIdV2(publicid)

Get a user by public ID

Operation to get detailed user information by public ID. Use to get user record IDs and account settings, for example.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var publicid = "publicid_example"; // String | Specify the user's public ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetUserByPublicIdV2(publicid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicid** | **String**| Specify the user&#39;s public ID. | 

### Return type

[**UserReadV2Response**](UserReadV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersGetUserByRecId"></a>
# **usersGetUserByRecId**
> UserV2 usersGetUserByRecId(recid)

Get a user by record ID

Operation to get detailed user information by record ID.  Use to get user public IDs and account settings, for example.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var recid = "recid_example"; // String | Specify the user's record ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetUserByRecId(recid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recid** | **String**| Specify the user&#39;s record ID | 

### Return type

[**UserV2**](UserV2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersSaveUserBatchV1"></a>
# **usersSaveUserBatchV1**
> UserBatchSaveResponse usersSaveUserBatchV1(request)

Create or update users in a batch

Operation to create or update users in a batch. To update, specify record ID. To create, leave record ID empty.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var request = new CherwellRestApi.UserBatchSaveRequest(); // UserBatchSaveRequest | Request object listing user record IDs and an error flag.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersSaveUserBatchV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**UserBatchSaveRequest**](UserBatchSaveRequest.md)| Request object listing user record IDs and an error flag. | 

### Return type

[**UserBatchSaveResponse**](UserBatchSaveResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersSaveUserBatchV2"></a>
# **usersSaveUserBatchV2**
> UserBatchSaveV2Response usersSaveUserBatchV2(request)

Create or update users in a batch

Operation to create or update users in a batch. To update, specify record ID. To create, leave record ID empty.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var request = new CherwellRestApi.UserBatchSaveV2Request(); // UserBatchSaveV2Request | Request object listing user record IDs and an error flag.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersSaveUserBatchV2(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**UserBatchSaveV2Request**](UserBatchSaveV2Request.md)| Request object listing user record IDs and an error flag. | 

### Return type

[**UserBatchSaveV2Response**](UserBatchSaveV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersSaveUserV1"></a>
# **usersSaveUserV1**
> UserSaveResponse usersSaveUserV1(request)

Create or update a user

Operation to create or update a user.  The response is a collection because if you use a public ID, more than one user could be updated since public IDs may not be unique. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var request = new CherwellRestApi.UserSaveRequest(); // UserSaveRequest | Request object to specify user parameters and fields with values to be created or updated. The loginId and either the busObRecId or busObPublicId are required.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersSaveUserV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**UserSaveRequest**](UserSaveRequest.md)| Request object to specify user parameters and fields with values to be created or updated. The loginId and either the busObRecId or busObPublicId are required. | 

### Return type

[**UserSaveResponse**](UserSaveResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="usersSaveUserV2"></a>
# **usersSaveUserV2**
> UserSaveV2Response usersSaveUserV2(request)

Create or update a user

Operation to create or update a user.  The response is a collection because if you use a public ID, more than one user could be updated since public IDs may not be unique. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.UsersApi();

var request = new CherwellRestApi.UserSaveV2Request(); // UserSaveV2Request | Request object to specify user parameters and fields with values to be created or updated. The loginId and either the busObRecId or busObPublicId are required.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersSaveUserV2(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**UserSaveV2Request**](UserSaveV2Request.md)| Request object to specify user parameters and fields with values to be created or updated. The loginId and either the busObRecId or busObPublicId are required. | 

### Return type

[**UserSaveV2Response**](UserSaveV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

