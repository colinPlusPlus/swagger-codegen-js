# CherwellRestApi.ServiceApi

All URIs are relative to *http://cherwelldev/CherwellAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serviceGetServiceInfoV1**](ServiceApi.md#serviceGetServiceInfoV1) | **GET** /api/V1/serviceinfo | Get information about the REST Api and CSM
[**serviceLogoutUserV1**](ServiceApi.md#serviceLogoutUserV1) | **DELETE** /api/V1/logout | Log out user by token
[**serviceToken**](ServiceApi.md#serviceToken) | **POST** /token | Get an access token


<a name="serviceGetServiceInfoV1"></a>
# **serviceGetServiceInfoV1**
> ServiceInfoResponse serviceGetServiceInfoV1()

Get information about the REST Api and CSM

Operation to get information about the REST API and CSM.  The response is latest REST API operation version, CSM version, and CSM system date and time.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');

var apiInstance = new CherwellRestApi.ServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceGetServiceInfoV1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceInfoResponse**](ServiceInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="serviceLogoutUserV1"></a>
# **serviceLogoutUserV1**
> serviceLogoutUserV1()

Log out user by token

Operation that logs out the user referenced in the authentication token.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.ServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.serviceLogoutUserV1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="serviceToken"></a>
# **serviceToken**
> TokenResponse serviceToken(grantType, clientId, opts)

Get an access token

Operation to request an access token for one of the following authentication modes. Or, you can request an access token using a refresh token. An API client key is required in both cases, and the authentication mode you use must be the mode used by the CSM Browser Client. &lt;/br&gt;  Internal - Use a CSM username and password. If no other mode is specified, Internal mode is used.&lt;/br&gt;  Windows - Uses the server variable LOGON_USER to attempt to find a CSM user.  You can also use domain\\username and password.&lt;/br&gt;  LDAP - Uses the LDAP settings configured for CSM and the server variable LOGON_USER to attempt to find a CSM user. You can also use domain\\username and password.&lt;/br&gt;  SAML - Uses the SAML settings configured for CSM to validate credentials and find the CSM user.&lt;/br&gt;  Auto - Uses the enabled authentication types configured for CSM.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');

var apiInstance = new CherwellRestApi.ServiceApi();

var grantType = "grantType_example"; // String | The type of grant being requested: password or refresh_token.

var clientId = "clientId_example"; // String | The API client key for the client making the token request.

var opts = { 
  'clientSecret': "clientSecret_example", // String | The API client secret for the native client making the token request.  This is only required for native clients.
  'username': "username_example", // String | Specify the login ID for the CSM user who will be granted the access token. 
  'password': "password_example", // String | Specify the password assigned to the login ID.
  'refreshToken': "refreshToken_example", // String | Specify the refresh token used to grant another access token.
  'authMode': "authMode_example", // String | Specify the Authentication Mode to use for requesting an access token.
  'siteName': "siteName_example" // String | If for portal specify the Site name to use for requesting an access token.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceToken(grantType, clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| The type of grant being requested: password or refresh_token. | 
 **clientId** | **String**| The API client key for the client making the token request. | 
 **clientSecret** | **String**| The API client secret for the native client making the token request.  This is only required for native clients. | [optional] 
 **username** | **String**| Specify the login ID for the CSM user who will be granted the access token.  | [optional] 
 **password** | **String**| Specify the password assigned to the login ID. | [optional] 
 **refreshToken** | **String**| Specify the refresh token used to grant another access token. | [optional] 
 **authMode** | **String**| Specify the Authentication Mode to use for requesting an access token. | [optional] 
 **siteName** | **String**| If for portal specify the Site name to use for requesting an access token. | [optional] 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

