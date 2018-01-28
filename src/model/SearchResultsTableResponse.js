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
    define(['ApiClient', 'model/Field', 'model/SearchResultsRow', 'model/SortInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Field'), require('./SearchResultsRow'), require('./SortInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.SearchResultsTableResponse = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.Field, root.CherwellRestApi.SearchResultsRow, root.CherwellRestApi.SortInfo);
  }
}(this, function(ApiClient, Field, SearchResultsRow, SortInfo) {
  'use strict';




  /**
   * The SearchResultsTableResponse model module.
   * @module model/SearchResultsTableResponse
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>SearchResultsTableResponse</code>.
   * @alias module:model/SearchResultsTableResponse
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SearchResultsTableResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResultsTableResponse} obj Optional instance to populate.
   * @return {module:model/SearchResultsTableResponse} The populated <code>SearchResultsTableResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('columns')) {
        obj['columns'] = ApiClient.convertToType(data['columns'], [Field]);
      }
      if (data.hasOwnProperty('rows')) {
        obj['rows'] = ApiClient.convertToType(data['rows'], [SearchResultsRow]);
      }
      if (data.hasOwnProperty('sorting')) {
        obj['sorting'] = ApiClient.convertToType(data['sorting'], [SortInfo]);
      }
      if (data.hasOwnProperty('totalRows')) {
        obj['totalRows'] = ApiClient.convertToType(data['totalRows'], 'Number');
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
   * @member {Array.<module:model/Field>} columns
   */
  exports.prototype['columns'] = undefined;
  /**
   * @member {Array.<module:model/SearchResultsRow>} rows
   */
  exports.prototype['rows'] = undefined;
  /**
   * @member {Array.<module:model/SortInfo>} sorting
   */
  exports.prototype['sorting'] = undefined;
  /**
   * @member {Number} totalRows
   */
  exports.prototype['totalRows'] = undefined;
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


