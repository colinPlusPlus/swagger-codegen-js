# CherwellRestApi.SearchesApi

All URIs are relative to *http://cherwelldev/CherwellAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchesGetQuickSearchConfigurationForBusObsV1**](SearchesApi.md#searchesGetQuickSearchConfigurationForBusObsV1) | **POST** /api/V1/getquicksearchconfigurationforbusobs | Get a Quick Search from a list of Business Object IDs
[**searchesGetQuickSearchConfigurationForBusObsWithViewRightsV1**](SearchesApi.md#searchesGetQuickSearchConfigurationForBusObsWithViewRightsV1) | **GET** /api/V1/getquicksearchconfigurationforbusobswithviewrights | Get a Quick Search by Business Objects with view rights
[**searchesGetQuickSearchResultsV1**](SearchesApi.md#searchesGetQuickSearchResultsV1) | **POST** /api/V1/getquicksearchresults | Execute a Quick Search from a list of Business Object IDs and search text
[**searchesGetQuickSearchSpecificResultsV1**](SearchesApi.md#searchesGetQuickSearchSpecificResultsV1) | **POST** /api/V1/getquicksearchspecificresults | Execute a Quick Search on a specific Business Object
[**searchesGetQuickSearchSpecificResultsV2**](SearchesApi.md#searchesGetQuickSearchSpecificResultsV2) | **POST** /api/V2/getquicksearchspecificresults | Execute a Quick Search on a specific Business Object
[**searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV1**](SearchesApi.md#searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV1) | **GET** /api/V1/getsearchitems/association/{association}/scope/{scope}/scopeowner/{scopeowner}/folder/{folder} | Get all saved searches by Folder ID
[**searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV2**](SearchesApi.md#searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV2) | **GET** /api/V2/getsearchitems/association/{association}/scope/{scope}/scopeowner/{scopeowner}/folder/{folder} | Get all saved searches by Folder ID
[**searchesGetSearchItemsByAssociationScopeScopeOwnerV1**](SearchesApi.md#searchesGetSearchItemsByAssociationScopeScopeOwnerV1) | **GET** /api/V1/getsearchitems/association/{association}/scope/{scope}/scopeowner/{scopeowner} | Get all saved searches by scope owner (sub scope)
[**searchesGetSearchItemsByAssociationScopeScopeOwnerV2**](SearchesApi.md#searchesGetSearchItemsByAssociationScopeScopeOwnerV2) | **GET** /api/V2/getsearchitems/association/{association}/scope/{scope}/scopeowner/{scopeowner} | Get all saved searches by scope owner (sub scope)
[**searchesGetSearchItemsByAssociationScopeV1**](SearchesApi.md#searchesGetSearchItemsByAssociationScopeV1) | **GET** /api/V1/getsearchitems/association/{association}/scope/{scope} | Get all saved searches by scope
[**searchesGetSearchItemsByAssociationScopeV2**](SearchesApi.md#searchesGetSearchItemsByAssociationScopeV2) | **GET** /api/V2/getsearchitems/association/{association}/scope/{scope} | Get all saved searches by scope
[**searchesGetSearchItemsByAssociationV1**](SearchesApi.md#searchesGetSearchItemsByAssociationV1) | **GET** /api/V1/getsearchitems/association/{association} | Get all saved searches by Business Object association
[**searchesGetSearchItemsByAssociationV2**](SearchesApi.md#searchesGetSearchItemsByAssociationV2) | **GET** /api/V2/getsearchitems/association/{association} | Get all saved searches by Business Object association
[**searchesGetSearchItemsV1**](SearchesApi.md#searchesGetSearchItemsV1) | **GET** /api/V1/getsearchitems | Get all saved searches by default Business Object association
[**searchesGetSearchItemsV2**](SearchesApi.md#searchesGetSearchItemsV2) | **GET** /api/V2/getsearchitems | Get all saved searches by default Business Object association
[**searchesGetSearchResultsAdHocV1**](SearchesApi.md#searchesGetSearchResultsAdHocV1) | **POST** /api/V1/getsearchresults | Run an ad-hoc search
[**searchesGetSearchResultsByIdV1**](SearchesApi.md#searchesGetSearchResultsByIdV1) | **GET** /api/V1/getsearchresults/association/{association}/scope/{scope}/scopeowner/{scopeowner}/searchid/{searchid} | Run a saved search by internal ID
[**searchesGetSearchResultsByNameV1**](SearchesApi.md#searchesGetSearchResultsByNameV1) | **GET** /api/V1/getsearchresults/association/{association}/scope/{scope}/scopeowner/{scopeowner}/searchname/{searchname} | Run a saved search by name
[**searchesGetSearchResultsExportAdHocV1**](SearchesApi.md#searchesGetSearchResultsExportAdHocV1) | **POST** /api/V1/getsearchresultsexport | Export an ad-hoc search
[**searchesGetSearchResultsExportByIdV1**](SearchesApi.md#searchesGetSearchResultsExportByIdV1) | **GET** /api/V1/getsearchresultsexport/association/{association}/scope/{scope}/scopeowner/{scopeowner}/searchid/{searchid}/exportformat/{exportformat} | Export a saved search by ID
[**searchesGetSearchResultsExportByNameV1**](SearchesApi.md#searchesGetSearchResultsExportByNameV1) | **GET** /api/V1/getsearchresultsexport/association/{association}/scope/{scope}/scopeowner/{scopeowner}/searchname/{searchname}/exportformat/{exportformat} | Export a saved search by name


<a name="searchesGetQuickSearchConfigurationForBusObsV1"></a>
# **searchesGetQuickSearchConfigurationForBusObsV1**
> QuickSearchConfigurationResponse searchesGetQuickSearchConfigurationForBusObsV1(dataRequest)

Get a Quick Search from a list of Business Object IDs

Operation to build a Quick Search configuration that you can use to execute a Quick Search for multiple Business Objects. The configuration  includes supplied Business Object IDs and specific search items with the following options. Use the Option Key to determine if you can change the options. &lt;/br&gt;&lt;/br&gt;&lt;/br&gt;ChangedOption&lt;/br&gt;&lt;/br&gt;NonFinalStateOption&lt;/br&gt;&lt;/br&gt;SearchAnyWordsOption&lt;/br&gt;&lt;/br&gt;SearchAttachmentsOption&lt;/br&gt;&lt;/br&gt;SearchRelatedOption&lt;/br&gt;&lt;/br&gt;SortByOption&lt;/br&gt;&lt;/br&gt;&lt;/br&gt;Option Key:&lt;/br&gt;&lt;/br&gt;0 &#x3D; None (Not selected and cannot select.)&lt;/br&gt;&lt;/br&gt;1 &#x3D; Use (Selected and cannot clear.)&lt;/br&gt;&lt;/br&gt;2 &#x3D; Display (Not selected and can select.)&lt;/br&gt;&lt;/br&gt;3 &#x3D; UseAndDisplay (Selected and can clear.)&lt;/br&gt;&lt;/br&gt;&lt;/br&gt;SearchTargetType:&lt;/br&gt;&lt;/br&gt;0 &#x3D; BusOb (Business Object)&lt;/br&gt;&lt;/br&gt;1 &#x3D; DocRepository (Document Repository)

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var dataRequest = new CherwellRestApi.QuickSearchConfigurationRequest(); // QuickSearchConfigurationRequest | Request containing the Business Object IDs list.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetQuickSearchConfigurationForBusObsV1(dataRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequest** | [**QuickSearchConfigurationRequest**](QuickSearchConfigurationRequest.md)| Request containing the Business Object IDs list. | 

### Return type

[**QuickSearchConfigurationResponse**](QuickSearchConfigurationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetQuickSearchConfigurationForBusObsWithViewRightsV1"></a>
# **searchesGetQuickSearchConfigurationForBusObsWithViewRightsV1**
> QuickSearchConfigurationResponse searchesGetQuickSearchConfigurationForBusObsWithViewRightsV1()

Get a Quick Search by Business Objects with view rights

Operation to get a Quick Search configuration that you can use to execute a Quick Search based the current user&#39;s Business Object view rights. The configuration  includes supplied Business Object IDs and specific search items with the following options. Use the Option Key to determine if you can change the options.&lt;/br&gt;&lt;/br&gt;ChangedOption&lt;/br&gt;&lt;/br&gt;NonFinalStateOption&lt;/br&gt;&lt;/br&gt;SearchAnyWordsOption&lt;/br&gt;&lt;/br&gt;SearchAttachmentsOption&lt;/br&gt;&lt;/br&gt;SearchRelatedOption&lt;/br&gt;&lt;/br&gt;SortByOption&lt;/br&gt;&lt;/br&gt;&lt;/br&gt;Option Key:&lt;/br&gt;&lt;/br&gt;0 &#x3D; None (Not selected and cannot select.)&lt;/br&gt;&lt;/br&gt;1 &#x3D; Use (Selected and cannot clear.)&lt;/br&gt;&lt;/br&gt;2 &#x3D; Display (Not selected and can select.)&lt;/br&gt;&lt;/br&gt;3 &#x3D; UseAndDisplay (Selected and can clear.)&lt;/br&gt;&lt;/br&gt;&lt;/br&gt;SearchTargetType:&lt;/br&gt;&lt;/br&gt;0 &#x3D; BusOb (Business Object)&lt;/br&gt;&lt;/br&gt;1 &#x3D; DocRepository (Document Repository)

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetQuickSearchConfigurationForBusObsWithViewRightsV1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**QuickSearchConfigurationResponse**](QuickSearchConfigurationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetQuickSearchResultsV1"></a>
# **searchesGetQuickSearchResultsV1**
> SimpleResultsList searchesGetQuickSearchResultsV1(dataRequest, opts)

Execute a Quick Search from a list of Business Object IDs and search text

Operation to execute a Quick Search using a list of Business Object IDs and search text.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var dataRequest = new CherwellRestApi.QuickSearchRequest(); // QuickSearchRequest | Request object listing Business Object IDs and search text. Leave out the entire busObIds parameter and all configured quick search Business Objects will be searched.

var opts = { 
  'includeLinks': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetQuickSearchResultsV1(dataRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequest** | [**QuickSearchRequest**](QuickSearchRequest.md)| Request object listing Business Object IDs and search text. Leave out the entire busObIds parameter and all configured quick search Business Objects will be searched. | 
 **includeLinks** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**SimpleResultsList**](SimpleResultsList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetQuickSearchSpecificResultsV1"></a>
# **searchesGetQuickSearchSpecificResultsV1**
> SearchResultsTableResponse searchesGetQuickSearchSpecificResultsV1(dataRequest, opts)

Execute a Quick Search on a specific Business Object

Operation to execute a Quick Search for a specific Business Object ID. Use \&quot;Get a Quick Search from a list of Business Object IDs\&quot; to find values for specific search item options, such as NonFinalStateOption.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var dataRequest = new CherwellRestApi.QuickSearchSpecificRequest(); // QuickSearchSpecificRequest | Request object containing the parameters for specific Business Object Quick Search execution.

var opts = { 
  'includeSchema': true, // Boolean | Flag to include the schema for the results.
  'includeLocationFields': true, // Boolean | Flag to include location fields in the results.
  'includeLinks': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetQuickSearchSpecificResultsV1(dataRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequest** | [**QuickSearchSpecificRequest**](QuickSearchSpecificRequest.md)| Request object containing the parameters for specific Business Object Quick Search execution. | 
 **includeSchema** | **Boolean**| Flag to include the schema for the results. | [optional] 
 **includeLocationFields** | **Boolean**| Flag to include location fields in the results. | [optional] 
 **includeLinks** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**SearchResultsTableResponse**](SearchResultsTableResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetQuickSearchSpecificResultsV2"></a>
# **searchesGetQuickSearchSpecificResultsV2**
> QuickSearchResponse searchesGetQuickSearchSpecificResultsV2(dataRequest, opts)

Execute a Quick Search on a specific Business Object

Operation to execute a Quick Search for a specific Business Object ID. Use \&quot;Get a Quick Search from a list of Business Object IDs\&quot; to find values for specific search item options, such as NonFinalStateOption.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var dataRequest = new CherwellRestApi.QuickSearchSpecificRequest(); // QuickSearchSpecificRequest | Request object containing the parameters for specific Business Object Quick Search execution.

var opts = { 
  'includeSchema': true, // Boolean | Flag to include the schema for the results.
  'includeLocationFields': true, // Boolean | Flag to include location fields in the results.
  'includeLinks': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetQuickSearchSpecificResultsV2(dataRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequest** | [**QuickSearchSpecificRequest**](QuickSearchSpecificRequest.md)| Request object containing the parameters for specific Business Object Quick Search execution. | 
 **includeSchema** | **Boolean**| Flag to include the schema for the results. | [optional] 
 **includeLocationFields** | **Boolean**| Flag to include location fields in the results. | [optional] 
 **includeLinks** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**QuickSearchResponse**](QuickSearchResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV1"></a>
# **searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV1**
> SearchItemResponse searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV1(association, scope, scopeowner, folder, opts)

Get all saved searches by Folder ID

Operation that returns a tree of saved queries, including scope, search name, IDs, and location within the tree.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Use to filter results by Business Object association ID.

var scope = "scope_example"; // String | Use to filter results by scope name or ID.

var scopeowner = "scopeowner_example"; // String | Use to filter results by scope owner ID.

var folder = "folder_example"; // String | Use to filter results by Search Group folder ID.

var opts = { 
  'links': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV1(association, scope, scopeowner, folder, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Use to filter results by Business Object association ID. | 
 **scope** | **String**| Use to filter results by scope name or ID. | 
 **scopeowner** | **String**| Use to filter results by scope owner ID. | 
 **folder** | **String**| Use to filter results by Search Group folder ID. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**SearchItemResponse**](SearchItemResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV2"></a>
# **searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV2**
> ManagerData searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV2(association, scope, scopeowner, folder, opts)

Get all saved searches by Folder ID

Operation that returns a tree of saved queries, including scope, search name, IDs, and location within the tree.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Use to filter results by Business Object association ID.

var scope = "scope_example"; // String | Use to filter results by scope name or ID.

var scopeowner = "scopeowner_example"; // String | Use to filter results by scope owner ID.

var folder = "folder_example"; // String | Use to filter results by Search Group folder ID.

var opts = { 
  'links': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchItemsByAssociationScopeScopeOwnerFolderV2(association, scope, scopeowner, folder, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Use to filter results by Business Object association ID. | 
 **scope** | **String**| Use to filter results by scope name or ID. | 
 **scopeowner** | **String**| Use to filter results by scope owner ID. | 
 **folder** | **String**| Use to filter results by Search Group folder ID. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchItemsByAssociationScopeScopeOwnerV1"></a>
# **searchesGetSearchItemsByAssociationScopeScopeOwnerV1**
> SearchItemResponse searchesGetSearchItemsByAssociationScopeScopeOwnerV1(association, scope, scopeowner, opts)

Get all saved searches by scope owner (sub scope)

Operation that returns a tree of saved queries, including scope, search name, IDs, and location within the tree.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Use to filter results by Business Object association ID.

var scope = "scope_example"; // String | Use to filter results by scope name or ID.

var scopeowner = "scopeowner_example"; // String | Use to filter results by scope owner ID.

var opts = { 
  'links': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchItemsByAssociationScopeScopeOwnerV1(association, scope, scopeowner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Use to filter results by Business Object association ID. | 
 **scope** | **String**| Use to filter results by scope name or ID. | 
 **scopeowner** | **String**| Use to filter results by scope owner ID. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**SearchItemResponse**](SearchItemResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchItemsByAssociationScopeScopeOwnerV2"></a>
# **searchesGetSearchItemsByAssociationScopeScopeOwnerV2**
> ManagerData searchesGetSearchItemsByAssociationScopeScopeOwnerV2(association, scope, scopeowner, opts)

Get all saved searches by scope owner (sub scope)

Operation that returns a tree of saved queries, including scope, search name, IDs, and location within the tree.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Use to filter results by Business Object association ID.

var scope = "scope_example"; // String | Use to filter results by scope name or ID.

var scopeowner = "scopeowner_example"; // String | Use to filter results by scope owner ID.

var opts = { 
  'links': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchItemsByAssociationScopeScopeOwnerV2(association, scope, scopeowner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Use to filter results by Business Object association ID. | 
 **scope** | **String**| Use to filter results by scope name or ID. | 
 **scopeowner** | **String**| Use to filter results by scope owner ID. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchItemsByAssociationScopeV1"></a>
# **searchesGetSearchItemsByAssociationScopeV1**
> SearchItemResponse searchesGetSearchItemsByAssociationScopeV1(association, scope, opts)

Get all saved searches by scope

Operation that returns a tree of saved queries, including scope, search name, IDs, and location within the tree.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Use to filter results by Business Object association ID.

var scope = "scope_example"; // String | Use to filter results by scope name or ID.

var opts = { 
  'links': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchItemsByAssociationScopeV1(association, scope, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Use to filter results by Business Object association ID. | 
 **scope** | **String**| Use to filter results by scope name or ID. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**SearchItemResponse**](SearchItemResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchItemsByAssociationScopeV2"></a>
# **searchesGetSearchItemsByAssociationScopeV2**
> ManagerData searchesGetSearchItemsByAssociationScopeV2(association, scope, opts)

Get all saved searches by scope

Operation that returns a tree of saved queries, including scope, search name, IDs, and location within the tree.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Use to filter results by Business Object association ID.

var scope = "scope_example"; // String | Use to filter results by scope name or ID.

var opts = { 
  'links': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchItemsByAssociationScopeV2(association, scope, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Use to filter results by Business Object association ID. | 
 **scope** | **String**| Use to filter results by scope name or ID. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchItemsByAssociationV1"></a>
# **searchesGetSearchItemsByAssociationV1**
> SearchItemResponse searchesGetSearchItemsByAssociationV1(association, opts)

Get all saved searches by Business Object association

Operation that returns a tree of saved queries, including scope, search name, IDs, and location within the tree.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Use to filter results by Business Object association ID.

var opts = { 
  'links': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchItemsByAssociationV1(association, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Use to filter results by Business Object association ID. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**SearchItemResponse**](SearchItemResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchItemsByAssociationV2"></a>
# **searchesGetSearchItemsByAssociationV2**
> ManagerData searchesGetSearchItemsByAssociationV2(association, opts)

Get all saved searches by Business Object association

Operation that returns a tree of saved queries, including scope, search name, IDs, and location within the tree.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Use to filter results by Business Object association ID.

var opts = { 
  'links': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchItemsByAssociationV2(association, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Use to filter results by Business Object association ID. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchItemsV1"></a>
# **searchesGetSearchItemsV1**
> SearchItemResponse searchesGetSearchItemsV1(opts)

Get all saved searches by default Business Object association

Operation that returns a tree of saved queries, including scope, search name, IDs, and location within the tree.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var opts = { 
  'links': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchItemsV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**SearchItemResponse**](SearchItemResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchItemsV2"></a>
# **searchesGetSearchItemsV2**
> ManagerData searchesGetSearchItemsV2(opts)

Get all saved searches by default Business Object association

Operation that returns a tree of saved queries, including scope, search name, IDs, and location within the tree.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var opts = { 
  'links': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchItemsV2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchResultsAdHocV1"></a>
# **searchesGetSearchResultsAdHocV1**
> SearchResultsResponse searchesGetSearchResultsAdHocV1(dataRequest)

Run an ad-hoc search

Operation that runs an ad-hoc Business Object search. To execute a search with Prompts, the PromptId and Value are required in the Prompt request object.&lt;/br&gt;&lt;/br&gt;PromptType is a FieldSubType enum as described below:&lt;/br&gt;FieldSubType&lt;/br&gt;None &#x3D; 0&lt;/br&gt;Text &#x3D; 1&lt;/br&gt;Number &#x3D; 2&lt;/br&gt;DateTime &#x3D; 3&lt;/br&gt;Logical &#x3D; 4&lt;/br&gt;Binary &#x3D; 5&lt;/br&gt;DateOnly &#x3D; 6&lt;/br&gt;TimeOnly &#x3D; 7&lt;/br&gt;Json &#x3D; 8&lt;/br&gt;JsonArray &#x3D; 9&lt;/br&gt;Xml &#x3D; 10&lt;/br&gt;XmlCollection &#x3D; 11&lt;/br&gt;TimeValue &#x3D; 12&lt;/br&gt;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var dataRequest = new CherwellRestApi.SearchResultsRequest(); // SearchResultsRequest | Request object to specify search parameters.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchResultsAdHocV1(dataRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequest** | [**SearchResultsRequest**](SearchResultsRequest.md)| Request object to specify search parameters. | 

### Return type

[**SearchResultsResponse**](SearchResultsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchResultsByIdV1"></a>
# **searchesGetSearchResultsByIdV1**
> SearchResultsResponse searchesGetSearchResultsByIdV1(association, scope, scopeowner, searchid, opts)

Run a saved search by internal ID

Operation that returns the paged results of a saved search. When the search contains Prompts, the response contains the Prompt. Send the Prompt and the original operation parameters to  SearchResultsRequest to the getsearchresults ad-hoc http post operation.&lt;/br&gt;&lt;/br&gt;PromptType is a FieldSubType enum as described below:&lt;/br&gt;FieldSubType&lt;/br&gt;None &#x3D; 0&lt;/br&gt;Text &#x3D; 1&lt;/br&gt;Number &#x3D; 2&lt;/br&gt;DateTime &#x3D; 3&lt;/br&gt;Logical &#x3D; 4&lt;/br&gt;Binary &#x3D; 5&lt;/br&gt;DateOnly &#x3D; 6&lt;/br&gt;TimeOnly &#x3D; 7&lt;/br&gt;Json &#x3D; 8&lt;/br&gt;JsonArray &#x3D; 9&lt;/br&gt;Xml &#x3D; 10&lt;/br&gt;XmlCollection &#x3D; 11&lt;/br&gt;TimeValue &#x3D; 12&lt;/br&gt;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Specify the Business Object association ID for the saved search.

var scope = "scope_example"; // String | Specify the scope name or ID for the saved search.

var scopeowner = "scopeowner_example"; // String | Specify the scope owner ID for the saved search. Use (None) when no scope owner exists.

var searchid = "searchid_example"; // String | Specify the internal ID for the saved search. Use \"Run a saved search by name\" if you do not have the internal ID.

var opts = { 
  'searchTerm': "searchTerm_example", // String | Specify search text filter the results. Example: Use \"Service Request\" to filter Incident results to include only service requests.
  'pagenumber': 56, // Number | Specify the page number of the result set to return.
  'pagesize': 56, // Number | Specify the number of rows to return per page.
  'includeschema': true, // Boolean | Use to include the table schema of the saved search. If false, results contain the fieldid and field value without field information. Default is false.
  'resultsAsSimpleResultsList': true // Boolean | Indicates if the results should be returned in a simple results list format or a table format. Default is a table format.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchResultsByIdV1(association, scope, scopeowner, searchid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Specify the Business Object association ID for the saved search. | 
 **scope** | **String**| Specify the scope name or ID for the saved search. | 
 **scopeowner** | **String**| Specify the scope owner ID for the saved search. Use (None) when no scope owner exists. | 
 **searchid** | **String**| Specify the internal ID for the saved search. Use \&quot;Run a saved search by name\&quot; if you do not have the internal ID. | 
 **searchTerm** | **String**| Specify search text filter the results. Example: Use \&quot;Service Request\&quot; to filter Incident results to include only service requests. | [optional] 
 **pagenumber** | **Number**| Specify the page number of the result set to return. | [optional] 
 **pagesize** | **Number**| Specify the number of rows to return per page. | [optional] 
 **includeschema** | **Boolean**| Use to include the table schema of the saved search. If false, results contain the fieldid and field value without field information. Default is false. | [optional] 
 **resultsAsSimpleResultsList** | **Boolean**| Indicates if the results should be returned in a simple results list format or a table format. Default is a table format. | [optional] 

### Return type

[**SearchResultsResponse**](SearchResultsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchResultsByNameV1"></a>
# **searchesGetSearchResultsByNameV1**
> SearchResultsResponse searchesGetSearchResultsByNameV1(association, scope, scopeowner, searchname, opts)

Run a saved search by name

Operation that returns the paged results of a saved search. When the search contains Prompts, the response contains the Prompt. Send the Prompt and the original operation parameters to  SearchResultsRequest to the getsearchresults ad-hoc http post operation.&lt;/br&gt;&lt;/br&gt;PromptType is a FieldSubType enum as described below:&lt;/br&gt;FieldSubType&lt;/br&gt;None &#x3D; 0&lt;/br&gt;Text &#x3D; 1&lt;/br&gt;Number &#x3D; 2&lt;/br&gt;DateTime &#x3D; 3&lt;/br&gt;Logical &#x3D; 4&lt;/br&gt;Binary &#x3D; 5&lt;/br&gt;DateOnly &#x3D; 6&lt;/br&gt;TimeOnly &#x3D; 7&lt;/br&gt;Json &#x3D; 8&lt;/br&gt;JsonArray &#x3D; 9&lt;/br&gt;Xml &#x3D; 10&lt;/br&gt;XmlCollection &#x3D; 11&lt;/br&gt;TimeValue &#x3D; 12&lt;/br&gt;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Specify the Business Object association ID for the saved search.

var scope = "scope_example"; // String | Specify the scope name or ID for the saved search.

var scopeowner = "scopeowner_example"; // String | Specify the scope owner ID for the saved search. Use (None) when no scope owner exists.

var searchname = "searchname_example"; // String | Specify the name of the saved search.

var opts = { 
  'searchTerm': "searchTerm_example", // String | Specify search text filter the results. Example: Use \"Service Request\" to filter Incident results to include only service requests.
  'pagenumber': 56, // Number | Specify the page number of the result set to return.
  'pagesize': 56, // Number | Specify the number of rows to return per page.
  'includeschema': true, // Boolean | Use to include the table schema of the saved search. If false, results contain the fieldid and field value without field information. Default is false.
  'resultsAsSimpleResultsList': true // Boolean | Indicates if the results should be returned in a simple results list format or a table format. Default is a table format.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchResultsByNameV1(association, scope, scopeowner, searchname, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Specify the Business Object association ID for the saved search. | 
 **scope** | **String**| Specify the scope name or ID for the saved search. | 
 **scopeowner** | **String**| Specify the scope owner ID for the saved search. Use (None) when no scope owner exists. | 
 **searchname** | **String**| Specify the name of the saved search. | 
 **searchTerm** | **String**| Specify search text filter the results. Example: Use \&quot;Service Request\&quot; to filter Incident results to include only service requests. | [optional] 
 **pagenumber** | **Number**| Specify the page number of the result set to return. | [optional] 
 **pagesize** | **Number**| Specify the number of rows to return per page. | [optional] 
 **includeschema** | **Boolean**| Use to include the table schema of the saved search. If false, results contain the fieldid and field value without field information. Default is false. | [optional] 
 **resultsAsSimpleResultsList** | **Boolean**| Indicates if the results should be returned in a simple results list format or a table format. Default is a table format. | [optional] 

### Return type

[**SearchResultsResponse**](SearchResultsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchResultsExportAdHocV1"></a>
# **searchesGetSearchResultsExportAdHocV1**
> &#39;String&#39; searchesGetSearchResultsExportAdHocV1(dataRequest)

Export an ad-hoc search

Operation that returns an ad-hoc search in a specified export format: 0&#x3D;CSV, 1&#x3D;Excel, 2&#x3D;Tab, 3&#x3D;Word, 4&#x3D;Custom Separator, 5&#x3D;Simple JSON. To execute a search with Prompts, the PromptId and Value are required in the Prompt request object.&lt;/br&gt;&lt;/br&gt;PromptType is a FieldSubType enum as described below:&lt;/br&gt;FieldSubType&lt;/br&gt;None &#x3D; 0&lt;/br&gt;Text &#x3D; 1&lt;/br&gt;Number &#x3D; 2&lt;/br&gt;DateTime &#x3D; 3&lt;/br&gt;Logical &#x3D; 4&lt;/br&gt;Binary &#x3D; 5&lt;/br&gt;DateOnly &#x3D; 6&lt;/br&gt;TimeOnly &#x3D; 7&lt;/br&gt;Json &#x3D; 8&lt;/br&gt;JsonArray &#x3D; 9&lt;/br&gt;Xml &#x3D; 10&lt;/br&gt;XmlCollection &#x3D; 11&lt;/br&gt;TimeValue &#x3D; 12&lt;/br&gt;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var dataRequest = new CherwellRestApi.ExportSearchResultsRequest(); // ExportSearchResultsRequest | Request object to specify search parameters and export format.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchResultsExportAdHocV1(dataRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequest** | [**ExportSearchResultsRequest**](ExportSearchResultsRequest.md)| Request object to specify search parameters and export format. | 

### Return type

**&#39;String&#39;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchResultsExportByIdV1"></a>
# **searchesGetSearchResultsExportByIdV1**
> &#39;String&#39; searchesGetSearchResultsExportByIdV1(association, scope, scopeowner, searchid, exportformat, opts)

Export a saved search by ID

Operation that returns the paged results of a saved search in a specified format. When the search contains Prompts, the response contains the Prompt. Send the Prompt and the original operation parameters to  SearchResultsRequest to the getsearchresultsexport ad-hoc http post operation.&lt;/br&gt;&lt;/br&gt;PromptType is a FieldSubType enum as described below:&lt;/br&gt;FieldSubType&lt;/br&gt;None &#x3D; 0&lt;/br&gt;Text &#x3D; 1&lt;/br&gt;Number &#x3D; 2&lt;/br&gt;DateTime &#x3D; 3&lt;/br&gt;Logical &#x3D; 4&lt;/br&gt;Binary &#x3D; 5&lt;/br&gt;DateOnly &#x3D; 6&lt;/br&gt;TimeOnly &#x3D; 7&lt;/br&gt;Json &#x3D; 8&lt;/br&gt;JsonArray &#x3D; 9&lt;/br&gt;Xml &#x3D; 10&lt;/br&gt;XmlCollection &#x3D; 11&lt;/br&gt;TimeValue &#x3D; 12&lt;/br&gt;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Specify the Business Object association ID for the saved search.

var scope = "scope_example"; // String | Specify the scope name or ID for the saved search.

var scopeowner = "scopeowner_example"; // String | Specify the scope owner ID for the saved search. Use (None) when no scope owner exists.

var searchid = "searchid_example"; // String | Specify the internal ID for the saved search. Use \"Run a saved search by name\" if you do not have the internal ID.

var exportformat = "exportformat_example"; // String | Specify the format of the export

var opts = { 
  'searchTerm': "searchTerm_example", // String | Specify search text filter the results. Example: Use \"Service Request\" to filter Incident results to include only service requests.
  'pagenumber': 56, // Number | Specify the page number of the result set to return.
  'pagesize': 56 // Number | Specify the number of rows to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchResultsExportByIdV1(association, scope, scopeowner, searchid, exportformat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Specify the Business Object association ID for the saved search. | 
 **scope** | **String**| Specify the scope name or ID for the saved search. | 
 **scopeowner** | **String**| Specify the scope owner ID for the saved search. Use (None) when no scope owner exists. | 
 **searchid** | **String**| Specify the internal ID for the saved search. Use \&quot;Run a saved search by name\&quot; if you do not have the internal ID. | 
 **exportformat** | **String**| Specify the format of the export | 
 **searchTerm** | **String**| Specify search text filter the results. Example: Use \&quot;Service Request\&quot; to filter Incident results to include only service requests. | [optional] 
 **pagenumber** | **Number**| Specify the page number of the result set to return. | [optional] 
 **pagesize** | **Number**| Specify the number of rows to return per page. | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchesGetSearchResultsExportByNameV1"></a>
# **searchesGetSearchResultsExportByNameV1**
> &#39;String&#39; searchesGetSearchResultsExportByNameV1(association, scope, scopeowner, searchname, exportformat, opts)

Export a saved search by name

Operation that returns the paged results of a saved search in a specified format. When the search contains Prompts, the response contains the Prompt. Send the Prompt and the original operation parameters to  SearchResultsRequest to the getsearchresultsexport ad-hoc http post operation.&lt;/br&gt;&lt;/br&gt;PromptType is a FieldSubType enum as described below:&lt;/br&gt;FieldSubType&lt;/br&gt;None &#x3D; 0&lt;/br&gt;Text &#x3D; 1&lt;/br&gt;Number &#x3D; 2&lt;/br&gt;DateTime &#x3D; 3&lt;/br&gt;Logical &#x3D; 4&lt;/br&gt;Binary &#x3D; 5&lt;/br&gt;DateOnly &#x3D; 6&lt;/br&gt;TimeOnly &#x3D; 7&lt;/br&gt;Json &#x3D; 8&lt;/br&gt;JsonArray &#x3D; 9&lt;/br&gt;Xml &#x3D; 10&lt;/br&gt;XmlCollection &#x3D; 11&lt;/br&gt;TimeValue &#x3D; 12&lt;/br&gt;

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.SearchesApi();

var association = "association_example"; // String | Specify the Business Object association ID for the saved search.

var scope = "scope_example"; // String | Specify the scope name or ID for the saved search.

var scopeowner = "scopeowner_example"; // String | Specify the scope owner ID for the saved search. Use (None) when no scope owner exists.

var searchname = "searchname_example"; // String | Specify the name of the saved search.

var exportformat = "exportformat_example"; // String | Specify the format of the export

var opts = { 
  'searchTerm': "searchTerm_example", // String | Specify search text filter the results. Example: Use \"Service Request\" to filter Incident results to include only service requests.
  'pagenumber': 56, // Number | Specify the page number of the result set to return.
  'pagesize': 56 // Number | Specify the number of rows to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchesGetSearchResultsExportByNameV1(association, scope, scopeowner, searchname, exportformat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **association** | **String**| Specify the Business Object association ID for the saved search. | 
 **scope** | **String**| Specify the scope name or ID for the saved search. | 
 **scopeowner** | **String**| Specify the scope owner ID for the saved search. Use (None) when no scope owner exists. | 
 **searchname** | **String**| Specify the name of the saved search. | 
 **exportformat** | **String**| Specify the format of the export | 
 **searchTerm** | **String**| Specify search text filter the results. Example: Use \&quot;Service Request\&quot; to filter Incident results to include only service requests. | [optional] 
 **pagenumber** | **Number**| Specify the page number of the result set to return. | [optional] 
 **pagesize** | **Number**| Specify the number of rows to return per page. | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

