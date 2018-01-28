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
    define(['ApiClient', 'model/Field', 'model/Link', 'model/Prompt', 'model/ReadResponse', 'model/SimpleResultsList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Field'), require('./Link'), require('./Prompt'), require('./ReadResponse'), require('./SimpleResultsList'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.SearchResultsResponse = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.Field, root.CherwellRestApi.Link, root.CherwellRestApi.Prompt, root.CherwellRestApi.ReadResponse, root.CherwellRestApi.SimpleResultsList);
  }
}(this, function(ApiClient, Field, Link, Prompt, ReadResponse, SimpleResultsList) {
  'use strict';




  /**
   * The SearchResultsResponse model module.
   * @module model/SearchResultsResponse
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>SearchResultsResponse</code>.
   * @alias module:model/SearchResultsResponse
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>SearchResultsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResultsResponse} obj Optional instance to populate.
   * @return {module:model/SearchResultsResponse} The populated <code>SearchResultsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('businessObjects')) {
        obj['businessObjects'] = ApiClient.convertToType(data['businessObjects'], [ReadResponse]);
      }
      if (data.hasOwnProperty('hasPrompts')) {
        obj['hasPrompts'] = ApiClient.convertToType(data['hasPrompts'], 'Boolean');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [Link]);
      }
      if (data.hasOwnProperty('prompts')) {
        obj['prompts'] = ApiClient.convertToType(data['prompts'], [Prompt]);
      }
      if (data.hasOwnProperty('searchResultsFields')) {
        obj['searchResultsFields'] = ApiClient.convertToType(data['searchResultsFields'], [Field]);
      }
      if (data.hasOwnProperty('simpleResults')) {
        obj['simpleResults'] = SimpleResultsList.constructFromObject(data['simpleResults']);
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
   * @member {Array.<module:model/ReadResponse>} businessObjects
   */
  exports.prototype['businessObjects'] = undefined;
  /**
   * @member {Boolean} hasPrompts
   */
  exports.prototype['hasPrompts'] = undefined;
  /**
   * @member {Array.<module:model/Link>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {Array.<module:model/Prompt>} prompts
   */
  exports.prototype['prompts'] = undefined;
  /**
   * @member {Array.<module:model/Field>} searchResultsFields
   */
  exports.prototype['searchResultsFields'] = undefined;
  /**
   * @member {module:model/SimpleResultsList} simpleResults
   */
  exports.prototype['simpleResults'] = undefined;
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

