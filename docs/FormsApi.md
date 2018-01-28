# CherwellRestApi.FormsApi

All URIs are relative to *http://cherwelldev/CherwellAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**formsGetMobileFormForBusObByIdAndPublicIdV1**](FormsApi.md#formsGetMobileFormForBusObByIdAndPublicIdV1) | **GET** /api/V1/getmobileformforbusob/busobid/{busobid}/publicid/{publicid} | Get mobile form by BusObId and PublicID
[**formsGetMobileFormForBusObByIdAndRecIdV1**](FormsApi.md#formsGetMobileFormForBusObByIdAndRecIdV1) | **GET** /api/V1/getmobileformforbusob/busobid/{busobid}/busobrecid/{busobrecid} | Get mobile form by BusObId and BusObRecId
[**formsGetMobileFormForBusObByNameAndPublicIdV1**](FormsApi.md#formsGetMobileFormForBusObByNameAndPublicIdV1) | **GET** /api/V1/getmobileformforbusob/busobname/{busobname}/publicid/{publicid} | Get mobile form by BusObName and PublicId
[**formsGetMobileFormForBusObByNameAndRecIdV1**](FormsApi.md#formsGetMobileFormForBusObByNameAndRecIdV1) | **GET** /api/V1/getmobileformforbusob/busobname/{busobname}/busobrecid/{busobrecid} | Get mobile form by BusObName and record ID.


<a name="formsGetMobileFormForBusObByIdAndPublicIdV1"></a>
# **formsGetMobileFormForBusObByIdAndPublicIdV1**
> MobileFormResponse formsGetMobileFormForBusObByIdAndPublicIdV1(busobid, publicid, opts)

Get mobile form by BusObId and PublicID

Operation that gets a mobile form for a specific business object by Business Object ID and Public ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.FormsApi();

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var publicid = "publicid_example"; // String | Specify the Business Object public ID.

var opts = { 
  'foredit': true, // Boolean | Flag to get the edit mode version of a form.
  'formid': "formid_example" // String | Specify the form ID if the default is not desired.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.formsGetMobileFormForBusObByIdAndPublicIdV1(busobid, publicid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobid** | **String**| Specify the Business Object ID. | 
 **publicid** | **String**| Specify the Business Object public ID. | 
 **foredit** | **Boolean**| Flag to get the edit mode version of a form. | [optional] 
 **formid** | **String**| Specify the form ID if the default is not desired. | [optional] 

### Return type

[**MobileFormResponse**](MobileFormResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="formsGetMobileFormForBusObByIdAndRecIdV1"></a>
# **formsGetMobileFormForBusObByIdAndRecIdV1**
> MobileFormResponse formsGetMobileFormForBusObByIdAndRecIdV1(busobid, busobrecid, opts)

Get mobile form by BusObId and BusObRecId

Operation that gets a mobile form for a specific business object by Business Object ID and record ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.FormsApi();

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID.

var opts = { 
  'foredit': true, // Boolean | Flag to get the edit mode version of a form.
  'formid': "formid_example" // String | Specify the form ID if the default is not desired.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.formsGetMobileFormForBusObByIdAndRecIdV1(busobid, busobrecid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobid** | **String**| Specify the Business Object ID. | 
 **busobrecid** | **String**| Specify the Business Object record ID. | 
 **foredit** | **Boolean**| Flag to get the edit mode version of a form. | [optional] 
 **formid** | **String**| Specify the form ID if the default is not desired. | [optional] 

### Return type

[**MobileFormResponse**](MobileFormResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="formsGetMobileFormForBusObByNameAndPublicIdV1"></a>
# **formsGetMobileFormForBusObByNameAndPublicIdV1**
> MobileFormResponse formsGetMobileFormForBusObByNameAndPublicIdV1(busobname, publicid, opts)

Get mobile form by BusObName and PublicId

Operation that gets a mobile form for a specific business object by Business Object name and public ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.FormsApi();

var busobname = "busobname_example"; // String | Specify the Business Object name.

var publicid = "publicid_example"; // String | Specify the Business Object public ID.

var opts = { 
  'foredit': true, // Boolean | Flag to get the edit mode version of a form.
  'formid': "formid_example" // String | Specify the form ID if the default is not desired.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.formsGetMobileFormForBusObByNameAndPublicIdV1(busobname, publicid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobname** | **String**| Specify the Business Object name. | 
 **publicid** | **String**| Specify the Business Object public ID. | 
 **foredit** | **Boolean**| Flag to get the edit mode version of a form. | [optional] 
 **formid** | **String**| Specify the form ID if the default is not desired. | [optional] 

### Return type

[**MobileFormResponse**](MobileFormResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="formsGetMobileFormForBusObByNameAndRecIdV1"></a>
# **formsGetMobileFormForBusObByNameAndRecIdV1**
> MobileFormResponse formsGetMobileFormForBusObByNameAndRecIdV1(busobname, busobrecid, opts)

Get mobile form by BusObName and record ID.

Operation that gets a mobile form for a specific business object by Business Object name and record ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.FormsApi();

var busobname = "busobname_example"; // String | Specify the Business Object name.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID.

var opts = { 
  'foredit': true, // Boolean | Flag to get the edit mode version of a form.
  'formid': "formid_example" // String | Specify the form ID if the default is not desired.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.formsGetMobileFormForBusObByNameAndRecIdV1(busobname, busobrecid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobname** | **String**| Specify the Business Object name. | 
 **busobrecid** | **String**| Specify the Business Object record ID. | 
 **foredit** | **Boolean**| Flag to get the edit mode version of a form. | [optional] 
 **formid** | **String**| Specify the form ID if the default is not desired. | [optional] 

### Return type

[**MobileFormResponse**](MobileFormResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

