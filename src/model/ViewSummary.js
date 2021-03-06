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
    define(['ApiClient', 'model/ViewSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ViewSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.ViewSummary = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.ViewSummary);
  }
}(this, function(ApiClient, ViewSummary) {
  'use strict';




  /**
   * The ViewSummary model module.
   * @module model/ViewSummary
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>ViewSummary</code>.
   * @alias module:model/ViewSummary
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ViewSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ViewSummary} obj Optional instance to populate.
   * @return {module:model/ViewSummary} The populated <code>ViewSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('groupSummaries')) {
        obj['groupSummaries'] = ApiClient.convertToType(data['groupSummaries'], [ViewSummary]);
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('isPartOfView')) {
        obj['isPartOfView'] = ApiClient.convertToType(data['isPartOfView'], 'Boolean');
      }
      if (data.hasOwnProperty('busObId')) {
        obj['busObId'] = ApiClient.convertToType(data['busObId'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], 'Boolean');
      }
      if (data.hasOwnProperty('lookup')) {
        obj['lookup'] = ApiClient.convertToType(data['lookup'], 'Boolean');
      }
      if (data.hasOwnProperty('major')) {
        obj['major'] = ApiClient.convertToType(data['major'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('supporting')) {
        obj['supporting'] = ApiClient.convertToType(data['supporting'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ViewSummary>} groupSummaries
   */
  exports.prototype['groupSummaries'] = undefined;
  /**
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {Boolean} isPartOfView
   */
  exports.prototype['isPartOfView'] = undefined;
  /**
   * @member {String} busObId
   */
  exports.prototype['busObId'] = undefined;
  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {Boolean} group
   */
  exports.prototype['group'] = undefined;
  /**
   * @member {Boolean} lookup
   */
  exports.prototype['lookup'] = undefined;
  /**
   * @member {Boolean} major
   */
  exports.prototype['major'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} supporting
   */
  exports.prototype['supporting'] = undefined;



  return exports;
}));


