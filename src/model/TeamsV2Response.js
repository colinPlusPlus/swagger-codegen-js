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
    define(['ApiClient', 'model/Team'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Team'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.TeamsV2Response = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.Team);
  }
}(this, function(ApiClient, Team) {
  'use strict';




  /**
   * The TeamsV2Response model module.
   * @module model/TeamsV2Response
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>TeamsV2Response</code>.
   * @alias module:model/TeamsV2Response
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>TeamsV2Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamsV2Response} obj Optional instance to populate.
   * @return {module:model/TeamsV2Response} The populated <code>TeamsV2Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('teams')) {
        obj['teams'] = ApiClient.convertToType(data['teams'], [Team]);
      }
      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
      }
      if (data.hasOwnProperty('errorMessage')) {
        obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
      }
      if (data.hasOwnProperty('hasError')) {
        obj['hasError'] = ApiClient.convertToType(data['hasError'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Team>} teams
   */
  exports.prototype['teams'] = undefined;
  /**
   * @member {String} errorCode
   */
  exports.prototype['errorCode'] = undefined;
  /**
   * @member {String} errorMessage
   */
  exports.prototype['errorMessage'] = undefined;
  /**
   * @member {Boolean} hasError
   */
  exports.prototype['hasError'] = undefined;



  return exports;
}));


