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
    root.CherwellRestApi.ServiceInfoResponse = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.ModelObject);
  }
}(this, function(ApiClient, ModelObject) {
  'use strict';




  /**
   * The ServiceInfoResponse model module.
   * @module model/ServiceInfoResponse
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>ServiceInfoResponse</code>.
   * @alias module:model/ServiceInfoResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ServiceInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceInfoResponse} obj Optional instance to populate.
   * @return {module:model/ServiceInfoResponse} The populated <code>ServiceInfoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('csmCulture')) {
        obj['csmCulture'] = ApiClient.convertToType(data['csmCulture'], 'String');
      }
      if (data.hasOwnProperty('csmVersion')) {
        obj['csmVersion'] = ApiClient.convertToType(data['csmVersion'], 'String');
      }
      if (data.hasOwnProperty('systemDateTime')) {
        obj['systemDateTime'] = ApiClient.convertToType(data['systemDateTime'], 'Date');
      }
      if (data.hasOwnProperty('timeZone')) {
        obj['timeZone'] = ModelObject.constructFromObject(data['timeZone']);
      }
    }
    return obj;
  }

  /**
   * @member {String} apiVersion
   */
  exports.prototype['apiVersion'] = undefined;
  /**
   * @member {String} csmCulture
   */
  exports.prototype['csmCulture'] = undefined;
  /**
   * @member {String} csmVersion
   */
  exports.prototype['csmVersion'] = undefined;
  /**
   * @member {Date} systemDateTime
   */
  exports.prototype['systemDateTime'] = undefined;
  /**
   * @member {module:model/ModelObject} timeZone
   */
  exports.prototype['timeZone'] = undefined;



  return exports;
}));


