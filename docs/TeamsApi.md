# CherwellRestApi.TeamsApi

All URIs are relative to *http://cherwelldev/CherwellAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsAddUserToTeamByBatchV1**](TeamsApi.md#teamsAddUserToTeamByBatchV1) | **POST** /api/V1/addusertoteambybatch | Add users to a team by batch
[**teamsAddUserToTeamV1**](TeamsApi.md#teamsAddUserToTeamV1) | **POST** /api/V1/addusertoteam | Add a user to a team
[**teamsAddUserToTeamV2**](TeamsApi.md#teamsAddUserToTeamV2) | **POST** /api/V2/addusertoteam | Add a user to a team
[**teamsDeleteTeamV1**](TeamsApi.md#teamsDeleteTeamV1) | **DELETE** /api/V1/deleteteam/{teamid} | Delete a Team
[**teamsGetTeamV1**](TeamsApi.md#teamsGetTeamV1) | **GET** /api/V1/getteam/{teamid} | Get a team by its TeamId
[**teamsGetTeamsV1**](TeamsApi.md#teamsGetTeamsV1) | **GET** /api/V1/getteams | Get all available Teams
[**teamsGetTeamsV2**](TeamsApi.md#teamsGetTeamsV2) | **GET** /api/V2/getteams | Get all available Teams
[**teamsGetUsersTeamsV1**](TeamsApi.md#teamsGetUsersTeamsV1) | **GET** /api/V1/getusersteams/userrecordid/{userRecordId} | Get Team assignments for a user
[**teamsGetUsersTeamsV2**](TeamsApi.md#teamsGetUsersTeamsV2) | **GET** /api/V2/getusersteams/userrecordid/{userRecordId} | Get Team assignments for a user
[**teamsGetWorkgroupsV1**](TeamsApi.md#teamsGetWorkgroupsV1) | **GET** /api/V1/getworkgroups | Get all available Workgroups
[**teamsGetWorkgroupsV2**](TeamsApi.md#teamsGetWorkgroupsV2) | **GET** /api/V2/getworkgroups | Get all available Workgroups
[**teamsRemoveCustomerFromWorkgroupV1**](TeamsApi.md#teamsRemoveCustomerFromWorkgroupV1) | **DELETE** /api/V1/removecustomerfromworkgroup/workgroupid/{workgroupid}/customerrecordid/{customerrecordid} | Remove a customer from a Workgroup
[**teamsRemoveUserFromTeamV1**](TeamsApi.md#teamsRemoveUserFromTeamV1) | **DELETE** /api/V1/removeuserfromteam/teamid/{teamId}/userrecordid/{userrecordid} | Operation to remove a User from a Team.
[**teamsRemoveUserFromTeamV2**](TeamsApi.md#teamsRemoveUserFromTeamV2) | **DELETE** /api/V2/removeuserfromteam/teamid/{teamId}/userrecordid/{userrecordid} | Operation to remove a User from a Team.
[**teamsSaveTeamMemberV1**](TeamsApi.md#teamsSaveTeamMemberV1) | **POST** /api/V1/saveteammember | Add or Update a team member
[**teamsSaveTeamV1**](TeamsApi.md#teamsSaveTeamV1) | **POST** /api/V1/saveteam | Create or update a team
[**teamsSaveWorkgroupMemberV1**](TeamsApi.md#teamsSaveWorkgroupMemberV1) | **POST** /api/V1/saveworkgroupmember | Save the membership status of a Workgroup member.


<a name="teamsAddUserToTeamByBatchV1"></a>
# **teamsAddUserToTeamByBatchV1**
> AddUserToTeamByBatchResponse teamsAddUserToTeamByBatchV1(request)

Add users to a team by batch

Operation to add users to a Team by batch. To get internal IDs for users, use “Get User Information in a Batch.” To get a Team&#39;s internal ID, use \&quot;Get all available Teams.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var request = new CherwellRestApi.AddUserToTeamByBatchRequest(); // AddUserToTeamByBatchRequest | Request object to specify a list of add user to team request objects.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsAddUserToTeamByBatchV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**AddUserToTeamByBatchRequest**](AddUserToTeamByBatchRequest.md)| Request object to specify a list of add user to team request objects. | 

### Return type

[**AddUserToTeamByBatchResponse**](AddUserToTeamByBatchResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsAddUserToTeamV1"></a>
# **teamsAddUserToTeamV1**
> teamsAddUserToTeamV1(dataRequest)

Add a user to a team

Operation to add a user to a Team. To get the user&#39;s internal ID, use \&quot;Get a user by login ID\&quot; or \&quot;Get a user by public ID.\&quot; To get a Team&#39;s internal ID, use \&quot;Get all available Teams.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var dataRequest = new CherwellRestApi.AddUserToTeamRequest(); // AddUserToTeamRequest | Request object to specify user and team values.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamsAddUserToTeamV1(dataRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequest** | [**AddUserToTeamRequest**](AddUserToTeamRequest.md)| Request object to specify user and team values. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="teamsAddUserToTeamV2"></a>
# **teamsAddUserToTeamV2**
> AddUserToTeamResponse teamsAddUserToTeamV2(dataRequest)

Add a user to a team

Operation to add a user to a Team. To get the user&#39;s internal ID, use \&quot;Get a user by login ID\&quot; or \&quot;Get a user by public ID.\&quot; To get a Team&#39;s internal ID, use \&quot;Get all available Teams.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var dataRequest = new CherwellRestApi.AddUserToTeamRequest(); // AddUserToTeamRequest | Request object to specify user and team values.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsAddUserToTeamV2(dataRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequest** | [**AddUserToTeamRequest**](AddUserToTeamRequest.md)| Request object to specify user and team values. | 

### Return type

[**AddUserToTeamResponse**](AddUserToTeamResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsDeleteTeamV1"></a>
# **teamsDeleteTeamV1**
> teamsDeleteTeamV1(teamid)

Delete a Team

Operation to delete a Team by Team ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var teamid = "teamid_example"; // String | Specify the Team ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamsDeleteTeamV1(teamid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamid** | **String**| Specify the Team ID. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teamsGetTeamV1"></a>
# **teamsGetTeamV1**
> TeamResponse teamsGetTeamV1(teamid)

Get a team by its TeamId

Operation to get Team Info for a  single Team using its Team ID. To get a Team&#39;s internal ID, use \&quot;Get all available Teams.\&quot; Note that TeamType has two possible values, where TeamType &#x3D; 0 for User (CSM Users), or TeamType &#x3D; 1 for Workgroup (CSM Customers).

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var teamid = "teamid_example"; // String | The Team ID of the Team to get.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsGetTeamV1(teamid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamid** | **String**| The Team ID of the Team to get. | 

### Return type

[**TeamResponse**](TeamResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsGetTeamsV1"></a>
# **teamsGetTeamsV1**
> TeamsResponse teamsGetTeamsV1()

Get all available Teams

Operation to get IDs and names for all available Teams.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsGetTeamsV1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TeamsResponse**](TeamsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsGetTeamsV2"></a>
# **teamsGetTeamsV2**
> TeamsV2Response teamsGetTeamsV2()

Get all available Teams

Operation to get IDs and names for all available Teams.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsGetTeamsV2(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TeamsV2Response**](TeamsV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsGetUsersTeamsV1"></a>
# **teamsGetUsersTeamsV1**
> TeamsResponse teamsGetUsersTeamsV1(userRecordId)

Get Team assignments for a user

Operation to get Team assignments for a user. To get record IDs, use \&quot;Get a user by login ID\&quot; or \&quot;Get a user by public id.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var userRecordId = "userRecordId_example"; // String | Specify the user record ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsGetUsersTeamsV1(userRecordId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRecordId** | **String**| Specify the user record ID. | 

### Return type

[**TeamsResponse**](TeamsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsGetUsersTeamsV2"></a>
# **teamsGetUsersTeamsV2**
> TeamsV2Response teamsGetUsersTeamsV2(userRecordId)

Get Team assignments for a user

Operation to get Team assignments for a user. To get record IDs, use \&quot;Get a user by login ID\&quot; or \&quot;Get a user by public id.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var userRecordId = "userRecordId_example"; // String | Specify the user record ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsGetUsersTeamsV2(userRecordId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRecordId** | **String**| Specify the user record ID. | 

### Return type

[**TeamsV2Response**](TeamsV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsGetWorkgroupsV1"></a>
# **teamsGetWorkgroupsV1**
> TeamsResponse teamsGetWorkgroupsV1()

Get all available Workgroups

Operation to get IDs and names for all available Workgroups.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsGetWorkgroupsV1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TeamsResponse**](TeamsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsGetWorkgroupsV2"></a>
# **teamsGetWorkgroupsV2**
> TeamsV2Response teamsGetWorkgroupsV2()

Get all available Workgroups

Operation to get IDs and names for all available Workgroups.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsGetWorkgroupsV2(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TeamsV2Response**](TeamsV2Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsRemoveCustomerFromWorkgroupV1"></a>
# **teamsRemoveCustomerFromWorkgroupV1**
> RemoveCustomerFromWorkgroupResponse teamsRemoveCustomerFromWorkgroupV1(workgroupid, customerrecordid)

Remove a customer from a Workgroup

Operation to remove a Customer from a Workgroup.  To remove, specify the Workgroup ID and the Customer Record ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var workgroupid = "workgroupid_example"; // String | Specify the Workgroup ID.

var customerrecordid = "customerrecordid_example"; // String | Specify the Customer record ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsRemoveCustomerFromWorkgroupV1(workgroupid, customerrecordid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workgroupid** | **String**| Specify the Workgroup ID. | 
 **customerrecordid** | **String**| Specify the Customer record ID. | 

### Return type

[**RemoveCustomerFromWorkgroupResponse**](RemoveCustomerFromWorkgroupResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsRemoveUserFromTeamV1"></a>
# **teamsRemoveUserFromTeamV1**
> teamsRemoveUserFromTeamV1(teamId, userrecordid)

Operation to remove a User from a Team.

Operation to remove a User from a Team. To get the User&#39;s record ID, use \&quot;Get a User by login ID\&quot; or \&quot;Get a User by public ID.\&quot; To get a Team&#39;s internal ID, use \&quot;Get all available Teams.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var teamId = "teamId_example"; // String | Specify the internal ID of the Team.

var userrecordid = "userrecordid_example"; // String | Specify the record ID of the User to remove.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamsRemoveUserFromTeamV1(teamId, userrecordid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| Specify the internal ID of the Team. | 
 **userrecordid** | **String**| Specify the record ID of the User to remove. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teamsRemoveUserFromTeamV2"></a>
# **teamsRemoveUserFromTeamV2**
> RemoveUserFromTeamResponse teamsRemoveUserFromTeamV2(teamId, userrecordid)

Operation to remove a User from a Team.

Operation to remove a User from a Team. To get the User&#39;s record ID, use \&quot;Get a User by login ID\&quot; or \&quot;Get a User by public ID.\&quot; To get a Team&#39;s internal ID, use \&quot;Get all available Teams.\&quot;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var teamId = "teamId_example"; // String | Specify the internal ID of the Team.

var userrecordid = "userrecordid_example"; // String | Specify the record ID of the User to remove.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsRemoveUserFromTeamV2(teamId, userrecordid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| Specify the internal ID of the Team. | 
 **userrecordid** | **String**| Specify the record ID of the User to remove. | 

### Return type

[**RemoveUserFromTeamResponse**](RemoveUserFromTeamResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsSaveTeamMemberV1"></a>
# **teamsSaveTeamMemberV1**
> SaveTeamMemberResponse teamsSaveTeamMemberV1(request)

Add or Update a team member

Operation to add or update a Team Member. To add or update, specify User ID, Team ID, and if Team Manager.   Optionally, set the Team as the User&#39;s default Team.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var request = new CherwellRestApi.SaveTeamMemberRequest(); // SaveTeamMemberRequest | The request object to add or update a Team Member. UserRecId specifies the User to add or update. TeamId specifies the Team to update. IsTeamManager specifies whether the User is a Team Manager, and SetAsDefaultTeam specifies whether to set this Team as the User's default team. UserRecId, TeamId, and IsTeamManager are required.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsSaveTeamMemberV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SaveTeamMemberRequest**](SaveTeamMemberRequest.md)| The request object to add or update a Team Member. UserRecId specifies the User to add or update. TeamId specifies the Team to update. IsTeamManager specifies whether the User is a Team Manager, and SetAsDefaultTeam specifies whether to set this Team as the User&#39;s default team. UserRecId, TeamId, and IsTeamManager are required. | 

### Return type

[**SaveTeamMemberResponse**](SaveTeamMemberResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsSaveTeamV1"></a>
# **teamsSaveTeamV1**
> TeamSaveResponse teamsSaveTeamV1(request)

Create or update a team

Operation to create or update a Team or Workgroup. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var request = new CherwellRestApi.TeamSaveRequest(); // TeamSaveRequest | Request object to create Teams or Workgroups. To create a Team, use teamType and teamName. To update a team, use teamID. Team type values must be User or CustomerWorkgroup. The teamType cannot be changed for existing Teams or Workgroups.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsSaveTeamV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TeamSaveRequest**](TeamSaveRequest.md)| Request object to create Teams or Workgroups. To create a Team, use teamType and teamName. To update a team, use teamID. Team type values must be User or CustomerWorkgroup. The teamType cannot be changed for existing Teams or Workgroups. | 

### Return type

[**TeamSaveResponse**](TeamSaveResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="teamsSaveWorkgroupMemberV1"></a>
# **teamsSaveWorkgroupMemberV1**
> SaveWorkgroupMemberResponse teamsSaveWorkgroupMemberV1(request)

Save the membership status of a Workgroup member.

Operation to add or update a Workgroup Member.  To add or update, specify Customer Record ID, Workgroup ID, and if Workgroup Manager.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.TeamsApi();

var request = new CherwellRestApi.SaveWorkgroupMemberRequest(); // SaveWorkgroupMemberRequest | The request object to add or update a Workgroup Member. CustomerRecordId specifies the Customer to add or update. WorkgroupId specifies the Workgroup to update. CustomerIsWorkgroupManager specifies whether the Customer is a Workgroup Manager.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsSaveWorkgroupMemberV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SaveWorkgroupMemberRequest**](SaveWorkgroupMemberRequest.md)| The request object to add or update a Workgroup Member. CustomerRecordId specifies the Customer to add or update. WorkgroupId specifies the Workgroup to update. CustomerIsWorkgroupManager specifies whether the Customer is a Workgroup Manager. | 

### Return type

[**SaveWorkgroupMemberResponse**](SaveWorkgroupMemberResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

