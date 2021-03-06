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
    define(['ApiClient', 'model/SimpleResultsListItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleResultsListItem'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.SimpleResultsListGroup = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.SimpleResultsListItem);
  }
}(this, function(ApiClient, SimpleResultsListItem) {
  'use strict';




  /**
   * The SimpleResultsListGroup model module.
   * @module model/SimpleResultsListGroup
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>SimpleResultsListGroup</code>.
   * @alias module:model/SimpleResultsListGroup
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>SimpleResultsListGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimpleResultsListGroup} obj Optional instance to populate.
   * @return {module:model/SimpleResultsListGroup} The populated <code>SimpleResultsListGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isBusObTarget')) {
        obj['isBusObTarget'] = ApiClient.convertToType(data['isBusObTarget'], 'Boolean');
      }
      if (data.hasOwnProperty('simpleResultsListItems')) {
        obj['simpleResultsListItems'] = ApiClient.convertToType(data['simpleResultsListItems'], [SimpleResultsListItem]);
      }
      if (data.hasOwnProperty('subTitle')) {
        obj['subTitle'] = ApiClient.convertToType(data['subTitle'], 'String');
      }
      if (data.hasOwnProperty('targetId')) {
        obj['targetId'] = ApiClient.convertToType(data['targetId'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
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
   * @member {Boolean} isBusObTarget
   */
  exports.prototype['isBusObTarget'] = undefined;
  /**
   * @member {Array.<module:model/SimpleResultsListItem>} simpleResultsListItems
   */
  exports.prototype['simpleResultsListItems'] = undefined;
  /**
   * @member {String} subTitle
   */
  exports.prototype['subTitle'] = undefined;
  /**
   * @member {String} targetId
   */
  exports.prototype['targetId'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
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


