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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.SaveBusObAttachmentRequest = factory(root.CherwellRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SaveBusObAttachmentRequest model module.
   * @module model/SaveBusObAttachmentRequest
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>SaveBusObAttachmentRequest</code>.
   * @alias module:model/SaveBusObAttachmentRequest
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>SaveBusObAttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SaveBusObAttachmentRequest} obj Optional instance to populate.
   * @return {module:model/SaveBusObAttachmentRequest} The populated <code>SaveBusObAttachmentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attachBusObId')) {
        obj['attachBusObId'] = ApiClient.convertToType(data['attachBusObId'], 'String');
      }
      if (data.hasOwnProperty('attachBusObName')) {
        obj['attachBusObName'] = ApiClient.convertToType(data['attachBusObName'], 'String');
      }
      if (data.hasOwnProperty('attachBusObPublicId')) {
        obj['attachBusObPublicId'] = ApiClient.convertToType(data['attachBusObPublicId'], 'String');
      }
      if (data.hasOwnProperty('attachBusObRecId')) {
        obj['attachBusObRecId'] = ApiClient.convertToType(data['attachBusObRecId'], 'String');
      }
      if (data.hasOwnProperty('busObId')) {
        obj['busObId'] = ApiClient.convertToType(data['busObId'], 'String');
      }
      if (data.hasOwnProperty('busObName')) {
        obj['busObName'] = ApiClient.convertToType(data['busObName'], 'String');
      }
      if (data.hasOwnProperty('busObPublicId')) {
        obj['busObPublicId'] = ApiClient.convertToType(data['busObPublicId'], 'String');
      }
      if (data.hasOwnProperty('busObRecId')) {
        obj['busObRecId'] = ApiClient.convertToType(data['busObRecId'], 'String');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('includeLinks')) {
        obj['includeLinks'] = ApiClient.convertToType(data['includeLinks'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} attachBusObId
   */
  exports.prototype['attachBusObId'] = undefined;
  /**
   * @member {String} attachBusObName
   */
  exports.prototype['attachBusObName'] = undefined;
  /**
   * @member {String} attachBusObPublicId
   */
  exports.prototype['attachBusObPublicId'] = undefined;
  /**
   * @member {String} attachBusObRecId
   */
  exports.prototype['attachBusObRecId'] = undefined;
  /**
   * @member {String} busObId
   */
  exports.prototype['busObId'] = undefined;
  /**
   * @member {String} busObName
   */
  exports.prototype['busObName'] = undefined;
  /**
   * @member {String} busObPublicId
   */
  exports.prototype['busObPublicId'] = undefined;
  /**
   * @member {String} busObRecId
   */
  exports.prototype['busObRecId'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {Boolean} includeLinks
   */
  exports.prototype['includeLinks'] = undefined;



  return exports;
}));


