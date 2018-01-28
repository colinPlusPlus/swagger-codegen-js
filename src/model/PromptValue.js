/**
 * Cherwell Rest API
 * <a href=\"../../index.html\">Cherwell Rest API Documentation</a><br>Select version options from the header drop-down list (to the left of the Client Key box). Then, click Explore to view different versions of operations.
 *
 * OpenAPI spec version: 9.2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelObject'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.PromptValue = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.ModelObject);
  }
}(this, function(ApiClient, ModelObject) {
  'use strict';




  /**
   * The PromptValue model module.
   * @module model/PromptValue
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>PromptValue</code>.
   * @alias module:model/PromptValue
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>PromptValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromptValue} obj Optional instance to populate.
   * @return {module:model/PromptValue} The populated <code>PromptValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('busObId')) {
        obj['busObId'] = ApiClient.convertToType(data['busObId'], 'String');
      }
      if (data.hasOwnProperty('collectionStoreEntireRow')) {
        obj['collectionStoreEntireRow'] = ApiClient.convertToType(data['collectionStoreEntireRow'], 'String');
      }
      if (data.hasOwnProperty('collectionValueField')) {
        obj['collectionValueField'] = ApiClient.convertToType(data['collectionValueField'], 'String');
      }
      if (data.hasOwnProperty('fieldId')) {
        obj['fieldId'] = ApiClient.convertToType(data['fieldId'], 'String');
      }
      if (data.hasOwnProperty('listReturnFieldId')) {
        obj['listReturnFieldId'] = ApiClient.convertToType(data['listReturnFieldId'], 'String');
      }
      if (data.hasOwnProperty('promptId')) {
        obj['promptId'] = ApiClient.convertToType(data['promptId'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ModelObject.constructFromObject(data['value']);
      }
      if (data.hasOwnProperty('valueIsRecId')) {
        obj['valueIsRecId'] = ApiClient.convertToType(data['valueIsRecId'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} busObId
   */
  exports.prototype['busObId'] = undefined;
  /**
   * @member {String} collectionStoreEntireRow
   */
  exports.prototype['collectionStoreEntireRow'] = undefined;
  /**
   * @member {String} collectionValueField
   */
  exports.prototype['collectionValueField'] = undefined;
  /**
   * @member {String} fieldId
   */
  exports.prototype['fieldId'] = undefined;
  /**
   * @member {String} listReturnFieldId
   */
  exports.prototype['listReturnFieldId'] = undefined;
  /**
   * @member {String} promptId
   */
  exports.prototype['promptId'] = undefined;
  /**
   * @member {module:model/ModelObject} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Boolean} valueIsRecId
   */
  exports.prototype['valueIsRecId'] = undefined;



  return exports;
}));


