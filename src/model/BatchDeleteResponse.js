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
    define(['ApiClient', 'model/DeleteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeleteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.BatchDeleteResponse = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.DeleteResponse);
  }
}(this, function(ApiClient, DeleteResponse) {
  'use strict';




  /**
   * The BatchDeleteResponse model module.
   * @module model/BatchDeleteResponse
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>BatchDeleteResponse</code>.
   * @alias module:model/BatchDeleteResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BatchDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchDeleteResponse} obj Optional instance to populate.
   * @return {module:model/BatchDeleteResponse} The populated <code>BatchDeleteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('responses')) {
        obj['responses'] = ApiClient.convertToType(data['responses'], [DeleteResponse]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DeleteResponse>} responses
   */
  exports.prototype['responses'] = undefined;



  return exports;
}));


