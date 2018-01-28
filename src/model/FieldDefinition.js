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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.FieldDefinition = factory(root.CherwellRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FieldDefinition model module.
   * @module model/FieldDefinition
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>FieldDefinition</code>.
   * @alias module:model/FieldDefinition
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>FieldDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FieldDefinition} obj Optional instance to populate.
   * @return {module:model/FieldDefinition} The populated <code>FieldDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('autoFill')) {
        obj['autoFill'] = ApiClient.convertToType(data['autoFill'], 'Boolean');
      }
      if (data.hasOwnProperty('calculated')) {
        obj['calculated'] = ApiClient.convertToType(data['calculated'], 'Boolean');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('decimalDigits')) {
        obj['decimalDigits'] = ApiClient.convertToType(data['decimalDigits'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('fieldId')) {
        obj['fieldId'] = ApiClient.convertToType(data['fieldId'], 'String');
      }
      if (data.hasOwnProperty('hasDate')) {
        obj['hasDate'] = ApiClient.convertToType(data['hasDate'], 'Boolean');
      }
      if (data.hasOwnProperty('hasTime')) {
        obj['hasTime'] = ApiClient.convertToType(data['hasTime'], 'Boolean');
      }
      if (data.hasOwnProperty('isFullTextSearchable')) {
        obj['isFullTextSearchable'] = ApiClient.convertToType(data['isFullTextSearchable'], 'Boolean');
      }
      if (data.hasOwnProperty('maximumSize')) {
        obj['maximumSize'] = ApiClient.convertToType(data['maximumSize'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('typeLocalized')) {
        obj['typeLocalized'] = ApiClient.convertToType(data['typeLocalized'], 'String');
      }
      if (data.hasOwnProperty('validated')) {
        obj['validated'] = ApiClient.convertToType(data['validated'], 'Boolean');
      }
      if (data.hasOwnProperty('wholeDigits')) {
        obj['wholeDigits'] = ApiClient.convertToType(data['wholeDigits'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} autoFill
   */
  exports.prototype['autoFill'] = undefined;
  /**
   * @member {Boolean} calculated
   */
  exports.prototype['calculated'] = undefined;
  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {Number} decimalDigits
   */
  exports.prototype['decimalDigits'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * @member {String} fieldId
   */
  exports.prototype['fieldId'] = undefined;
  /**
   * @member {Boolean} hasDate
   */
  exports.prototype['hasDate'] = undefined;
  /**
   * @member {Boolean} hasTime
   */
  exports.prototype['hasTime'] = undefined;
  /**
   * @member {Boolean} isFullTextSearchable
   */
  exports.prototype['isFullTextSearchable'] = undefined;
  /**
   * @member {String} maximumSize
   */
  exports.prototype['maximumSize'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * @member {Boolean} required
   */
  exports.prototype['required'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} typeLocalized
   */
  exports.prototype['typeLocalized'] = undefined;
  /**
   * @member {Boolean} validated
   */
  exports.prototype['validated'] = undefined;
  /**
   * @member {Number} wholeDigits
   */
  exports.prototype['wholeDigits'] = undefined;



  return exports;
}));


