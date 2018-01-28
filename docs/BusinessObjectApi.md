# CherwellRestApi.BusinessObjectApi

All URIs are relative to *http://cherwelldev/CherwellAPI*

Method | HTTP request | Description
------------- | ------------- | -------------
[**businessObjectDeleteBusinessObjectBatchV1**](BusinessObjectApi.md#businessObjectDeleteBusinessObjectBatchV1) | **POST** /api/V1/deletebusinessobjectbatch | Delete Business Objects in a batch
[**businessObjectDeleteBusinessObjectByPublicIdV1**](BusinessObjectApi.md#businessObjectDeleteBusinessObjectByPublicIdV1) | **DELETE** /api/V1/deletebusinessobject/busobid/{busobid}/publicid/{publicid} | Delete a Business Object by public ID
[**businessObjectDeleteBusinessObjectByRecIdV1**](BusinessObjectApi.md#businessObjectDeleteBusinessObjectByRecIdV1) | **DELETE** /api/V1/deletebusinessobject/busobid/{busobid}/busobrecid/{busobrecid} | Delete a Business Object by record ID
[**businessObjectDeleteRelatedBusinessObjectByPublicIdV1**](BusinessObjectApi.md#businessObjectDeleteRelatedBusinessObjectByPublicIdV1) | **DELETE** /api/V1/deleterelatedbusinessobject/parentbusobid/{parentbusobid}/parentbusobrecid/{parentbusobrecid}/relationshipid/{relationshipid}/publicid/{publicid} | Delete a related Business Object by public ID
[**businessObjectDeleteRelatedBusinessObjectByRecIdV1**](BusinessObjectApi.md#businessObjectDeleteRelatedBusinessObjectByRecIdV1) | **DELETE** /api/V1/deleterelatedbusinessobject/parentbusobid/{parentbusobid}/parentbusobrecid/{parentbusobrecid}/relationshipid/{relationshipid}/busobrecid/{busobrecid} | Delete a related Business Object by record ID
[**businessObjectFieldValuesLookupV1**](BusinessObjectApi.md#businessObjectFieldValuesLookupV1) | **POST** /api/V1/fieldvalueslookup | Get lookup values for fields
[**businessObjectGetBusinessObjectAttachmentByAttachmentIdV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectAttachmentByAttachmentIdV1) | **GET** /api/V1/getbusinessobjectattachment/attachmentid/{attachmentid}/busobid/{busobid}/busobrecid/{busobrecid} | Get an imported Business Object attachment
[**businessObjectGetBusinessObjectAttachmentsByIdAndPublicIdV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectAttachmentsByIdAndPublicIdV1) | **GET** /api/V1/getbusinessobjectattachments/busobid/{busobid}/publicid/{publicid}/type/{type}/attachmenttype/{attachmenttype} | Get attachments by Business Object public ID
[**businessObjectGetBusinessObjectAttachmentsByIdAndRecIdV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectAttachmentsByIdAndRecIdV1) | **GET** /api/V1/getbusinessobjectattachments/busobid/{busobid}/busobrecid/{busobrecid}/type/{type}/attachmenttype/{attachmenttype} | Get attachments by Business Object record ID
[**businessObjectGetBusinessObjectAttachmentsByNameAndPublicIdV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectAttachmentsByNameAndPublicIdV1) | **GET** /api/V1/getbusinessobjectattachments/busobname/{busobname}/publicid/{publicid}/type/{type}/attachmenttype/{attachmenttype} | Get attachments by Business Object name and public ID
[**businessObjectGetBusinessObjectAttachmentsByNameAndRecIdV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectAttachmentsByNameAndRecIdV1) | **GET** /api/V1/getbusinessobjectattachments/busobname/{busobname}/busobrecid/{busobrecid}/type/{type}/attachmenttype/{attachmenttype} | Get attachments by Business Object name and record ID
[**businessObjectGetBusinessObjectAttachmentsV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectAttachmentsV1) | **POST** /api/V1/getbusinessobjectattachments | Get Business Object attachments by request object
[**businessObjectGetBusinessObjectBatchV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectBatchV1) | **POST** /api/V1/getbusinessobjectbatch | Get a batch of Business Object records
[**businessObjectGetBusinessObjectByCacheKeyV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectByCacheKeyV1) | **GET** /api/V1/getbusinessobject/cachekey/{cachekey} | Get a Business Object record
[**businessObjectGetBusinessObjectByPublicIdV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectByPublicIdV1) | **GET** /api/V1/getbusinessobject/busobid/{busobid}/publicid/{publicid} | Get a Business Object record
[**businessObjectGetBusinessObjectByRecIdV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectByRecIdV1) | **GET** /api/V1/getbusinessobject/busobid/{busobid}/busobrecid/{busobrecid} | Get a Business Object record
[**businessObjectGetBusinessObjectByScanCodeBusObIdV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectByScanCodeBusObIdV1) | **GET** /api/V1/getbusinessobject/scancode/{scanCode}/busobid/{busobid} | Get a Business Object by its scan code and Business Object ID.
[**businessObjectGetBusinessObjectByScanCodeBusObNameV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectByScanCodeBusObNameV1) | **GET** /api/V1/getbusinessobject/scancode/{scanCode}/busobname/{busobname} | Get a Business Object by its scan code and Business Object name.
[**businessObjectGetBusinessObjectSchemaV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectSchemaV1) | **GET** /api/V1/getbusinessobjectschema/busobid/{busobId} | Get a Business Object schema
[**businessObjectGetBusinessObjectSummariesV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectSummariesV1) | **GET** /api/V1/getbusinessobjectsummaries/type/{type} | Get Business Object summaries by type
[**businessObjectGetBusinessObjectSummaryByIdV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectSummaryByIdV1) | **GET** /api/V1/getbusinessobjectsummary/busobid/{busobid} | Get a Business Object summary by ID
[**businessObjectGetBusinessObjectSummaryByNameV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectSummaryByNameV1) | **GET** /api/V1/getbusinessobjectsummary/busobname/{busobname} | Get a Business Object summary by name
[**businessObjectGetBusinessObjectTemplateV1**](BusinessObjectApi.md#businessObjectGetBusinessObjectTemplateV1) | **POST** /api/V1/getbusinessobjecttemplate | Get Business Object templates for create
[**businessObjectGetRelatedBusinessObjectByRequestV1**](BusinessObjectApi.md#businessObjectGetRelatedBusinessObjectByRequestV1) | **POST** /api/V1/getrelatedbusinessobject | Get related Business Objects using a request object
[**businessObjectGetRelatedBusinessObjectV1**](BusinessObjectApi.md#businessObjectGetRelatedBusinessObjectV1) | **GET** /api/V1/getrelatedbusinessobject/parentbusobid/{parentbusobid}/parentbusobrecid/{parentbusobrecid}/relationshipid/{relationshipid} | Get related Business Objects by ID
[**businessObjectGetRelatedBusinessObjectWithCustomGridV1**](BusinessObjectApi.md#businessObjectGetRelatedBusinessObjectWithCustomGridV1) | **GET** /api/V1/getrelatedbusinessobject/parentbusobid/{parentbusobid}/parentbusobrecid/{parentbusobrecid}/relationshipid/{relationshipid}/gridid/{gridid} | Get related Business Objects custom grid
[**businessObjectLinkRelatedBusinessObjectByRecIdV1**](BusinessObjectApi.md#businessObjectLinkRelatedBusinessObjectByRecIdV1) | **GET** /api/V1/linkrelatedbusinessobject/parentbusobid/{parentbusobid}/parentbusobrecid/{parentbusobrecid}/relationshipid/{relationshipid}/busobid/{busobid}/busobrecid/{busobrecid} | Link related Business Objects
[**businessObjectRemoveBusinessObjectAttachmentByIdAndPublicIdV1**](BusinessObjectApi.md#businessObjectRemoveBusinessObjectAttachmentByIdAndPublicIdV1) | **DELETE** /api/V1/removebusinessobjectattachment/attachmentid/{attachmentid}/busobid/{busobid}/publicid/{publicid} | Remove an attachment by Business Object ID and public ID
[**businessObjectRemoveBusinessObjectAttachmentByIdAndRecIdV1**](BusinessObjectApi.md#businessObjectRemoveBusinessObjectAttachmentByIdAndRecIdV1) | **DELETE** /api/V1/removebusinessobjectattachment/attachmentid/{attachmentid}/busobid/{busobid}/busobrecid/{busobrecid} | Remove an attachment by Business Object ID and record ID
[**businessObjectRemoveBusinessObjectAttachmentByNameAndPublicIdV1**](BusinessObjectApi.md#businessObjectRemoveBusinessObjectAttachmentByNameAndPublicIdV1) | **DELETE** /api/V1/removebusinessobjectattachment/attachmentid/{attachmentid}/busobname/{busobname}/publicid/{publicid} | Remove an attachment by Business Object name and public ID
[**businessObjectRemoveBusinessObjectAttachmentByNameAndRecIdV1**](BusinessObjectApi.md#businessObjectRemoveBusinessObjectAttachmentByNameAndRecIdV1) | **DELETE** /api/V1/removebusinessobjectattachment/attachmentid/{attachmentid}/busobname/{busobname}/busobrecid/{busobrecid} | Remove an attachment by Business Object name and record ID
[**businessObjectSaveBusinessObjectAttachmentBusObV1**](BusinessObjectApi.md#businessObjectSaveBusinessObjectAttachmentBusObV1) | **PUT** /api/V1/savebusinessobjectattachmentbusob | Attach a Business Object to a Business Object
[**businessObjectSaveBusinessObjectAttachmentLinkV1**](BusinessObjectApi.md#businessObjectSaveBusinessObjectAttachmentLinkV1) | **PUT** /api/V1/savebusinessobjectattachmentlink | Attach a file via UNC
[**businessObjectSaveBusinessObjectAttachmentUrlV1**](BusinessObjectApi.md#businessObjectSaveBusinessObjectAttachmentUrlV1) | **PUT** /api/V1/savebusinessobjectattachmenturl | Attach a URL path
[**businessObjectSaveBusinessObjectBatchV1**](BusinessObjectApi.md#businessObjectSaveBusinessObjectBatchV1) | **POST** /api/V1/savebusinessobjectbatch | Create or update a batch of Business Objects
[**businessObjectSaveBusinessObjectV1**](BusinessObjectApi.md#businessObjectSaveBusinessObjectV1) | **POST** /api/V1/savebusinessobject | Create or Update a Business Object
[**businessObjectSaveRelatedBusinessObjectV1**](BusinessObjectApi.md#businessObjectSaveRelatedBusinessObjectV1) | **POST** /api/V1/saverelatedbusinessobject | Create or update a related Business Object
[**businessObjectUnLinkRelatedBusinessObjectByRecIdV1**](BusinessObjectApi.md#businessObjectUnLinkRelatedBusinessObjectByRecIdV1) | **DELETE** /api/V1/unlinkrelatedbusinessobject/parentbusobid/{parentbusobid}/parentbusobrecid/{parentbusobrecid}/relationshipid/{relationshipid}/busobid/{busobid}/busobrecid/{busobrecid} | UnLink related Business Objects
[**businessObjectUploadBusinessObjectAttachmentByIdAndPublicIdV1**](BusinessObjectApi.md#businessObjectUploadBusinessObjectAttachmentByIdAndPublicIdV1) | **POST** /api/V1/uploadbusinessobjectattachment/filename/{filename}/busobid/{busobid}/publicid/{publicid}/offset/{offset}/totalsize/{totalsize} | Upload an attachment by Business Object ID and public ID
[**businessObjectUploadBusinessObjectAttachmentByIdAndRecIdV1**](BusinessObjectApi.md#businessObjectUploadBusinessObjectAttachmentByIdAndRecIdV1) | **POST** /api/V1/uploadbusinessobjectattachment/filename/{filename}/busobid/{busobid}/busobrecid/{busobrecid}/offset/{offset}/totalsize/{totalsize} | Upload an attachment by Business Object ID and record ID
[**businessObjectUploadBusinessObjectAttachmentByNameAndPublicIdV1**](BusinessObjectApi.md#businessObjectUploadBusinessObjectAttachmentByNameAndPublicIdV1) | **POST** /api/V1/uploadbusinessobjectattachment/filename/{filename}/busobname/{busobname}/publicid/{publicid}/offset/{offset}/totalsize/{totalsize} | Upload an attachment by Business Object name and public ID
[**businessObjectUploadBusinessObjectAttachmentByNameAndRecIdV1**](BusinessObjectApi.md#businessObjectUploadBusinessObjectAttachmentByNameAndRecIdV1) | **POST** /api/V1/uploadbusinessobjectattachment/filename/{filename}/busobname/{busobname}/busobrecid/{busobrecid}/offset/{offset}/totalsize/{totalsize} | Upload an attachment by Business Object name and record ID


<a name="businessObjectDeleteBusinessObjectBatchV1"></a>
# **businessObjectDeleteBusinessObjectBatchV1**
> BatchDeleteResponse businessObjectDeleteBusinessObjectBatchV1(request)

Delete Business Objects in a batch

Operation to delete a batch of Business Objects.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var request = new CherwellRestApi.BatchDeleteRequest(); // BatchDeleteRequest | Specify an array of Business Object IDs and record IDs or public IDs. Use a flag to stop on error or continue on error.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectDeleteBusinessObjectBatchV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**BatchDeleteRequest**](BatchDeleteRequest.md)| Specify an array of Business Object IDs and record IDs or public IDs. Use a flag to stop on error or continue on error. | 

### Return type

[**BatchDeleteResponse**](BatchDeleteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectDeleteBusinessObjectByPublicIdV1"></a>
# **businessObjectDeleteBusinessObjectByPublicIdV1**
> DeleteResponse businessObjectDeleteBusinessObjectByPublicIdV1(busobid, publicid)

Delete a Business Object by public ID

Operation to delete a Business Object by Business Object ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var publicid = "publicid_example"; // String | Specify the Business Object public ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectDeleteBusinessObjectByPublicIdV1(busobid, publicid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobid** | **String**| Specify the Business Object ID. | 
 **publicid** | **String**| Specify the Business Object public ID. | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectDeleteBusinessObjectByRecIdV1"></a>
# **businessObjectDeleteBusinessObjectByRecIdV1**
> DeleteResponse businessObjectDeleteBusinessObjectByRecIdV1(busobid, busobrecid)

Delete a Business Object by record ID

Operation to delete a single Business Object.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var busobrecid = "busobrecid_example"; // String |  Specify the Business Object record ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectDeleteBusinessObjectByRecIdV1(busobid, busobrecid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobid** | **String**| Specify the Business Object ID. | 
 **busobrecid** | **String**|  Specify the Business Object record ID. | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectDeleteRelatedBusinessObjectByPublicIdV1"></a>
# **businessObjectDeleteRelatedBusinessObjectByPublicIdV1**
> RelatedBusinessObjectResponse businessObjectDeleteRelatedBusinessObjectByPublicIdV1(parentbusobid, parentbusobrecid, relationshipid, publicid)

Delete a related Business Object by public ID

Operation to delete a related Business Object. (Use \&quot;Unlink Related Business Object\&quot; to unlink two Business Objects rather that deleting the related Business Object.)

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var parentbusobid = "parentbusobid_example"; // String | Specify the Business Object ID for the parent Business Object.

var parentbusobrecid = "parentbusobrecid_example"; // String | Specify the record ID for the parent Business Object

var relationshipid = "relationshipid_example"; // String | Specify the Relationship ID for the related Business Object you want to delete.

var publicid = "publicid_example"; // String | Specify the public ID for the related Business Object you want to delete. Use only for Business Objects with unique public IDs. Use \"Delete a related Business Object by record ID\" when public IDs are not unique.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectDeleteRelatedBusinessObjectByPublicIdV1(parentbusobid, parentbusobrecid, relationshipid, publicid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentbusobid** | **String**| Specify the Business Object ID for the parent Business Object. | 
 **parentbusobrecid** | **String**| Specify the record ID for the parent Business Object | 
 **relationshipid** | **String**| Specify the Relationship ID for the related Business Object you want to delete. | 
 **publicid** | **String**| Specify the public ID for the related Business Object you want to delete. Use only for Business Objects with unique public IDs. Use \&quot;Delete a related Business Object by record ID\&quot; when public IDs are not unique. | 

### Return type

[**RelatedBusinessObjectResponse**](RelatedBusinessObjectResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectDeleteRelatedBusinessObjectByRecIdV1"></a>
# **businessObjectDeleteRelatedBusinessObjectByRecIdV1**
> RelatedBusinessObjectResponse businessObjectDeleteRelatedBusinessObjectByRecIdV1(parentbusobid, parentbusobrecid, relationshipid, busobrecid)

Delete a related Business Object by record ID

Operation to delete a related Business Object. (Use \&quot;Unlink Related Business Object\&quot; to unlink two Business Objects rather that deleting the related Business Object.)

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var parentbusobid = "parentbusobid_example"; // String | Specify the Business Object ID for the parent Business Object.

var parentbusobrecid = "parentbusobrecid_example"; // String | Specify the record ID for the parent Business Object

var relationshipid = "relationshipid_example"; // String | Specify the Relationship ID for the related Business Object you want to delete.

var busobrecid = "busobrecid_example"; // String | Specify the record ID for the related Business Object you want to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectDeleteRelatedBusinessObjectByRecIdV1(parentbusobid, parentbusobrecid, relationshipid, busobrecid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentbusobid** | **String**| Specify the Business Object ID for the parent Business Object. | 
 **parentbusobrecid** | **String**| Specify the record ID for the parent Business Object | 
 **relationshipid** | **String**| Specify the Relationship ID for the related Business Object you want to delete. | 
 **busobrecid** | **String**| Specify the record ID for the related Business Object you want to delete. | 

### Return type

[**RelatedBusinessObjectResponse**](RelatedBusinessObjectResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectFieldValuesLookupV1"></a>
# **businessObjectFieldValuesLookupV1**
> FieldValuesLookupResponse businessObjectFieldValuesLookupV1(request)

Get lookup values for fields

Operation to get potentially valid values for Business Object fields.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var request = new CherwellRestApi.FieldValuesLookupRequest(); // FieldValuesLookupRequest | Request object that specifies the Business Object and fields for which values are to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectFieldValuesLookupV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**FieldValuesLookupRequest**](FieldValuesLookupRequest.md)| Request object that specifies the Business Object and fields for which values are to be returned. | 

### Return type

[**FieldValuesLookupResponse**](FieldValuesLookupResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectAttachmentByAttachmentIdV1"></a>
# **businessObjectGetBusinessObjectAttachmentByAttachmentIdV1**
> &#39;Blob&#39; businessObjectGetBusinessObjectAttachmentByAttachmentIdV1(attachmentid, busobid, busobrecid)

Get an imported Business Object attachment

Operation to get a Business Object attachment that has been imported into the system.  HTTP Range Header can be used but is optional.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var attachmentid = "attachmentid_example"; // String | Specify the internal ID of the attachment record that contains information about the imported file.

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectAttachmentByAttachmentIdV1(attachmentid, busobid, busobrecid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachmentid** | **String**| Specify the internal ID of the attachment record that contains information about the imported file. | 
 **busobid** | **String**| Specify the Business Object ID. | 
 **busobrecid** | **String**| Specify the Business Object record ID. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="businessObjectGetBusinessObjectAttachmentsByIdAndPublicIdV1"></a>
# **businessObjectGetBusinessObjectAttachmentsByIdAndPublicIdV1**
> AttachmentsResponse businessObjectGetBusinessObjectAttachmentsByIdAndPublicIdV1(busobid, publicid, type, attachmenttype, opts)

Get attachments by Business Object public ID

Operation to get attachments for a Business Object by Business Object ID and public ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var publicid = "publicid_example"; // String | Specify the Business Object public ID for the record that contains the attachments.

var type = "type_example"; // String | Record attachment type: </br></br>None - Not applicable to the REST API. </br></br>File - Linked files. </br></br>FileManagerFile - Imported files.</br></br>BusOb - Attached Business Objects. </br></br>History - Information about the attachment, if any is available. For example, an e-mail message may store the name of an attachment sent.</br></br>Other - Not applicable to the REST API. </br>

var attachmenttype = "attachmenttype_example"; // String | For file types, select the type of attachment: </br></br>Imported - Attachment was imported into database. </br></br>Linked - Attachment is linked to an external file. </br></br>URL - Attachment is a URL.

var opts = { 
  'includelinks': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectAttachmentsByIdAndPublicIdV1(busobid, publicid, type, attachmenttype, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobid** | **String**| Specify the Business Object ID. | 
 **publicid** | **String**| Specify the Business Object public ID for the record that contains the attachments. | 
 **type** | **String**| Record attachment type: &lt;/br&gt;&lt;/br&gt;None - Not applicable to the REST API. &lt;/br&gt;&lt;/br&gt;File - Linked files. &lt;/br&gt;&lt;/br&gt;FileManagerFile - Imported files.&lt;/br&gt;&lt;/br&gt;BusOb - Attached Business Objects. &lt;/br&gt;&lt;/br&gt;History - Information about the attachment, if any is available. For example, an e-mail message may store the name of an attachment sent.&lt;/br&gt;&lt;/br&gt;Other - Not applicable to the REST API. &lt;/br&gt; | 
 **attachmenttype** | **String**| For file types, select the type of attachment: &lt;/br&gt;&lt;/br&gt;Imported - Attachment was imported into database. &lt;/br&gt;&lt;/br&gt;Linked - Attachment is linked to an external file. &lt;/br&gt;&lt;/br&gt;URL - Attachment is a URL. | 
 **includelinks** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectAttachmentsByIdAndRecIdV1"></a>
# **businessObjectGetBusinessObjectAttachmentsByIdAndRecIdV1**
> AttachmentsResponse businessObjectGetBusinessObjectAttachmentsByIdAndRecIdV1(busobid, busobrecid, type, attachmenttype, opts)

Get attachments by Business Object record ID

Operation to get attachments for a Business Object by Business Object ID and record ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID.

var type = "type_example"; // String | Record attachment type: </br></br>None - Not applicable to the REST API. </br></br>File - Linked files. </br></br>FileManagerFile - Imported files.</br></br>BusOb - Attached Business Objects. </br></br>History - Information about the attachment, if any is available. For example, an e-mail message may store the name of an attachment sent.</br></br>Other - Not applicable to the REST API. </br>

var attachmenttype = "attachmenttype_example"; // String | For file types, select the type of attachment: </br></br>Imported - Attachment was imported into database. </br></br>Linked - Attachment is linked to an external file. </br></br>URL - Attachment is a URL.

var opts = { 
  'includelinks': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectAttachmentsByIdAndRecIdV1(busobid, busobrecid, type, attachmenttype, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobid** | **String**| Specify the Business Object ID. | 
 **busobrecid** | **String**| Specify the Business Object record ID. | 
 **type** | **String**| Record attachment type: &lt;/br&gt;&lt;/br&gt;None - Not applicable to the REST API. &lt;/br&gt;&lt;/br&gt;File - Linked files. &lt;/br&gt;&lt;/br&gt;FileManagerFile - Imported files.&lt;/br&gt;&lt;/br&gt;BusOb - Attached Business Objects. &lt;/br&gt;&lt;/br&gt;History - Information about the attachment, if any is available. For example, an e-mail message may store the name of an attachment sent.&lt;/br&gt;&lt;/br&gt;Other - Not applicable to the REST API. &lt;/br&gt; | 
 **attachmenttype** | **String**| For file types, select the type of attachment: &lt;/br&gt;&lt;/br&gt;Imported - Attachment was imported into database. &lt;/br&gt;&lt;/br&gt;Linked - Attachment is linked to an external file. &lt;/br&gt;&lt;/br&gt;URL - Attachment is a URL. | 
 **includelinks** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectAttachmentsByNameAndPublicIdV1"></a>
# **businessObjectGetBusinessObjectAttachmentsByNameAndPublicIdV1**
> AttachmentsResponse businessObjectGetBusinessObjectAttachmentsByNameAndPublicIdV1(busobname, publicid, type, attachmenttype, opts)

Get attachments by Business Object name and public ID

Operation to get attachments for a Business Object by Business Object Name and public ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobname = "busobname_example"; // String | Specify the Business Object name.

var publicid = "publicid_example"; // String | Specify the Business Object public ID for the record that contains the attachments.

var type = "type_example"; // String | Record attachment type: </br></br>None - Not applicable to the REST API. </br></br>File - Linked files. </br></br>FileManagerFile - Imported files.</br></br>BusOb - Attached Business Objects. </br></br>History - Information about the attachment, if any is available. For example, an e-mail message may store the name of an attachment sent.</br></br>Other - Not applicable to the REST API. </br>

var attachmenttype = "attachmenttype_example"; // String | For file types, select the type of attachment: </br></br>Imported - Attachment was imported into database. </br></br>Linked - Attachment is linked to an external file. </br></br>URL - Attachment is a URL.

var opts = { 
  'includelinks': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectAttachmentsByNameAndPublicIdV1(busobname, publicid, type, attachmenttype, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobname** | **String**| Specify the Business Object name. | 
 **publicid** | **String**| Specify the Business Object public ID for the record that contains the attachments. | 
 **type** | **String**| Record attachment type: &lt;/br&gt;&lt;/br&gt;None - Not applicable to the REST API. &lt;/br&gt;&lt;/br&gt;File - Linked files. &lt;/br&gt;&lt;/br&gt;FileManagerFile - Imported files.&lt;/br&gt;&lt;/br&gt;BusOb - Attached Business Objects. &lt;/br&gt;&lt;/br&gt;History - Information about the attachment, if any is available. For example, an e-mail message may store the name of an attachment sent.&lt;/br&gt;&lt;/br&gt;Other - Not applicable to the REST API. &lt;/br&gt; | 
 **attachmenttype** | **String**| For file types, select the type of attachment: &lt;/br&gt;&lt;/br&gt;Imported - Attachment was imported into database. &lt;/br&gt;&lt;/br&gt;Linked - Attachment is linked to an external file. &lt;/br&gt;&lt;/br&gt;URL - Attachment is a URL. | 
 **includelinks** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectAttachmentsByNameAndRecIdV1"></a>
# **businessObjectGetBusinessObjectAttachmentsByNameAndRecIdV1**
> AttachmentsResponse businessObjectGetBusinessObjectAttachmentsByNameAndRecIdV1(busobname, busobrecid, type, attachmenttype, opts)

Get attachments by Business Object name and record ID

Operation to get attachments for a Business Object by name and record ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobname = "busobname_example"; // String | Specify the Business Object name.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID.

var type = "type_example"; // String | Record attachment type: </br></br>None - Not applicable to the REST API. </br></br>File - Linked files. </br></br>FileManagerFile - Imported files.</br></br>BusOb - Attached Business Objects. </br></br>History - Information about the attachment, if any is available. For example, an e-mail message may store the name of an attachment sent.</br></br>Other - Not applicable to the REST API. </br>

var attachmenttype = "attachmenttype_example"; // String | For file types, select the type of attachment: </br></br>Imported - Attachment was imported into database. </br></br>Linked - Attachment is linked to an external file. </br></br>URL - Attachment is a URL.

var opts = { 
  'includelinks': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectAttachmentsByNameAndRecIdV1(busobname, busobrecid, type, attachmenttype, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobname** | **String**| Specify the Business Object name. | 
 **busobrecid** | **String**| Specify the Business Object record ID. | 
 **type** | **String**| Record attachment type: &lt;/br&gt;&lt;/br&gt;None - Not applicable to the REST API. &lt;/br&gt;&lt;/br&gt;File - Linked files. &lt;/br&gt;&lt;/br&gt;FileManagerFile - Imported files.&lt;/br&gt;&lt;/br&gt;BusOb - Attached Business Objects. &lt;/br&gt;&lt;/br&gt;History - Information about the attachment, if any is available. For example, an e-mail message may store the name of an attachment sent.&lt;/br&gt;&lt;/br&gt;Other - Not applicable to the REST API. &lt;/br&gt; | 
 **attachmenttype** | **String**| For file types, select the type of attachment: &lt;/br&gt;&lt;/br&gt;Imported - Attachment was imported into database. &lt;/br&gt;&lt;/br&gt;Linked - Attachment is linked to an external file. &lt;/br&gt;&lt;/br&gt;URL - Attachment is a URL. | 
 **includelinks** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectAttachmentsV1"></a>
# **businessObjectGetBusinessObjectAttachmentsV1**
> AttachmentsResponse businessObjectGetBusinessObjectAttachmentsV1(attachmentsRequest)

Get Business Object attachments by request object

Operation to get attachments for a Business Object by attachments request object.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var attachmentsRequest = new CherwellRestApi.AttachmentsRequest(); // AttachmentsRequest | Object with all the parameters to request an attachments list. You can also request a list of types to get more than just one type at a time.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectAttachmentsV1(attachmentsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachmentsRequest** | [**AttachmentsRequest**](AttachmentsRequest.md)| Object with all the parameters to request an attachments list. You can also request a list of types to get more than just one type at a time. | 

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectBatchV1"></a>
# **businessObjectGetBusinessObjectBatchV1**
> BatchReadResponse businessObjectGetBusinessObjectBatchV1(request)

Get a batch of Business Object records

Operation that returns a batch of Business Object records that includes a list of field record IDs, display names, and values for each record.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var request = new CherwellRestApi.BatchReadRequest(); // BatchReadRequest | Specify an array of Business Object IDs, record IDs, or public IDs. Use a flag to stop on error or continue on error.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectBatchV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**BatchReadRequest**](BatchReadRequest.md)| Specify an array of Business Object IDs, record IDs, or public IDs. Use a flag to stop on error or continue on error. | 

### Return type

[**BatchReadResponse**](BatchReadResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectByCacheKeyV1"></a>
# **businessObjectGetBusinessObjectByCacheKeyV1**
> ReadResponse businessObjectGetBusinessObjectByCacheKeyV1(cachekey, opts)

Get a Business Object record

Operation that returns a Business Object record that includes a list of fields and their record IDs, names, and set values.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var cachekey = "cachekey_example"; // String | The key of the item to get out of the cache

var opts = { 
  'cacheScope': "cacheScope_example" // String | The scope of the item to get out of the cache.  The default should be session.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectByCacheKeyV1(cachekey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cachekey** | **String**| The key of the item to get out of the cache | 
 **cacheScope** | **String**| The scope of the item to get out of the cache.  The default should be session. | [optional] 

### Return type

[**ReadResponse**](ReadResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectByPublicIdV1"></a>
# **businessObjectGetBusinessObjectByPublicIdV1**
> ReadResponse businessObjectGetBusinessObjectByPublicIdV1(busobid, publicid)

Get a Business Object record

Operation that returns a Business Object record that includes a list of fields and their record IDs, names, and set values.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var publicid = "publicid_example"; // String | Specify the Business Object public ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectByPublicIdV1(busobid, publicid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobid** | **String**| Specify the Business Object ID. | 
 **publicid** | **String**| Specify the Business Object public ID. | 

### Return type

[**ReadResponse**](ReadResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectByRecIdV1"></a>
# **businessObjectGetBusinessObjectByRecIdV1**
> ReadResponse businessObjectGetBusinessObjectByRecIdV1(busobid, busobrecid)

Get a Business Object record

Operation that returns a Business Object record that includes a list of fields and their record IDs, names, and set values.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectByRecIdV1(busobid, busobrecid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobid** | **String**| Specify the Business Object ID. | 
 **busobrecid** | **String**| Specify the Business Object record ID. | 

### Return type

[**ReadResponse**](ReadResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectByScanCodeBusObIdV1"></a>
# **businessObjectGetBusinessObjectByScanCodeBusObIdV1**
> BarcodeLookupResponse businessObjectGetBusinessObjectByScanCodeBusObIdV1(scanCode, busobid)

Get a Business Object by its scan code and Business Object ID.

Operation to get a Business Object based on its associated scan code and Business Object ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var scanCode = "scanCode_example"; // String | The scan code for a Business Object record.

var busobid = "busobid_example"; // String | The Business Object ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectByScanCodeBusObIdV1(scanCode, busobid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scanCode** | **String**| The scan code for a Business Object record. | 
 **busobid** | **String**| The Business Object ID. | 

### Return type

[**BarcodeLookupResponse**](BarcodeLookupResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectByScanCodeBusObNameV1"></a>
# **businessObjectGetBusinessObjectByScanCodeBusObNameV1**
> BarcodeLookupResponse businessObjectGetBusinessObjectByScanCodeBusObNameV1(scanCode, busobname)

Get a Business Object by its scan code and Business Object name.

Operation to get a Business Object based on its associated scan code and Business Object name.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var scanCode = "scanCode_example"; // String | The scan code for a Business Object record.

var busobname = "busobname_example"; // String | The Business Bbject name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectByScanCodeBusObNameV1(scanCode, busobname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scanCode** | **String**| The scan code for a Business Object record. | 
 **busobname** | **String**| The Business Bbject name. | 

### Return type

[**BarcodeLookupResponse**](BarcodeLookupResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectSchemaV1"></a>
# **businessObjectGetBusinessObjectSchemaV1**
> SchemaResponse businessObjectGetBusinessObjectSchemaV1(busobId, opts)

Get a Business Object schema

Operation that returns the schema for a Business Object and, optionally, its related Business Objects.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobId = "busobId_example"; // String | Specify the Business Object ID.

var opts = { 
  'includerelationships': true // Boolean | Flag to include schemas for related Business Object. Default is false.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectSchemaV1(busobId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobId** | **String**| Specify the Business Object ID. | 
 **includerelationships** | **Boolean**| Flag to include schemas for related Business Object. Default is false. | [optional] 

### Return type

[**SchemaResponse**](SchemaResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectSummariesV1"></a>
# **businessObjectGetBusinessObjectSummariesV1**
> [Summary] businessObjectGetBusinessObjectSummariesV1(type)

Get Business Object summaries by type

Operation that returns a list of Business Object summaries by type (Major, Supporting, Lookup, Groups, and All). 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var type = "type_example"; // String | Use to show:<br />All - All objects<br />Major - Major objects only<br />Supporting - Supporting objects only<br />Lookup - Lookup objects only<br />Groups - Groups only


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectSummariesV1(type, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Use to show:&lt;br /&gt;All - All objects&lt;br /&gt;Major - Major objects only&lt;br /&gt;Supporting - Supporting objects only&lt;br /&gt;Lookup - Lookup objects only&lt;br /&gt;Groups - Groups only | 

### Return type

[**[Summary]**](Summary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectSummaryByIdV1"></a>
# **businessObjectGetBusinessObjectSummaryByIdV1**
> [Summary] businessObjectGetBusinessObjectSummaryByIdV1(busobid)

Get a Business Object summary by ID

Operation that returns a single Business Object summary by ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobid = "busobid_example"; // String | Specify a Business Object ID to get its summary.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectSummaryByIdV1(busobid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobid** | **String**| Specify a Business Object ID to get its summary. | 

### Return type

[**[Summary]**](Summary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectSummaryByNameV1"></a>
# **businessObjectGetBusinessObjectSummaryByNameV1**
> [Summary] businessObjectGetBusinessObjectSummaryByNameV1(busobname)

Get a Business Object summary by name

Operation that returns a single Business Object summary by name.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var busobname = "busobname_example"; // String | Specify a Business Object name to get its summary.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectSummaryByNameV1(busobname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **busobname** | **String**| Specify a Business Object name to get its summary. | 

### Return type

[**[Summary]**](Summary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetBusinessObjectTemplateV1"></a>
# **businessObjectGetBusinessObjectTemplateV1**
> TemplateResponse businessObjectGetBusinessObjectTemplateV1(request)

Get Business Object templates for create

Operation that returns a template to create Business Objects.  The template includes placeholders for field values. You can then send the template with these values to the Business Object Save operation.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var request = new CherwellRestApi.TemplateRequest(); // TemplateRequest | Specify the Business Object ID. Use true to include all required fields or all fields. Specify an optional fields list by adding field names in a comma-delimited list [\"field1\", \"field2\"]. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetBusinessObjectTemplateV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TemplateRequest**](TemplateRequest.md)| Specify the Business Object ID. Use true to include all required fields or all fields. Specify an optional fields list by adding field names in a comma-delimited list [\&quot;field1\&quot;, \&quot;field2\&quot;].  | 

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetRelatedBusinessObjectByRequestV1"></a>
# **businessObjectGetRelatedBusinessObjectByRequestV1**
> RelatedBusinessObjectResponse businessObjectGetRelatedBusinessObjectByRequestV1(relatedBusinessObjectRequest, opts)

Get related Business Objects using a request object

Operation to get related Business Objects for a specific relationship. Specify a list of fields to include in the response. The order of parameter usage and overrides is: all fields set to true overrides default overrides;  custom grid overrides field list settings.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var relatedBusinessObjectRequest = new CherwellRestApi.RelatedBusinessObjectRequest(); // RelatedBusinessObjectRequest | Request object containing all the possible parameters to get related Business Objects.

var opts = { 
  'includelinks': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetRelatedBusinessObjectByRequestV1(relatedBusinessObjectRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relatedBusinessObjectRequest** | [**RelatedBusinessObjectRequest**](RelatedBusinessObjectRequest.md)| Request object containing all the possible parameters to get related Business Objects. | 
 **includelinks** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**RelatedBusinessObjectResponse**](RelatedBusinessObjectResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetRelatedBusinessObjectV1"></a>
# **businessObjectGetRelatedBusinessObjectV1**
> RelatedBusinessObjectResponse businessObjectGetRelatedBusinessObjectV1(parentbusobid, parentbusobrecid, relationshipid, opts)

Get related Business Objects by ID

Operation to get the related objects for a Business Object relationship specifying all fields or default grid as the field to return.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var parentbusobid = "parentbusobid_example"; // String | Specify the Business Object ID for the parent Business Object.

var parentbusobrecid = "parentbusobrecid_example"; // String | Specify the record ID for the parent Business Object.

var relationshipid = "relationshipid_example"; // String | Specify the Relationship ID for the related Business Object you want to return.

var opts = { 
  'pageNumber': 56, // Number | Specify the page number of the result set to return.
  'pageSize': 56, // Number | Specify the number of rows to return per page.
  'allfields': true, // Boolean | Flag to include all related Business Object fields.  Default is true if not supplied.  If true, then UseDefaultGrid is not used.
  'usedefaultgrid': true, // Boolean | Flag to trigger the use of the related Business Objects default grid for the list of fields to return.
  'includelinks': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetRelatedBusinessObjectV1(parentbusobid, parentbusobrecid, relationshipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentbusobid** | **String**| Specify the Business Object ID for the parent Business Object. | 
 **parentbusobrecid** | **String**| Specify the record ID for the parent Business Object. | 
 **relationshipid** | **String**| Specify the Relationship ID for the related Business Object you want to return. | 
 **pageNumber** | **Number**| Specify the page number of the result set to return. | [optional] 
 **pageSize** | **Number**| Specify the number of rows to return per page. | [optional] 
 **allfields** | **Boolean**| Flag to include all related Business Object fields.  Default is true if not supplied.  If true, then UseDefaultGrid is not used. | [optional] 
 **usedefaultgrid** | **Boolean**| Flag to trigger the use of the related Business Objects default grid for the list of fields to return. | [optional] 
 **includelinks** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**RelatedBusinessObjectResponse**](RelatedBusinessObjectResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectGetRelatedBusinessObjectWithCustomGridV1"></a>
# **businessObjectGetRelatedBusinessObjectWithCustomGridV1**
> RelatedBusinessObjectResponse businessObjectGetRelatedBusinessObjectWithCustomGridV1(parentbusobid, parentbusobrecid, relationshipid, gridid, opts)

Get related Business Objects custom grid

Operation to get related Business Objects for a specific relationship. Specify a custom grid ID as the fields to return.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var parentbusobid = "parentbusobid_example"; // String | Specify the Business Object ID for the parent Business Object.

var parentbusobrecid = "parentbusobrecid_example"; // String | Specify the record ID for the parent Business Object.

var relationshipid = "relationshipid_example"; // String | Specify the Relationship ID for the related Business Object you want to return.

var gridid = "gridid_example"; // String | Specify the ID for the custom grid that contains the field list.

var opts = { 
  'pageNumber': 56, // Number | Specify the page number of the result set to return.
  'pageSize': 56, // Number | Specify the number of rows to return per page.
  'includelinks': true // Boolean | Flag to include hyperlinks in results. Default is false. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectGetRelatedBusinessObjectWithCustomGridV1(parentbusobid, parentbusobrecid, relationshipid, gridid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentbusobid** | **String**| Specify the Business Object ID for the parent Business Object. | 
 **parentbusobrecid** | **String**| Specify the record ID for the parent Business Object. | 
 **relationshipid** | **String**| Specify the Relationship ID for the related Business Object you want to return. | 
 **gridid** | **String**| Specify the ID for the custom grid that contains the field list. | 
 **pageNumber** | **Number**| Specify the page number of the result set to return. | [optional] 
 **pageSize** | **Number**| Specify the number of rows to return per page. | [optional] 
 **includelinks** | **Boolean**| Flag to include hyperlinks in results. Default is false.  | [optional] 

### Return type

[**RelatedBusinessObjectResponse**](RelatedBusinessObjectResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectLinkRelatedBusinessObjectByRecIdV1"></a>
# **businessObjectLinkRelatedBusinessObjectByRecIdV1**
> RelatedBusinessObjectResponse businessObjectLinkRelatedBusinessObjectByRecIdV1(parentbusobid, parentbusobrecid, relationshipid, busobid, busobrecid)

Link related Business Objects

Operation to link related Business Objects. 

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var parentbusobid = "parentbusobid_example"; // String | Specify the Business Object ID for the parent Business Object.

var parentbusobrecid = "parentbusobrecid_example"; // String | Specify the record ID for the parent Business Object.

var relationshipid = "relationshipid_example"; // String | Specify the Relationship ID for the related Business Object you want to link.

var busobid = "busobid_example"; // String | Specify the Business Object ID of the Business Object to be linked.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID of the Business Object to be linked.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectLinkRelatedBusinessObjectByRecIdV1(parentbusobid, parentbusobrecid, relationshipid, busobid, busobrecid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentbusobid** | **String**| Specify the Business Object ID for the parent Business Object. | 
 **parentbusobrecid** | **String**| Specify the record ID for the parent Business Object. | 
 **relationshipid** | **String**| Specify the Relationship ID for the related Business Object you want to link. | 
 **busobid** | **String**| Specify the Business Object ID of the Business Object to be linked. | 
 **busobrecid** | **String**| Specify the Business Object record ID of the Business Object to be linked. | 

### Return type

[**RelatedBusinessObjectResponse**](RelatedBusinessObjectResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectRemoveBusinessObjectAttachmentByIdAndPublicIdV1"></a>
# **businessObjectRemoveBusinessObjectAttachmentByIdAndPublicIdV1**
> businessObjectRemoveBusinessObjectAttachmentByIdAndPublicIdV1(attachmentid, busobid, publicid)

Remove an attachment by Business Object ID and public ID

Operation to remove an attachment from a Business Object using the attachment record ID, Business Object ID, and Business Object public ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var attachmentid = "attachmentid_example"; // String | Specify the internal ID of the attachment record.

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var publicid = "publicid_example"; // String | Specify the Business Object public ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.businessObjectRemoveBusinessObjectAttachmentByIdAndPublicIdV1(attachmentid, busobid, publicid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachmentid** | **String**| Specify the internal ID of the attachment record. | 
 **busobid** | **String**| Specify the Business Object ID. | 
 **publicid** | **String**| Specify the Business Object public ID. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="businessObjectRemoveBusinessObjectAttachmentByIdAndRecIdV1"></a>
# **businessObjectRemoveBusinessObjectAttachmentByIdAndRecIdV1**
> businessObjectRemoveBusinessObjectAttachmentByIdAndRecIdV1(attachmentid, busobid, busobrecid)

Remove an attachment by Business Object ID and record ID

Operation to remove an attachment from a Business Object using the attachment record ID, Business Object ID, and Business Object record ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var attachmentid = "attachmentid_example"; // String | Specify the internal ID of the attachment record.

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.businessObjectRemoveBusinessObjectAttachmentByIdAndRecIdV1(attachmentid, busobid, busobrecid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachmentid** | **String**| Specify the internal ID of the attachment record. | 
 **busobid** | **String**| Specify the Business Object ID. | 
 **busobrecid** | **String**| Specify the Business Object record ID. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="businessObjectRemoveBusinessObjectAttachmentByNameAndPublicIdV1"></a>
# **businessObjectRemoveBusinessObjectAttachmentByNameAndPublicIdV1**
> businessObjectRemoveBusinessObjectAttachmentByNameAndPublicIdV1(attachmentid, busobname, publicid)

Remove an attachment by Business Object name and public ID

Operation to remove an attachment from a Business Object using the attachment record ID, Business Object name, and Business Object record ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var attachmentid = "attachmentid_example"; // String | Specify the internal ID of the attachment record.

var busobname = "busobname_example"; // String | Specify the Business Object name.

var publicid = "publicid_example"; // String | Specify the Business Object public ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.businessObjectRemoveBusinessObjectAttachmentByNameAndPublicIdV1(attachmentid, busobname, publicid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachmentid** | **String**| Specify the internal ID of the attachment record. | 
 **busobname** | **String**| Specify the Business Object name. | 
 **publicid** | **String**| Specify the Business Object public ID. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="businessObjectRemoveBusinessObjectAttachmentByNameAndRecIdV1"></a>
# **businessObjectRemoveBusinessObjectAttachmentByNameAndRecIdV1**
> businessObjectRemoveBusinessObjectAttachmentByNameAndRecIdV1(attachmentid, busobname, busobrecid)

Remove an attachment by Business Object name and record ID

Operation to remove an attachment from a Business Object using the attachment record ID, Business Object name, and Business Object public ID.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var attachmentid = "attachmentid_example"; // String | Specify the internal ID of the attachment record.

var busobname = "busobname_example"; // String | Specify the Business Object name.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.businessObjectRemoveBusinessObjectAttachmentByNameAndRecIdV1(attachmentid, busobname, busobrecid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachmentid** | **String**| Specify the internal ID of the attachment record. | 
 **busobname** | **String**| Specify the Business Object name. | 
 **busobrecid** | **String**| Specify the Business Object record ID. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="businessObjectSaveBusinessObjectAttachmentBusObV1"></a>
# **businessObjectSaveBusinessObjectAttachmentBusObV1**
> AttachmentsResponse businessObjectSaveBusinessObjectAttachmentBusObV1(request)

Attach a Business Object to a Business Object

Operation to attach a Business Object to a Business Object. This links the Business Object but does not create a relationship between the two. (Use \&quot;Link Related Business Objects\&quot; to create a relationship.)

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var request = new CherwellRestApi.SaveBusObAttachmentRequest(); // SaveBusObAttachmentRequest | Request object used to specify the Business Objects to attach. You can use Business Object name or ID and Business Object record ID or public ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectSaveBusinessObjectAttachmentBusObV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SaveBusObAttachmentRequest**](SaveBusObAttachmentRequest.md)| Request object used to specify the Business Objects to attach. You can use Business Object name or ID and Business Object record ID or public ID. | 

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectSaveBusinessObjectAttachmentLinkV1"></a>
# **businessObjectSaveBusinessObjectAttachmentLinkV1**
> AttachmentsResponse businessObjectSaveBusinessObjectAttachmentLinkV1(request)

Attach a file via UNC

Operation to attach a file to a Business Object via a path (UNC recommended).

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var request = new CherwellRestApi.SaveLinkAttachmentRequest(); // SaveLinkAttachmentRequest | Request object used to specify the file path (UNC recommended) and the Business Object. You can use Business Object name or ID and Business Object record ID or public ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectSaveBusinessObjectAttachmentLinkV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SaveLinkAttachmentRequest**](SaveLinkAttachmentRequest.md)| Request object used to specify the file path (UNC recommended) and the Business Object. You can use Business Object name or ID and Business Object record ID or public ID. | 

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectSaveBusinessObjectAttachmentUrlV1"></a>
# **businessObjectSaveBusinessObjectAttachmentUrlV1**
> AttachmentsResponse businessObjectSaveBusinessObjectAttachmentUrlV1(request)

Attach a URL path

Operation to attach a URL path to a Business Object.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var request = new CherwellRestApi.SaveUrlAttachmentRequest(); // SaveUrlAttachmentRequest | Request object used to specify the URL path and Business Object. You can use Business Object name or ID and Business Object record ID or public ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectSaveBusinessObjectAttachmentUrlV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SaveUrlAttachmentRequest**](SaveUrlAttachmentRequest.md)| Request object used to specify the URL path and Business Object. You can use Business Object name or ID and Business Object record ID or public ID. | 

### Return type

[**AttachmentsResponse**](AttachmentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectSaveBusinessObjectBatchV1"></a>
# **businessObjectSaveBusinessObjectBatchV1**
> BatchSaveResponse businessObjectSaveBusinessObjectBatchV1(request)

Create or update a batch of Business Objects

Operation that creates or updates an array of Business Objects in a batch. To update, specify record ID or public ID. To create, leave record ID and public ID empty.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var request = new CherwellRestApi.BatchSaveRequest(); // BatchSaveRequest | Specify the array of Business Object templates. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectSaveBusinessObjectBatchV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**BatchSaveRequest**](BatchSaveRequest.md)| Specify the array of Business Object templates.  | 

### Return type

[**BatchSaveResponse**](BatchSaveResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectSaveBusinessObjectV1"></a>
# **businessObjectSaveBusinessObjectV1**
> SaveResponse businessObjectSaveBusinessObjectV1(request)

Create or Update a Business Object

Operation that creates a new Business Object or updates an existing Business Object. To create, leave record ID and public ID empty. Upon creating or saving, a cache key is returned to use for subsequent requests. If the object is not found in the cache with said cache key, specify record ID or public ID to save and return a new cache key. Set persist &#x3D; true, to actually save the business object to disk, persist &#x3D; false will just cache it.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var request = new CherwellRestApi.SaveRequest(); // SaveRequest | Specify a list of fields from a Business Object template. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectSaveBusinessObjectV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SaveRequest**](SaveRequest.md)| Specify a list of fields from a Business Object template.  | 

### Return type

[**SaveResponse**](SaveResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectSaveRelatedBusinessObjectV1"></a>
# **businessObjectSaveRelatedBusinessObjectV1**
> RelatedSaveResponse businessObjectSaveRelatedBusinessObjectV1(request)

Create or update a related Business Object

Operation that creates or updates a related Business Object. To update, specify record ID or public ID. To create, leave record ID and public ID empty.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var request = new CherwellRestApi.RelatedSaveRequest(); // RelatedSaveRequest | Request object specifying the parent the Business Object, the Relationship, and field values for the Business Object to create or update. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectSaveRelatedBusinessObjectV1(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**RelatedSaveRequest**](RelatedSaveRequest.md)| Request object specifying the parent the Business Object, the Relationship, and field values for the Business Object to create or update.  | 

### Return type

[**RelatedSaveResponse**](RelatedSaveResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectUnLinkRelatedBusinessObjectByRecIdV1"></a>
# **businessObjectUnLinkRelatedBusinessObjectByRecIdV1**
> RelatedBusinessObjectResponse businessObjectUnLinkRelatedBusinessObjectByRecIdV1(parentbusobid, parentbusobrecid, relationshipid, busobid, busobrecid)

UnLink related Business Objects

Operation to unlink related Business Objects.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var parentbusobid = "parentbusobid_example"; // String | Specify the Business Object ID for the parent Business Object.

var parentbusobrecid = "parentbusobrecid_example"; // String | Specify the record ID for the parent Business Object.

var relationshipid = "relationshipid_example"; // String | Specify the Relationship ID for the related Business Object you want to unlink.

var busobid = "busobid_example"; // String | Specify the Business Object ID of the Business Object to be unlinked.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID of the Business Object to be unlinked.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectUnLinkRelatedBusinessObjectByRecIdV1(parentbusobid, parentbusobrecid, relationshipid, busobid, busobrecid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentbusobid** | **String**| Specify the Business Object ID for the parent Business Object. | 
 **parentbusobrecid** | **String**| Specify the record ID for the parent Business Object. | 
 **relationshipid** | **String**| Specify the Relationship ID for the related Business Object you want to unlink. | 
 **busobid** | **String**| Specify the Business Object ID of the Business Object to be unlinked. | 
 **busobrecid** | **String**| Specify the Business Object record ID of the Business Object to be unlinked. | 

### Return type

[**RelatedBusinessObjectResponse**](RelatedBusinessObjectResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectUploadBusinessObjectAttachmentByIdAndPublicIdV1"></a>
# **businessObjectUploadBusinessObjectAttachmentByIdAndPublicIdV1**
> &#39;String&#39; businessObjectUploadBusinessObjectAttachmentByIdAndPublicIdV1(body, filename, busobid, publicid, offset, totalsize, opts)

Upload an attachment by Business Object ID and public ID

Operation to upload an attachment to a Business Object record using a Business Object ID and public ID. The body of the request is the byte array of the file part being uploaded.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var body = B; // Blob | 

var filename = "filename_example"; // String | Specify the name of the file being uploaded. If no attachment name is provided, the file name is used.

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var publicid = "publicid_example"; // String | Specify the Business Object public ID  to attach the file to.

var offset = 56; // Number | The offset is the starting index of the file part being uploaded.  If this is the first part then the offset will be zero.

var totalsize = 56; // Number | The entire file size in bytes.

var opts = { 
  'attachmentid': "attachmentid_example", // String | Specify the attachment ID of an uploaded file to upload subsequent parts and ensure each part gets appended to the parts that have already been uploaded.
  'displaytext': "displaytext_example" // String | Specify the attachment name, which is the display text for the attachment record.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectUploadBusinessObjectAttachmentByIdAndPublicIdV1(body, filename, busobid, publicid, offset, totalsize, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Blob**|  | 
 **filename** | **String**| Specify the name of the file being uploaded. If no attachment name is provided, the file name is used. | 
 **busobid** | **String**| Specify the Business Object ID. | 
 **publicid** | **String**| Specify the Business Object public ID  to attach the file to. | 
 **offset** | **Number**| The offset is the starting index of the file part being uploaded.  If this is the first part then the offset will be zero. | 
 **totalsize** | **Number**| The entire file size in bytes. | 
 **attachmentid** | **String**| Specify the attachment ID of an uploaded file to upload subsequent parts and ensure each part gets appended to the parts that have already been uploaded. | [optional] 
 **displaytext** | **String**| Specify the attachment name, which is the display text for the attachment record. | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectUploadBusinessObjectAttachmentByIdAndRecIdV1"></a>
# **businessObjectUploadBusinessObjectAttachmentByIdAndRecIdV1**
> &#39;String&#39; businessObjectUploadBusinessObjectAttachmentByIdAndRecIdV1(body, filename, busobid, busobrecid, offset, totalsize, opts)

Upload an attachment by Business Object ID and record ID

Operation to upload an attachment to a Business Object record using a Business Object ID and record ID. The body of the request is the byte array of the file part being uploaded.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var body = B; // Blob | 

var filename = "filename_example"; // String | Specify the name of the file being uploaded. If no attachment name is provided, the file name is used.

var busobid = "busobid_example"; // String | Specify the Business Object ID.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID to attach the file to.

var offset = 56; // Number | The offset is the starting index of the file part being uploaded.  If this is the first part then the offset will be zero.

var totalsize = 56; // Number | The entire file size in bytes.

var opts = { 
  'attachmentid': "attachmentid_example", // String | Specify the attachment ID of an uploaded file to upload subsequent parts and ensure each part gets appended to the parts that have already been uploaded.
  'displaytext': "displaytext_example" // String | Specify the attachment name, which is the display text for the attachment record.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectUploadBusinessObjectAttachmentByIdAndRecIdV1(body, filename, busobid, busobrecid, offset, totalsize, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Blob**|  | 
 **filename** | **String**| Specify the name of the file being uploaded. If no attachment name is provided, the file name is used. | 
 **busobid** | **String**| Specify the Business Object ID. | 
 **busobrecid** | **String**| Specify the Business Object record ID to attach the file to. | 
 **offset** | **Number**| The offset is the starting index of the file part being uploaded.  If this is the first part then the offset will be zero. | 
 **totalsize** | **Number**| The entire file size in bytes. | 
 **attachmentid** | **String**| Specify the attachment ID of an uploaded file to upload subsequent parts and ensure each part gets appended to the parts that have already been uploaded. | [optional] 
 **displaytext** | **String**| Specify the attachment name, which is the display text for the attachment record. | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectUploadBusinessObjectAttachmentByNameAndPublicIdV1"></a>
# **businessObjectUploadBusinessObjectAttachmentByNameAndPublicIdV1**
> &#39;String&#39; businessObjectUploadBusinessObjectAttachmentByNameAndPublicIdV1(body, filename, busobname, publicid, offset, totalsize, opts)

Upload an attachment by Business Object name and public ID

Operation to upload an attachment to a Business Object record using a Business Object name and public ID. The body of the request is the byte array of the file part being uploaded.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var body = B; // Blob | 

var filename = "filename_example"; // String | Specify the name of the file being uploaded. If no attachment name is provided, the file name is used.

var busobname = "busobname_example"; // String | Specify the Business Object name.

var publicid = "publicid_example"; // String | Specify the Business Object public ID  to attach the file to.

var offset = 56; // Number | The offset is the starting index of the file part being uploaded.  If this is the first part then the offset will be zero.

var totalsize = 56; // Number | The entire file size in bytes.

var opts = { 
  'attachmentid': "attachmentid_example", // String | Specify the attachment ID of an uploaded file to upload subsequent parts and ensure each part gets appended to the parts that have already been uploaded.
  'displaytext': "displaytext_example" // String | Specify the attachment name, which is the display text for the attachment record.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectUploadBusinessObjectAttachmentByNameAndPublicIdV1(body, filename, busobname, publicid, offset, totalsize, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Blob**|  | 
 **filename** | **String**| Specify the name of the file being uploaded. If no attachment name is provided, the file name is used. | 
 **busobname** | **String**| Specify the Business Object name. | 
 **publicid** | **String**| Specify the Business Object public ID  to attach the file to. | 
 **offset** | **Number**| The offset is the starting index of the file part being uploaded.  If this is the first part then the offset will be zero. | 
 **totalsize** | **Number**| The entire file size in bytes. | 
 **attachmentid** | **String**| Specify the attachment ID of an uploaded file to upload subsequent parts and ensure each part gets appended to the parts that have already been uploaded. | [optional] 
 **displaytext** | **String**| Specify the attachment name, which is the display text for the attachment record. | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="businessObjectUploadBusinessObjectAttachmentByNameAndRecIdV1"></a>
# **businessObjectUploadBusinessObjectAttachmentByNameAndRecIdV1**
> &#39;String&#39; businessObjectUploadBusinessObjectAttachmentByNameAndRecIdV1(body, filename, busobname, busobrecid, offset, totalsize, opts)

Upload an attachment by Business Object name and record ID

Operation to upload an attachment to a Business Object record using a Business Object name and record ID. The body of the request is the byte array of the file part being uploaded.

### Example
```javascript
var CherwellRestApi = require('cherwell_rest_api');
var defaultClient = CherwellRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CherwellRestApi.BusinessObjectApi();

var body = B; // Blob | 

var filename = "filename_example"; // String | Specify the name of the file being uploaded. If no attachment name is provided, the file name is used.

var busobname = "busobname_example"; // String | Specify the Business Object name.

var busobrecid = "busobrecid_example"; // String | Specify the Business Object record ID to attach the file to.

var offset = 56; // Number | The offset is the starting index of the file part being uploaded.  If this is the first part then the offset will be zero.

var totalsize = 56; // Number | The entire file size in bytes.

var opts = { 
  'attachmentid': "attachmentid_example", // String | Specify the attachment ID of an uploaded file to upload subsequent parts and ensure each part gets appended to the parts that have already been uploaded.
  'displaytext': "displaytext_example" // String | Specify the attachment name, which is the display text for the attachment record.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.businessObjectUploadBusinessObjectAttachmentByNameAndRecIdV1(body, filename, busobname, busobrecid, offset, totalsize, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Blob**|  | 
 **filename** | **String**| Specify the name of the file being uploaded. If no attachment name is provided, the file name is used. | 
 **busobname** | **String**| Specify the Business Object name. | 
 **busobrecid** | **String**| Specify the Business Object record ID to attach the file to. | 
 **offset** | **Number**| The offset is the starting index of the file part being uploaded.  If this is the first part then the offset will be zero. | 
 **totalsize** | **Number**| The entire file size in bytes. | 
 **attachmentid** | **String**| Specify the attachment ID of an uploaded file to upload subsequent parts and ensure each part gets appended to the parts that have already been uploaded. | [optional] 
 **displaytext** | **String**| Specify the attachment name, which is the display text for the attachment record. | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json, text/json, application/xml, text/xml

