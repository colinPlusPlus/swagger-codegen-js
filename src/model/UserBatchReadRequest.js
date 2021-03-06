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
    define(['ApiClient', 'model/UserReadRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserReadRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.UserBatchReadRequest = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.UserReadRequest);
  }
}(this, function(ApiClient, UserReadRequest) {
  'use strict';




  /**
   * The UserBatchReadRequest model module.
   * @module model/UserBatchReadRequest
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>UserBatchReadRequest</code>.
   * @alias module:model/UserBatchReadRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserBatchReadRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserBatchReadRequest} obj Optional instance to populate.
   * @return {module:model/UserBatchReadRequest} The populated <code>UserBatchReadRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('readRequests')) {
        obj['readRequests'] = ApiClient.convertToType(data['readRequests'], [UserReadRequest]);
      }
      if (data.hasOwnProperty('stopOnError')) {
        obj['stopOnError'] = ApiClient.convertToType(data['stopOnError'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/UserReadRequest>} readRequests
   */
  exports.prototype['readRequests'] = undefined;
  /**
   * @member {Boolean} stopOnError
   */
  exports.prototype['stopOnError'] = undefined;



  return exports;
}));


