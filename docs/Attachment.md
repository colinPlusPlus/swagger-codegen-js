# CherwellRestApi.Attachment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachedBusObId** | **String** |  | [optional] 
**attachedBusObRecId** | **String** |  | [optional] 
**attachmentFileId** | **String** |  | [optional] 
**attachmentFileName** | **String** |  | [optional] 
**attachmentFileType** | **String** |  | [optional] 
**attachmentId** | **String** |  | [optional] 
**attachmentType** | **String** |  | [optional] 
**busObId** | **String** |  | [optional] 
**busObRecId** | **String** |  | [optional] 
**comment** | **String** |  | [optional] 
**created** | **Date** |  | [optional] 
**displayText** | **String** |  | [optional] 
**links** | [**[Link]**](Link.md) |  | [optional] 
**owner** | **String** |  | [optional] 
**scope** | **String** |  | [optional] 
**scopeOwner** | **String** |  | [optional] 
**type** | **String** |  | [optional] 


<a name="AttachmentTypeEnum"></a>
## Enum: AttachmentTypeEnum


* `Imported` (value: `"Imported"`)

* `Linked` (value: `"Linked"`)

* `URL` (value: `"URL"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `None` (value: `"None"`)

* `Global` (value: `"Global"`)

* `Team` (value: `"Team"`)

* `Persona` (value: `"Persona"`)

* `SecurityGroup` (value: `"SecurityGroup"`)

* `User` (value: `"User"`)

* `UserInPersona` (value: `"UserInPersona"`)

* `OtherUsers` (value: `"OtherUsers"`)

* `Core` (value: `"Core"`)

* `BusIntel` (value: `"BusIntel"`)

* `FromResource` (value: `"FromResource"`)

* `Site` (value: `"Site"`)

* `Custom` (value: `"Custom"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `None` (value: `"None"`)

* `File` (value: `"File"`)

* `FileManagerFile` (value: `"FileManagerFile"`)

* `BusOb` (value: `"BusOb"`)

* `History` (value: `"History"`)

* `Other` (value: `"Other"`)




