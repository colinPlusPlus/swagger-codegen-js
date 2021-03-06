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
    define(['ApiClient', 'model/ChangedLimit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChangedLimit'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.QuickSearchSpecificByIdRequest = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.ChangedLimit);
  }
}(this, function(ApiClient, ChangedLimit) {
  'use strict';




  /**
   * The QuickSearchSpecificByIdRequest model module.
   * @module model/QuickSearchSpecificByIdRequest
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>QuickSearchSpecificByIdRequest</code>.
   * @alias module:model/QuickSearchSpecificByIdRequest
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>QuickSearchSpecificByIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuickSearchSpecificByIdRequest} obj Optional instance to populate.
   * @return {module:model/QuickSearchSpecificByIdRequest} The populated <code>QuickSearchSpecificByIdRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('busObIds')) {
        obj['busObIds'] = ApiClient.convertToType(data['busObIds'], ['String']);
      }
      if (data.hasOwnProperty('standIn')) {
        obj['standIn'] = ApiClient.convertToType(data['standIn'], 'String');
      }
      if (data.hasOwnProperty('ascending')) {
        obj['ascending'] = ApiClient.convertToType(data['ascending'], 'Boolean');
      }
      if (data.hasOwnProperty('nonFinalState')) {
        obj['nonFinalState'] = ApiClient.convertToType(data['nonFinalState'], 'Boolean');
      }
      if (data.hasOwnProperty('searchAnyWords')) {
        obj['searchAnyWords'] = ApiClient.convertToType(data['searchAnyWords'], 'Boolean');
      }
      if (data.hasOwnProperty('searchAttachments')) {
        obj['searchAttachments'] = ApiClient.convertToType(data['searchAttachments'], 'Boolean');
      }
      if (data.hasOwnProperty('searchRelated')) {
        obj['searchRelated'] = ApiClient.convertToType(data['searchRelated'], 'Boolean');
      }
      if (data.hasOwnProperty('searchText')) {
        obj['searchText'] = ApiClient.convertToType(data['searchText'], 'String');
      }
      if (data.hasOwnProperty('selectedChangedLimit')) {
        obj['selectedChangedLimit'] = ChangedLimit.constructFromObject(data['selectedChangedLimit']);
      }
      if (data.hasOwnProperty('selectedSortByFieldId')) {
        obj['selectedSortByFieldId'] = ApiClient.convertToType(data['selectedSortByFieldId'], 'String');
      }
      if (data.hasOwnProperty('useSortBy')) {
        obj['useSortBy'] = ApiClient.convertToType(data['useSortBy'], 'Boolean');
      }
      if (data.hasOwnProperty('specificSearchTargetId')) {
        obj['specificSearchTargetId'] = ApiClient.convertToType(data['specificSearchTargetId'], 'String');
      }
      if (data.hasOwnProperty('isBusObTarget')) {
        obj['isBusObTarget'] = ApiClient.convertToType(data['isBusObTarget'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} busObIds
   */
  exports.prototype['busObIds'] = undefined;
  /**
   * @member {String} standIn
   */
  exports.prototype['standIn'] = undefined;
  /**
   * @member {Boolean} ascending
   */
  exports.prototype['ascending'] = undefined;
  /**
   * @member {Boolean} nonFinalState
   */
  exports.prototype['nonFinalState'] = undefined;
  /**
   * @member {Boolean} searchAnyWords
   */
  exports.prototype['searchAnyWords'] = undefined;
  /**
   * @member {Boolean} searchAttachments
   */
  exports.prototype['searchAttachments'] = undefined;
  /**
   * @member {Boolean} searchRelated
   */
  exports.prototype['searchRelated'] = undefined;
  /**
   * @member {String} searchText
   */
  exports.prototype['searchText'] = undefined;
  /**
   * @member {module:model/ChangedLimit} selectedChangedLimit
   */
  exports.prototype['selectedChangedLimit'] = undefined;
  /**
   * @member {String} selectedSortByFieldId
   */
  exports.prototype['selectedSortByFieldId'] = undefined;
  /**
   * @member {Boolean} useSortBy
   */
  exports.prototype['useSortBy'] = undefined;
  /**
   * @member {String} specificSearchTargetId
   */
  exports.prototype['specificSearchTargetId'] = undefined;
  /**
   * @member {Boolean} isBusObTarget
   */
  exports.prototype['isBusObTarget'] = undefined;



  return exports;
}));


