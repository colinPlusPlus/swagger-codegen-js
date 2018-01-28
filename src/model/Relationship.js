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
    define(['ApiClient', 'model/FieldDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FieldDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.Relationship = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.FieldDefinition);
  }
}(this, function(ApiClient, FieldDefinition) {
  'use strict';




  /**
   * The Relationship model module.
   * @module model/Relationship
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>Relationship</code>.
   * @alias module:model/Relationship
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Relationship</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Relationship} obj Optional instance to populate.
   * @return {module:model/Relationship} The populated <code>Relationship</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cardinality')) {
        obj['cardinality'] = ApiClient.convertToType(data['cardinality'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('fieldDefinitions')) {
        obj['fieldDefinitions'] = ApiClient.convertToType(data['fieldDefinitions'], [FieldDefinition]);
      }
      if (data.hasOwnProperty('relationshipId')) {
        obj['relationshipId'] = ApiClient.convertToType(data['relationshipId'], 'String');
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} cardinality
   */
  exports.prototype['cardinality'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {Array.<module:model/FieldDefinition>} fieldDefinitions
   */
  exports.prototype['fieldDefinitions'] = undefined;
  /**
   * @member {String} relationshipId
   */
  exports.prototype['relationshipId'] = undefined;
  /**
   * @member {String} target
   */
  exports.prototype['target'] = undefined;



  return exports;
}));


