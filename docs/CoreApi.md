# CherwellRestApi.CoreApi

All URIs are relative to *http://cherwelldev/CherwellAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coreDeleteGalleryImageByStandInKeyV1**](CoreApi.md#coreDeleteGalleryImageByStandInKeyV1) | **DELETE** /api/V1/deletegalleryimage/standinkey/{standinkey} | Delete a gallery image
[**coreGetGalleryImageV1**](CoreApi.md#coreGetGalleryImageV1) | **GET** /api/V1/getgalleryimage/name/{name} | Get built-in images
[**coreGetGalleryImagesFolderV1**](CoreApi.md#coreGetGalleryImagesFolderV1) | **GET** /api/V1/getgalleryimages/scope/{scope}/scopeowner/{scopeowner}/folder/{folder} | Get gallery images by scope, scopeowner, and folder
[**coreGetGalleryImagesScopeOwnerV1**](CoreApi.md#coreGetGalleryImagesScopeOwnerV1) | **GET** /api/V1/getgalleryimages/scope/{scope}/scopeowner/{scopeowner} | Get gallery images by scope and scopeowner
[**coreGetGalleryImagesScopeV1**](CoreApi.md#coreGetGalleryImagesScopeV1) | **GET** /api/V1/getgalleryimages/scope/{scope} | Get gallery images by scope
[**coreGetGalleryImagesV1**](CoreApi.md#coreGetGalleryImagesV1) | **GET** /api/V1/getgalleryimages | Get all gallery images
[**coreGetStoredValueV1**](CoreApi.md#coreGetStoredValueV1) | **GET** /api/V1/getstoredvalue/standinkey/{standInKey} | Get a  stored value
[**coreGetStoredValuesFolderV1**](CoreApi.md#coreGetStoredValuesFolderV1) | **GET** /api/V1/storedvalues/scope/{scope}/scopeowner/{scopeowner}/folder/{folder} | Get stored values by folder
[**coreGetStoredValuesScopeOwnerV1**](CoreApi.md#coreGetStoredValuesScopeOwnerV1) | **GET** /api/V1/storedvalues/scope/{scope}/scopeowner/{scopeowner} | Get stored values by scope owner
[**coreGetStoredValuesScopeV1**](CoreApi.md#coreGetStoredValuesScopeV1) | **GET** /api/V1/storedvalues/scope/{scope} | Get stored values by scope
[**coreGetStoredValuesV1**](CoreApi.md#coreGetStoredValuesV1) | **GET** /api/V1/storedvalues | Gets all the stored values in the system
[**coreGetViewsV1**](CoreApi.md#coreGetViewsV1) | **GET** /api/V1/getviews | Get a list of the views
[**coreSaveGalleryImageV1**](CoreApi.md#coreSaveGalleryImageV1) | **POST** /api/V1/savegalleryimage | Create or update a gallery image
[**coreSaveStoredValueV1**](CoreApi.md#coreSaveStoredValueV1) | **POST** /api/V1/savestoredvalue | Create or update a stored value
[**coreSetCultureV1**](CoreApi.md#coreSetCultureV1) | **PUT** /api/V1/setculture/culturecode/{culturecode} | Set the culture for the current user


<a name="coreDeleteGalleryImageByStandInKeyV1"></a>
# **coreDeleteGalleryImageByStandInKeyV1**
> coreDeleteGalleryImageByStandInKeyV1(standinkey)

Delete a gallery image

Endpoint to delete a gallery image.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var standinkey = "standinkey_example"; // String | The StandIn key for the gallery image to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.coreDeleteGalleryImageByStandInKeyV1(standinkey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standinkey** | **String**| The StandIn key for the gallery image to delete. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="coreGetGalleryImageV1"></a>
# **coreGetGalleryImageV1**
> &#39;String&#39; coreGetGalleryImageV1(name, opts)

Get built-in images

Operation that gets built-in images. If you are requesting an icon (.ico), you can specify width and height.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');

var apiInstance = new CherwellRestApi.CoreApi();

var name = "name_example"; // String | Image name and folder location in the Image Manager. Parameter must begin with \"[PlugIn]Images;\" and then a period-separated list of folders. Example: \"[PlugIn]Images;Images.Common.Cherwell.ico\".

var opts = { 
  'width': 56, // Number | Specify the width (icons only).
  'height': 56 // Number | Specify the height (icons only).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coreGetGalleryImageV1(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Image name and folder location in the Image Manager. Parameter must begin with \&quot;[PlugIn]Images;\&quot; and then a period-separated list of folders. Example: \&quot;[PlugIn]Images;Images.Common.Cherwell.ico\&quot;. | 
 **width** | **Number**| Specify the width (icons only). | [optional] 
 **height** | **Number**| Specify the height (icons only). | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreGetGalleryImagesFolderV1"></a>
# **coreGetGalleryImagesFolderV1**
> ManagerData coreGetGalleryImagesFolderV1(scope, scopeowner, folder, opts)

Get gallery images by scope, scopeowner, and folder

Get gallery images for the specified scope, scopeowner, and folder.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var scope = "scope_example"; // String | The scope to get gallery images for.

var scopeowner = "scopeowner_example"; // String | the scopeowner to get gallery images for.

var folder = "folder_example"; // String | The folder to get gallery images for.

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
apiInstance.coreGetGalleryImagesFolderV1(scope, scopeowner, folder, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope to get gallery images for. | 
 **scopeowner** | **String**| the scopeowner to get gallery images for. | 
 **folder** | **String**| The folder to get gallery images for. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreGetGalleryImagesScopeOwnerV1"></a>
# **coreGetGalleryImagesScopeOwnerV1**
> ManagerData coreGetGalleryImagesScopeOwnerV1(scope, scopeowner, opts)

Get gallery images by scope and scopeowner

Get all gallery images for the specified scope and scope owner.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var scope = "scope_example"; // String | The scope to get gallery images for.

var scopeowner = "scopeowner_example"; // String | The scopeowner to get gallery images for.

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
apiInstance.coreGetGalleryImagesScopeOwnerV1(scope, scopeowner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope to get gallery images for. | 
 **scopeowner** | **String**| The scopeowner to get gallery images for. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreGetGalleryImagesScopeV1"></a>
# **coreGetGalleryImagesScopeV1**
> ManagerData coreGetGalleryImagesScopeV1(scope, opts)

Get gallery images by scope

Get all gallery images for the specified scope.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var scope = "scope_example"; // String | The scope to get the images for.

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
apiInstance.coreGetGalleryImagesScopeV1(scope, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope to get the images for. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreGetGalleryImagesV1"></a>
# **coreGetGalleryImagesV1**
> ManagerData coreGetGalleryImagesV1(opts)

Get all gallery images

Get all the gallery images in the system.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

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
apiInstance.coreGetGalleryImagesV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreGetStoredValueV1"></a>
# **coreGetStoredValueV1**
> StoredValueResponse coreGetStoredValueV1(standInKey)

Get a  stored value

Get a stored value by its StandIn key.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var standInKey = "standInKey_example"; // String | The StandIn key for the Stored Value you would like to retrieve.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coreGetStoredValueV1(standInKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standInKey** | **String**| The StandIn key for the Stored Value you would like to retrieve. | 

### Return type

[**StoredValueResponse**](StoredValueResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreGetStoredValuesFolderV1"></a>
# **coreGetStoredValuesFolderV1**
> ManagerData coreGetStoredValuesFolderV1(scope, scopeowner, folder, opts)

Get stored values by folder

Get stored values for the specified folder.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var scope = "scope_example"; // String | The scope for which to get stored values.

var scopeowner = "scopeowner_example"; // String | The scope owner for which to get stored values.

var folder = "folder_example"; // String | The folder for which to get stored values.

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
apiInstance.coreGetStoredValuesFolderV1(scope, scopeowner, folder, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope for which to get stored values. | 
 **scopeowner** | **String**| The scope owner for which to get stored values. | 
 **folder** | **String**| The folder for which to get stored values. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreGetStoredValuesScopeOwnerV1"></a>
# **coreGetStoredValuesScopeOwnerV1**
> ManagerData coreGetStoredValuesScopeOwnerV1(scope, scopeowner, opts)

Get stored values by scope owner

Get stored values for the specified scope and scope owner.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var scope = "scope_example"; // String | The scope for which to get stored values.

var scopeowner = "scopeowner_example"; // String | The scope owner for which to get stored values.

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
apiInstance.coreGetStoredValuesScopeOwnerV1(scope, scopeowner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope for which to get stored values. | 
 **scopeowner** | **String**| The scope owner for which to get stored values. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreGetStoredValuesScopeV1"></a>
# **coreGetStoredValuesScopeV1**
> ManagerData coreGetStoredValuesScopeV1(scope, opts)

Get stored values by scope

Get all the stored values for the specified scope.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var scope = "scope_example"; // String | The scope for which to get stored values.

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
apiInstance.coreGetStoredValuesScopeV1(scope, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**| The scope for which to get stored values. | 
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreGetStoredValuesV1"></a>
# **coreGetStoredValuesV1**
> ManagerData coreGetStoredValuesV1(opts)

Gets all the stored values in the system

Get all the stored values in the system.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

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
apiInstance.coreGetStoredValuesV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **links** | **Boolean**| Flag to include hyperlinks in results. Default is false. | [optional] 

### Return type

[**ManagerData**](ManagerData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreGetViewsV1"></a>
# **coreGetViewsV1**
> ViewsResponse coreGetViewsV1()

Get a list of the views

Operation to get a list of views that are configured in the system.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coreGetViewsV1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ViewsResponse**](ViewsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreSaveGalleryImageV1"></a>
# **coreSaveGalleryImageV1**
> SaveGalleryImageResponse coreSaveGalleryImageV1(request)

Create or update a gallery image

Endpoint to Create or update a gallery image. To create a new gallery image leave the StandIn key blank. To update a gallery image provide the StandIn key of the gallery image you want to update.&lt;/br&gt;There are three different ImageTypes allowed: Imported, Url, and File. To use the Imported image type, provide the filename in the Name property, with extension, and provide the image data in a Base64 encoded format in the Base64EncodedImageData property. The max file size is 512k.&lt;/br&gt;To use the Url image type,  provide the full network share path to the file in the Name property, ie: \&quot;\\\\\\\\\\\\\\\\networkshare\\\\\\somefolder\\\\\\somefile.jpg\&quot;. If the file is not accessible to all users it will not visible to all users.&lt;/br&gt;To use the File image type, provide the full path to the file in the Name property, ie: \&quot;C:\\\\\\somefolder\\\\\\somfile.jpg\&quot;. If the file is not accessible to all users it will not visible to all users.&lt;/br&gt;When creating or updating an image, Name and ImageType are always required, and if the image type is \&quot;Imported\&quot;, then the Base64EncodedImageData is also required. &lt;/br&gt;scope, scopeowner, and folder can all be updated independently.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var request = new CherwellRestApi.SaveGalleryImageRequest(); // SaveGalleryImageRequest | To create a new gallery image leave the StandIn key blank. To update a gallery image provide the StandIn key of the gallery image you want to update.</br>There are three different ImageTypes allowed: Imported, Url, and File. To use the Imported image type, provide the filename in the Name property, with extension, and provide the image data in a Base64 encoded format in the Base64EncodedImageData property. The max file size is 512k.</br>To use the Url image type,  provide the full network share path to the file in the Name property, ie: \"\\\\\\\\\\\\\\\\networkshare\\\\\\somefolder\\\\\\somefile.jpg\". If the file is not accessible to all users it will not visible to all users.</br>To use the File image type, provide the full path to the file in the Name property, ie: \"C:\\\\\\somefolder\\\\\\somfile.jpg\". If the file is not accessible to all users it will not visible to all users.</br>When creating or updating an image, Name and ImageType are always required, and if the image type is \"Imported\", then the Base64EncodedImageData is also required. </br>scope, scopeowner, and folder can all be updated independently.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coreSaveGalleryImageV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SaveGalleryImageRequest**](SaveGalleryImageRequest.md)| To create a new gallery image leave the StandIn key blank. To update a gallery image provide the StandIn key of the gallery image you want to update.&lt;/br&gt;There are three different ImageTypes allowed: Imported, Url, and File. To use the Imported image type, provide the filename in the Name property, with extension, and provide the image data in a Base64 encoded format in the Base64EncodedImageData property. The max file size is 512k.&lt;/br&gt;To use the Url image type,  provide the full network share path to the file in the Name property, ie: \&quot;\\\\\\\\\\\\\\\\networkshare\\\\\\somefolder\\\\\\somefile.jpg\&quot;. If the file is not accessible to all users it will not visible to all users.&lt;/br&gt;To use the File image type, provide the full path to the file in the Name property, ie: \&quot;C:\\\\\\somefolder\\\\\\somfile.jpg\&quot;. If the file is not accessible to all users it will not visible to all users.&lt;/br&gt;When creating or updating an image, Name and ImageType are always required, and if the image type is \&quot;Imported\&quot;, then the Base64EncodedImageData is also required. &lt;/br&gt;scope, scopeowner, and folder can all be updated independently. | 

### Return type

[**SaveGalleryImageResponse**](SaveGalleryImageResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreSaveStoredValueV1"></a>
# **coreSaveStoredValueV1**
> StoredValueResponse coreSaveStoredValueV1(request)

Create or update a stored value

Operation to create or update a stored value. To update, specify the StandIn key for the stored value to update. To create leave StandIn key blank, and provide a name, a scope, a type, and a value.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var request = new CherwellRestApi.SaveStoredValueRequest(); // SaveStoredValueRequest | The stored value to create or update. To update include the StandIn key for the associated stored value. To create, name, scope, type, and value are required.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coreSaveStoredValueV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SaveStoredValueRequest**](SaveStoredValueRequest.md)| The stored value to create or update. To update include the StandIn key for the associated stored value. To create, name, scope, type, and value are required. | 

### Return type

[**StoredValueResponse**](StoredValueResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="coreSetCultureV1"></a>
# **coreSetCultureV1**
> &#39;String&#39; coreSetCultureV1(culturecode)

Set the culture for the current user

Operation to update the current users culture by culture code. This returns a new access token that has the updated information in it.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.CoreApi();

var culturecode = "culturecode_example"; // String | The culture code to set for the current user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coreSetCultureV1(culturecode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **culturecode** | **String**| The culture code to set for the current user. | 

### Return type

**&#39;String&#39;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

