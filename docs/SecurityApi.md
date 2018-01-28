# CherwellRestApi.SecurityApi

All URIs are relative to *http://cherwelldev/CherwellAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**securityGetClientSecuritySettingsV1**](SecurityApi.md#securityGetClientSecuritySettingsV1) | **GET** /api/V1/getclientsecuritysettings/applicationtype/{applicationtype} | 
[**securityGetRolesV1**](SecurityApi.md#securityGetRolesV1) | **GET** /api/V1/getroles | Get all available Roles
[**securityGetRolesV2**](SecurityApi.md#securityGetRolesV2) | **GET** /api/V2/getroles | Get all available Roles
[**securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV1**](SecurityApi.md#securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV1) | **GET** /api/V1/getsecuritygroupbusinessobjectpermissions/groupid/{groupid}/busobid/{busObId} | Get Business Object permissions by Security Group
[**securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV2**](SecurityApi.md#securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV2) | **GET** /api/V2/getsecuritygroupbusinessobjectpermissions/groupid/{groupid}/busobid/{busObId} | Get Business Object permissions by Security Group
[**securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV1**](SecurityApi.md#securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV1) | **GET** /api/V1/getsecuritygroupbusinessobjectpermissions/groupname/{groupname}/busobname/{busobname} | Get Business Object permissions by Security Group
[**securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV2**](SecurityApi.md#securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV2) | **GET** /api/V2/getsecuritygroupbusinessobjectpermissions/groupname/{groupname}/busobname/{busobname} | Get Business Object permissions by Security Group
[**securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV1**](SecurityApi.md#securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV1) | **GET** /api/V1/getsecuritygroupbusinessobjectpermissionsforcurrentuserbybusobid/busobid/{busObId} | Get Business Object permission for current user
[**securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV2**](SecurityApi.md#securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV2) | **GET** /api/V2/getsecuritygroupbusinessobjectpermissionsforcurrentuserbybusobid/busobid/{busObId} | Get Business Object permission for current user
[**securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV1**](SecurityApi.md#securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV1) | **GET** /api/V1/getsecuritygroupbusinessobjectpermissionsforcurrentuserbybusobname/busobname/{busobname} | Get Business Object permissions for current user
[**securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV2**](SecurityApi.md#securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV2) | **GET** /api/V2/getsecuritygroupbusinessobjectpermissionsforcurrentuserbybusobname/busobname/{busobname} | Get Business Object permissions for current user
[**securityGetSecurityGroupCategoriesV1**](SecurityApi.md#securityGetSecurityGroupCategoriesV1) | **GET** /api/V1/getsecuritygroupcategories | Get all Security Group categories
[**securityGetSecurityGroupCategoriesV2**](SecurityApi.md#securityGetSecurityGroupCategoriesV2) | **GET** /api/V2/getsecuritygroupcategories | Get all Security Group categories
[**securityGetSecurityGroupRightsByGroupIdAndCategoryIdV1**](SecurityApi.md#securityGetSecurityGroupRightsByGroupIdAndCategoryIdV1) | **GET** /api/V1/getsecuritygrouprights/groupid/{groupid}/categoryid/{categoryid} | Get permissions for a Security Group by category
[**securityGetSecurityGroupRightsByGroupIdAndCategoryIdV2**](SecurityApi.md#securityGetSecurityGroupRightsByGroupIdAndCategoryIdV2) | **GET** /api/V2/getsecuritygrouprights/groupid/{groupid}/categoryid/{categoryid} | Get permissions for a Security Group by category
[**securityGetSecurityGroupRightsByGroupNameAndCategoryNameV1**](SecurityApi.md#securityGetSecurityGroupRightsByGroupNameAndCategoryNameV1) | **GET** /api/V1/getsecuritygrouprights/groupname/{groupname}/categoryname/{categoryname} | Get permissions for a Security Group by category
[**securityGetSecurityGroupRightsByGroupNameAndCategoryNameV2**](SecurityApi.md#securityGetSecurityGroupRightsByGroupNameAndCategoryNameV2) | **GET** /api/V2/getsecuritygrouprights/groupname/{groupname}/categoryname/{categoryname} | Get permissions for a Security Group by category
[**securityGetSecurityGroupRightsForCurrentUserByCategoryIdV1**](SecurityApi.md#securityGetSecurityGroupRightsForCurrentUserByCategoryIdV1) | **GET** /api/V1/getsecuritygrouprightsforcurrentuserbycategoryid/categoryid/{categoryid} | Get current user&#39;s permissions by Security Group category by ID
[**securityGetSecurityGroupRightsForCurrentUserByCategoryIdV2**](SecurityApi.md#securityGetSecurityGroupRightsForCurrentUserByCategoryIdV2) | **GET** /api/V2/getsecuritygrouprightsforcurrentuserbycategoryid/categoryid/{categoryid} | Get current user&#39;s permissions by Security Group category by ID
[**securityGetSecurityGroupRightsForCurrentUserByCategoryNameV1**](SecurityApi.md#securityGetSecurityGroupRightsForCurrentUserByCategoryNameV1) | **GET** /api/V1/getsecuritygrouprightsforcurrentuserbycategoryname/categoryname/{categoryname} | Get current user&#39;s permissions by Security Group category by name
[**securityGetSecurityGroupRightsForCurrentUserByCategoryNameV2**](SecurityApi.md#securityGetSecurityGroupRightsForCurrentUserByCategoryNameV2) | **GET** /api/V2/getsecuritygrouprightsforcurrentuserbycategoryname/categoryname/{categoryname} | Get current user&#39;s permissions by Security Group category by name
[**securityGetSecurityGroupsV1**](SecurityApi.md#securityGetSecurityGroupsV1) | **GET** /api/V1/getsecuritygroups | Get all available Security Groups
[**securityGetSecurityGroupsV2**](SecurityApi.md#securityGetSecurityGroupsV2) | **GET** /api/V2/getsecuritygroups | Get all available Security Groups
[**securityGetUsersInSecurityGroupV1**](SecurityApi.md#securityGetUsersInSecurityGroupV1) | **GET** /api/V1/getusersinsecuritygroup/groupid/{groupid} | Get users in a Security Group
[**securityGetUsersInSecurityGroupV2**](SecurityApi.md#securityGetUsersInSecurityGroupV2) | **GET** /api/V2/getusersinsecuritygroup/groupid/{groupid} | Get users in a Security Group


<a name="securityGetClientSecuritySettingsV1"></a>
# **securityGetClientSecuritySettingsV1**
> ClientSecuritySettingsResponse securityGetClientSecuritySettingsV1(applicationtype)



### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');

var apiInstance = new CherwellRestApi.SecurityApi();

var applicationtype = "applicationtype_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetClientSecuritySettingsV1(applicationtype, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationtype** | **String**|  | 

### Return type

[**ClientSecuritySettingsResponse**](ClientSecuritySettingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetRolesV1"></a>
# **securityGetRolesV1**
> RoleReadResponse securityGetRolesV1()

Get all available Roles

Operation to get all available Roles.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetRolesV1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RoleReadResponse**](RoleReadResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetRolesV2"></a>
# **securityGetRolesV2**
> RoleReadV2Response securityGetRolesV2()

Get all available Roles

Operation to get all available Roles.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetRolesV2(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RoleReadV2Response**](RoleReadV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV1"></a>
# **securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV1**
> [BusinessObjectPermission] securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV1(groupid, busObId)

Get Business Object permissions by Security Group

Operation to get specific Business Object permissions for a Security Group. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var groupid = "groupid_example"; // String | Specify the Security Group ID. 

var busObId = "busObId_example"; // String | Specify the Business Object ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV1(groupid, busObId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupid** | **String**| Specify the Security Group ID.  | 
 **busObId** | **String**| Specify the Business Object ID. | 

### Return type

[**[BusinessObjectPermission]**](BusinessObjectPermission.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV2"></a>
# **securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV2**
> GetSecurityGroupBusinessObjectPermissionsResponse securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV2(groupid, busObId)

Get Business Object permissions by Security Group

Operation to get specific Business Object permissions for a Security Group. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var groupid = "groupid_example"; // String | Specify the Security Group ID. 

var busObId = "busObId_example"; // String | Specify the Business Object ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupBusinessObjectPermissionsByBusObIdV2(groupid, busObId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupid** | **String**| Specify the Security Group ID.  | 
 **busObId** | **String**| Specify the Business Object ID. | 

### Return type

[**GetSecurityGroupBusinessObjectPermissionsResponse**](GetSecurityGroupBusinessObjectPermissionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV1"></a>
# **securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV1**
> [BusinessObjectPermission] securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV1(groupname, busobname)

Get Business Object permissions by Security Group

Operation to get specific Business Object permissions for a Security Group. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var groupname = "groupname_example"; // String | Specify the Security Group name. 

var busobname = "busobname_example"; // String | Specify the Business Object name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV1(groupname, busobname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupname** | **String**| Specify the Security Group name.  | 
 **busobname** | **String**| Specify the Business Object name. | 

### Return type

[**[BusinessObjectPermission]**](BusinessObjectPermission.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV2"></a>
# **securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV2**
> GetSecurityGroupBusinessObjectPermissionsResponse securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV2(groupname, busobname)

Get Business Object permissions by Security Group

Operation to get specific Business Object permissions for a Security Group. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var groupname = "groupname_example"; // String | Specify the Security Group name. 

var busobname = "busobname_example"; // String | Specify the Business Object name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupBusinessObjectPermissionsByBusObNameV2(groupname, busobname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupname** | **String**| Specify the Security Group name.  | 
 **busobname** | **String**| Specify the Business Object name. | 

### Return type

[**GetSecurityGroupBusinessObjectPermissionsResponse**](GetSecurityGroupBusinessObjectPermissionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV1"></a>
# **securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV1**
> [BusinessObjectPermission] securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV1(busObId)

Get Business Object permission for current user

Operation to get Business Object permissions for the currently logged-in user&#39;s Security Group.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var busObId = "busObId_example"; // String | Specify the Business Object ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV1(busObId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busObId** | **String**| Specify the Business Object ID. | 

### Return type

[**[BusinessObjectPermission]**](BusinessObjectPermission.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV2"></a>
# **securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV2**
> GetSecurityGroupBusinessObjectPermissionsResponse securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV2(busObId)

Get Business Object permission for current user

Operation to get Business Object permissions for the currently logged-in user&#39;s Security Group.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var busObId = "busObId_example"; // String | Specify the Business Object ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObIdV2(busObId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busObId** | **String**| Specify the Business Object ID. | 

### Return type

[**GetSecurityGroupBusinessObjectPermissionsResponse**](GetSecurityGroupBusinessObjectPermissionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV1"></a>
# **securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV1**
> [BusinessObjectPermission] securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV1(busobname)

Get Business Object permissions for current user

Operation to get Business Object permissions for currently logged in user&#39;s Security Group.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var busobname = "busobname_example"; // String | Specify the Business Object name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV1(busobname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobname** | **String**| Specify the Business Object name. | 

### Return type

[**[BusinessObjectPermission]**](BusinessObjectPermission.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV2"></a>
# **securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV2**
> GetSecurityGroupBusinessObjectPermissionsResponse securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV2(busobname)

Get Business Object permissions for current user

Operation to get Business Object permissions for currently logged in user&#39;s Security Group.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var busobname = "busobname_example"; // String | Specify the Business Object name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupBusinessObjectPermissionsForCurrentUserByBusObNameV2(busobname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobname** | **String**| Specify the Business Object name. | 

### Return type

[**GetSecurityGroupBusinessObjectPermissionsResponse**](GetSecurityGroupBusinessObjectPermissionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupCategoriesV1"></a>
# **securityGetSecurityGroupCategoriesV1**
> [RightCategory] securityGetSecurityGroupCategoriesV1()

Get all Security Group categories

Operation to get IDs and names for all available Security Group categories. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupCategoriesV1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[RightCategory]**](RightCategory.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupCategoriesV2"></a>
# **securityGetSecurityGroupCategoriesV2**
> SecurityRightCategoriesResponse securityGetSecurityGroupCategoriesV2()

Get all Security Group categories

Operation to get IDs and names for all available Security Group categories. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupCategoriesV2(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SecurityRightCategoriesResponse**](SecurityRightCategoriesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupRightsByGroupIdAndCategoryIdV1"></a>
# **securityGetSecurityGroupRightsByGroupIdAndCategoryIdV1**
> [Right] securityGetSecurityGroupRightsByGroupIdAndCategoryIdV1(groupid, categoryid)

Get permissions for a Security Group by category

Operation to get permissions for a Security Group by category. To get Security Group IDs, use \&quot;Get all available Security Groups.\&quot; To get Security Group category IDs, use \&quot;Get all Security Group categories.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var groupid = "groupid_example"; // String | Specify the Security Group ID

var categoryid = "categoryid_example"; // String | Specify the Security Group category ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupRightsByGroupIdAndCategoryIdV1(groupid, categoryid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupid** | **String**| Specify the Security Group ID | 
 **categoryid** | **String**| Specify the Security Group category ID | 

### Return type

[**[Right]**](Right.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupRightsByGroupIdAndCategoryIdV2"></a>
# **securityGetSecurityGroupRightsByGroupIdAndCategoryIdV2**
> SecurityRightsResponse securityGetSecurityGroupRightsByGroupIdAndCategoryIdV2(groupid, categoryid)

Get permissions for a Security Group by category

Operation to get permissions for a Security Group by category. To get Security Group IDs, use \&quot;Get all available Security Groups.\&quot; To get Security Group category IDs, use \&quot;Get all Security Group categories.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var groupid = "groupid_example"; // String | Specify the Security Group ID

var categoryid = "categoryid_example"; // String | Specify the Security Group category ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupRightsByGroupIdAndCategoryIdV2(groupid, categoryid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupid** | **String**| Specify the Security Group ID | 
 **categoryid** | **String**| Specify the Security Group category ID | 

### Return type

[**SecurityRightsResponse**](SecurityRightsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupRightsByGroupNameAndCategoryNameV1"></a>
# **securityGetSecurityGroupRightsByGroupNameAndCategoryNameV1**
> [Right] securityGetSecurityGroupRightsByGroupNameAndCategoryNameV1(groupname, categoryname)

Get permissions for a Security Group by category

Operation to get permissions for a Security Group by category.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var groupname = "groupname_example"; // String | Specify the Security Group name.

var categoryname = "categoryname_example"; // String | Specify the Security Group category name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupRightsByGroupNameAndCategoryNameV1(groupname, categoryname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupname** | **String**| Specify the Security Group name. | 
 **categoryname** | **String**| Specify the Security Group category name. | 

### Return type

[**[Right]**](Right.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupRightsByGroupNameAndCategoryNameV2"></a>
# **securityGetSecurityGroupRightsByGroupNameAndCategoryNameV2**
> SecurityRightsResponse securityGetSecurityGroupRightsByGroupNameAndCategoryNameV2(groupname, categoryname)

Get permissions for a Security Group by category

Operation to get permissions for a Security Group by category.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var groupname = "groupname_example"; // String | Specify the Security Group name.

var categoryname = "categoryname_example"; // String | Specify the Security Group category name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupRightsByGroupNameAndCategoryNameV2(groupname, categoryname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupname** | **String**| Specify the Security Group name. | 
 **categoryname** | **String**| Specify the Security Group category name. | 

### Return type

[**SecurityRightsResponse**](SecurityRightsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupRightsForCurrentUserByCategoryIdV1"></a>
# **securityGetSecurityGroupRightsForCurrentUserByCategoryIdV1**
> [Right] securityGetSecurityGroupRightsForCurrentUserByCategoryIdV1(categoryid)

Get current user&#39;s permissions by Security Group category by ID

Operation to get permissions for the current user&#39;s Security Group by category. To get Security Group category IDs, use \&quot;Get all Security Group categories.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var categoryid = "categoryid_example"; // String | Specify the Security Group category ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupRightsForCurrentUserByCategoryIdV1(categoryid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryid** | **String**| Specify the Security Group category ID. | 

### Return type

[**[Right]**](Right.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupRightsForCurrentUserByCategoryIdV2"></a>
# **securityGetSecurityGroupRightsForCurrentUserByCategoryIdV2**
> SecurityRightsResponse securityGetSecurityGroupRightsForCurrentUserByCategoryIdV2(categoryid)

Get current user&#39;s permissions by Security Group category by ID

Operation to get permissions for the current user&#39;s Security Group by category. To get Security Group category IDs, use \&quot;Get all Security Group categories.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var categoryid = "categoryid_example"; // String | Specify the Security Group category ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupRightsForCurrentUserByCategoryIdV2(categoryid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryid** | **String**| Specify the Security Group category ID. | 

### Return type

[**SecurityRightsResponse**](SecurityRightsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupRightsForCurrentUserByCategoryNameV1"></a>
# **securityGetSecurityGroupRightsForCurrentUserByCategoryNameV1**
> [Right] securityGetSecurityGroupRightsForCurrentUserByCategoryNameV1(categoryname)

Get current user&#39;s permissions by Security Group category by name

Operation to get permissions for the current user&#39;s Security Group by category.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var categoryname = "categoryname_example"; // String | Specify the Security Group category name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupRightsForCurrentUserByCategoryNameV1(categoryname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryname** | **String**| Specify the Security Group category name. | 

### Return type

[**[Right]**](Right.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupRightsForCurrentUserByCategoryNameV2"></a>
# **securityGetSecurityGroupRightsForCurrentUserByCategoryNameV2**
> SecurityRightsResponse securityGetSecurityGroupRightsForCurrentUserByCategoryNameV2(categoryname)

Get current user&#39;s permissions by Security Group category by name

Operation to get permissions for the current user&#39;s Security Group by category.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var categoryname = "categoryname_example"; // String | Specify the Security Group category name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupRightsForCurrentUserByCategoryNameV2(categoryname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryname** | **String**| Specify the Security Group category name. | 

### Return type

[**SecurityRightsResponse**](SecurityRightsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupsV1"></a>
# **securityGetSecurityGroupsV1**
> SecurityGroupResponse securityGetSecurityGroupsV1()

Get all available Security Groups

Operation to get IDs, names, and descriptions for all available Security Groups.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupsV1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SecurityGroupResponse**](SecurityGroupResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetSecurityGroupsV2"></a>
# **securityGetSecurityGroupsV2**
> SecurityGroupV2Response securityGetSecurityGroupsV2()

Get all available Security Groups

Operation to get IDs, names, and descriptions for all available Security Groups.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetSecurityGroupsV2(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SecurityGroupV2Response**](SecurityGroupV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetUsersInSecurityGroupV1"></a>
# **securityGetUsersInSecurityGroupV1**
> [User] securityGetUsersInSecurityGroupV1(groupid)

Get users in a Security Group

Operation to get the users in a specified Security Group. Use \&quot;Get all available Security Groups\&quot; to get Security Group record IDs. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var groupid = "groupid_example"; // String | Specify the Security Group ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetUsersInSecurityGroupV1(groupid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupid** | **String**| Specify the Security Group ID. | 

### Return type

[**[User]**](User.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="securityGetUsersInSecurityGroupV2"></a>
# **securityGetUsersInSecurityGroupV2**
> UserReadV2Response securityGetUsersInSecurityGroupV2(groupid)

Get users in a Security Group

Operation to get the users in a specified Security Group. Use \&quot;Get all available Security Groups\&quot; to get Security Group record IDs. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SecurityApi();

var groupid = "groupid_example"; // String | Specify the Security Group ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityGetUsersInSecurityGroupV2(groupid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupid** | **String**| Specify the Security Group ID. | 

### Return type

[**UserReadV2Response**](UserReadV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

