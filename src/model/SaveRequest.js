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
    define(['ApiClient', 'model/FieldTemplateItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FieldTemplateItem'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.SaveRequest = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.FieldTemplateItem);
  }
}(this, function(ApiClient, FieldTemplateItem) {
  'use strict';




  /**
   * The SaveRequest model module.
   * @module model/SaveRequest
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>SaveRequest</code>.
   * @alias module:model/SaveRequest
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SaveRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SaveRequest} obj Optional instance to populate.
   * @return {module:model/SaveRequest} The populated <code>SaveRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('busObId')) {
        obj['busObId'] = ApiClient.convertToType(data['busObId'], 'String');
      }
      if (data.hasOwnProperty('busObPublicId')) {
        obj['busObPublicId'] = ApiClient.convertToType(data['busObPublicId'], 'String');
      }
      if (data.hasOwnProperty('busObRecId')) {
        obj['busObRecId'] = ApiClient.convertToType(data['busObRecId'], 'String');
      }
      if (data.hasOwnProperty('cacheKey')) {
        obj['cacheKey'] = ApiClient.convertToType(data['cacheKey'], 'String');
      }
      if (data.hasOwnProperty('cacheScope')) {
        obj['cacheScope'] = ApiClient.convertToType(data['cacheScope'], 'String');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [FieldTemplateItem]);
      }
      if (data.hasOwnProperty('persist')) {
        obj['persist'] = ApiClient.convertToType(data['persist'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} busObId
   */
  exports.prototype['busObId'] = undefined;
  /**
   * @member {String} busObPublicId
   */
  exports.prototype['busObPublicId'] = undefined;
  /**
   * @member {String} busObRecId
   */
  exports.prototype['busObRecId'] = undefined;
  /**
   * @member {String} cacheKey
   */
  exports.prototype['cacheKey'] = undefined;
  /**
   * @member {module:model/SaveRequest.CacheScopeEnum} cacheScope
   */
  exports.prototype['cacheScope'] = undefined;
  /**
   * @member {Array.<module:model/FieldTemplateItem>} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * @member {Boolean} persist
   */
  exports.prototype['persist'] = undefined;


  /**
   * Allowed values for the <code>cacheScope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CacheScopeEnum = {
    /**
     * value: "Tenant"
     * @const
     */
    "Tenant": "Tenant",
    /**
     * value: "User"
     * @const
     */
    "User": "User",
    /**
     * value: "Session"
     * @const
     */
    "Session": "Session"  };


  return exports;
}));


