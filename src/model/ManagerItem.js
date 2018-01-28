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
    define(['ApiClient', 'model/Link'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Link'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.ManagerItem = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.Link);
  }
}(this, function(ApiClient, Link) {
  'use strict';




  /**
   * The ManagerItem model module.
   * @module model/ManagerItem
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>ManagerItem</code>.
   * @alias module:model/ManagerItem
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>ManagerItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManagerItem} obj Optional instance to populate.
   * @return {module:model/ManagerItem} The populated <code>ManagerItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('association')) {
        obj['association'] = ApiClient.convertToType(data['association'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('galleryImage')) {
        obj['galleryImage'] = ApiClient.convertToType(data['galleryImage'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [Link]);
      }
      if (data.hasOwnProperty('localizedScopeName')) {
        obj['localizedScopeName'] = ApiClient.convertToType(data['localizedScopeName'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parentFolder')) {
        obj['parentFolder'] = ApiClient.convertToType(data['parentFolder'], 'String');
      }
      if (data.hasOwnProperty('parentIsScopeFolder')) {
        obj['parentIsScopeFolder'] = ApiClient.convertToType(data['parentIsScopeFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('scopeOwner')) {
        obj['scopeOwner'] = ApiClient.convertToType(data['scopeOwner'], 'String');
      }
      if (data.hasOwnProperty('standInKey')) {
        obj['standInKey'] = ApiClient.convertToType(data['standInKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} association
   */
  exports.prototype['association'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {String} galleryImage
   */
  exports.prototype['galleryImage'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<module:model/Link>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {String} localizedScopeName
   */
  exports.prototype['localizedScopeName'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} parentFolder
   */
  exports.prototype['parentFolder'] = undefined;
  /**
   * @member {Boolean} parentIsScopeFolder
   */
  exports.prototype['parentIsScopeFolder'] = undefined;
  /**
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * @member {String} scopeOwner
   */
  exports.prototype['scopeOwner'] = undefined;
  /**
   * @member {String} standInKey
   */
  exports.prototype['standInKey'] = undefined;



  return exports;
}));


