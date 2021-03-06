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
    define(['ApiClient', 'model/FieldTemplateItem', 'model/Link'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FieldTemplateItem'), require('./Link'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.SearchResultsRow = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.FieldTemplateItem, root.CherwellRestApi.Link);
  }
}(this, function(ApiClient, FieldTemplateItem, Link) {
  'use strict';




  /**
   * The SearchResultsRow model module.
   * @module model/SearchResultsRow
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>SearchResultsRow</code>.
   * @alias module:model/SearchResultsRow
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SearchResultsRow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResultsRow} obj Optional instance to populate.
   * @return {module:model/SearchResultsRow} The populated <code>SearchResultsRow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('busObId')) {
        obj['busObId'] = ApiClient.convertToType(data['busObId'], 'String');
      }
      if (data.hasOwnProperty('busObRecId')) {
        obj['busObRecId'] = ApiClient.convertToType(data['busObRecId'], 'String');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [Link]);
      }
      if (data.hasOwnProperty('publicId')) {
        obj['publicId'] = ApiClient.convertToType(data['publicId'], 'String');
      }
      if (data.hasOwnProperty('rowColor')) {
        obj['rowColor'] = ApiClient.convertToType(data['rowColor'], 'String');
      }
      if (data.hasOwnProperty('searchResultsFieldValues')) {
        obj['searchResultsFieldValues'] = ApiClient.convertToType(data['searchResultsFieldValues'], [FieldTemplateItem]);
      }
    }
    return obj;
  }

  /**
   * @member {String} busObId
   */
  exports.prototype['busObId'] = undefined;
  /**
   * @member {String} busObRecId
   */
  exports.prototype['busObRecId'] = undefined;
  /**
   * @member {Array.<module:model/Link>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {String} publicId
   */
  exports.prototype['publicId'] = undefined;
  /**
   * @member {String} rowColor
   */
  exports.prototype['rowColor'] = undefined;
  /**
   * @member {Array.<module:model/FieldTemplateItem>} searchResultsFieldValues
   */
  exports.prototype['searchResultsFieldValues'] = undefined;



  return exports;
}));


