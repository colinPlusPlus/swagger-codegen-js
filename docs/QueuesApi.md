# CherwellRestApi.QueuesApi

All URIs are relative to *http://cherwelldev/CherwellAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queuesAddItemToQueueV1**](QueuesApi.md#queuesAddItemToQueueV1) | **POST** /api/V1/additemtoqueue | Add a Business Object to a queue
[**queuesCheckInQueueItemV1**](QueuesApi.md#queuesCheckInQueueItemV1) | **POST** /api/V1/checkinqueueitem | Check a Business Object in to a queue
[**queuesCheckOutQueueItemV1**](QueuesApi.md#queuesCheckOutQueueItemV1) | **POST** /api/V1/checkoutqueueitem | Check a Business Object out of a queue
[**queuesGetQueuesFolderV1**](QueuesApi.md#queuesGetQueuesFolderV1) | **GET** /api/V1/getqueues/scope/{scope}/scopeowner/{scopeowner}/folder/{folder} | Get available queues.
[**queuesGetQueuesScopeOwnerV1**](QueuesApi.md#queuesGetQueuesScopeOwnerV1) | **GET** /api/V1/getqueues/scope/{scope}/scopeowner/{scopeowner} | Get available queues.
[**queuesGetQueuesScopeV1**](QueuesApi.md#queuesGetQueuesScopeV1) | **GET** /api/V1/getqueues/scope/{scope} | Get available queues.
[**queuesGetQueuesV1**](QueuesApi.md#queuesGetQueuesV1) | **GET** /api/V1/getqueues | Get available queues.
[**queuesRemoveItemFromQueueV1**](QueuesApi.md#queuesRemoveItemFromQueueV1) | **POST** /api/V1/removeitemfromqueue | Remove an item from a queue


<a name="queuesAddItemToQueueV1"></a>
# **queuesAddItemToQueueV1**
> AddItemToQueueResponse queuesAddItemToQueueV1(request)

Add a Business Object to a queue

Operation to add a business object to a queue

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.QueuesApi();

var request = new CherwellRestApi.AddItemToQueueRequest(); // AddItemToQueueRequest | Request object containing all properties necessary to add an item to a queue. All properties are required. The standin key defines the queue to which we want to add the business object.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queuesAddItemToQueueV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**AddItemToQueueRequest**](AddItemToQueueRequest.md)| Request object containing all properties necessary to add an item to a queue. All properties are required. The standin key defines the queue to which we want to add the business object. | 

### Return type

[**AddItemToQueueResponse**](AddItemToQueueResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="queuesCheckInQueueItemV1"></a>
# **queuesCheckInQueueItemV1**
> CheckInQueueItemResponse queuesCheckInQueueItemV1(request)

Check a Business Object in to a queue

Operation to check in a queue item

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.QueuesApi();

var request = new CherwellRestApi.CheckInQueueItemRequest(); // CheckInQueueItemRequest | The request object for checking in an item to a queue. All properties are required except for historyNotes


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queuesCheckInQueueItemV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CheckInQueueItemRequest**](CheckInQueueItemRequest.md)| The request object for checking in an item to a queue. All properties are required except for historyNotes | 

### Return type

[**CheckInQueueItemResponse**](CheckInQueueItemResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="queuesCheckOutQueueItemV1"></a>
# **queuesCheckOutQueueItemV1**
> CheckOutQueueItemResponse queuesCheckOutQueueItemV1(request)

Check a Business Object out of a queue

Operation to check out a queue item

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.QueuesApi();

var request = new CherwellRestApi.CheckOutQueueItemRequest(); // CheckOutQueueItemRequest | The request object for checking out an item from a queue. All properties are required except for historyNotes


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queuesCheckOutQueueItemV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CheckOutQueueItemRequest**](CheckOutQueueItemRequest.md)| The request object for checking out an item from a queue. All properties are required except for historyNotes | 

### Return type

[**CheckOutQueueItemResponse**](CheckOutQueueItemResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="queuesGetQueuesFolderV1"></a>
# **queuesGetQueuesFolderV1**
> ManagerData queuesGetQueuesFolderV1(scope, scopeowner, folder, opts)

Get available queues.

Get available queues for a specific business object type based on scope, scope owner, and folder.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.QueuesApi();

var scope = "scope_example"; // String | The scope to get available queues for.

var scopeowner = "scopeowner_example"; // String | The scope owner to get available queues for.

var folder = "folder_example"; // String | The folder to get available queues for.

var opts = { 
  'links': true // Boolean | Whether or not to include links.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queuesGetQueuesFolderV1(scope, scopeowner, folder, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope to get available queues for. | 
 **scopeowner** | **String**| The scope owner to get available queues for. | 
 **folder** | **String**| The folder to get available queues for. | 
 **links** | **Boolean**| Whether or not to include links. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="queuesGetQueuesScopeOwnerV1"></a>
# **queuesGetQueuesScopeOwnerV1**
> ManagerData queuesGetQueuesScopeOwnerV1(scope, scopeowner, opts)

Get available queues.

Get available queues for a specific business object type based on scope, and scope owner.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.QueuesApi();

var scope = "scope_example"; // String | The scope to get available queues for.

var scopeowner = "scopeowner_example"; // String | The scope owner to get available queues for.

var opts = { 
  'links': true // Boolean | Whether or not to include links.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queuesGetQueuesScopeOwnerV1(scope, scopeowner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope to get available queues for. | 
 **scopeowner** | **String**| The scope owner to get available queues for. | 
 **links** | **Boolean**| Whether or not to include links. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="queuesGetQueuesScopeV1"></a>
# **queuesGetQueuesScopeV1**
> ManagerData queuesGetQueuesScopeV1(scope, opts)

Get available queues.

Get available queues for a specific business object type based on scope.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.QueuesApi();

var scope = "scope_example"; // String | The scope to get available queues for.

var opts = { 
  'links': true // Boolean | Whether or not to include links.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queuesGetQueuesScopeV1(scope, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope to get available queues for. | 
 **links** | **Boolean**| Whether or not to include links. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="queuesGetQueuesV1"></a>
# **queuesGetQueuesV1**
> ManagerData queuesGetQueuesV1(opts)

Get available queues.

Get available queues for a specific business object.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.QueuesApi();

var opts = { 
  'links': true // Boolean | Whether or not to include links.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queuesGetQueuesV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **links** | **Boolean**| Whether or not to include links. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="queuesRemoveItemFromQueueV1"></a>
# **queuesRemoveItemFromQueueV1**
> RemoveItemFromQueueResponse queuesRemoveItemFromQueueV1(request)

Remove an item from a queue

Operation to remove an item from a queue

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.QueuesApi();

var request = new CherwellRestApi.RemoveItemFromQueueRequest(); // RemoveItemFromQueueRequest | The request object to remove an item from a queue. All properties are required except for historyNotes


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queuesRemoveItemFromQueueV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**RemoveItemFromQueueRequest**](RemoveItemFromQueueRequest.md)| The request object to remove an item from a queue. All properties are required except for historyNotes | 

### Return type

[**RemoveItemFromQueueResponse**](RemoveItemFromQueueResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

