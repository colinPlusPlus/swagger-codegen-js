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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CherwellRestApi);
  }
}(this, function(expect, CherwellRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CherwellRestApi.RemoveItemFromQueueResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RemoveItemFromQueueResponse', function() {
    it('should create an instance of RemoveItemFromQueueResponse', function() {
      // uncomment below and update the code to test RemoveItemFromQueueResponse
      //var instance = new CherwellRestApi.RemoveItemFromQueueResponse();
      //expect(instance).to.be.a(CherwellRestApi.RemoveItemFromQueueResponse);
    });

    it('should have the property historyRecId (base name: "historyRecId")', function() {
      // uncomment below and update the code to test the property historyRecId
      //var instance = new CherwellRestApi.RemoveItemFromQueueResponse();
      //expect(instance).to.be();
    });

    it('should have the property historyText (base name: "historyText")', function() {
      // uncomment below and update the code to test the property historyText
      //var instance = new CherwellRestApi.RemoveItemFromQueueResponse();
      //expect(instance).to.be();
    });

    it('should have the property historyTypeId (base name: "historyTypeId")', function() {
      // uncomment below and update the code to test the property historyTypeId
      //var instance = new CherwellRestApi.RemoveItemFromQueueResponse();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "errorCode")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instance = new CherwellRestApi.RemoveItemFromQueueResponse();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instance = new CherwellRestApi.RemoveItemFromQueueResponse();
      //expect(instance).to.be();
    });

    it('should have the property hasError (base name: "hasError")', function() {
      // uncomment below and update the code to test the property hasError
      //var instance = new CherwellRestApi.RemoveItemFromQueueResponse();
      //expect(instance).to.be();
    });

  });

}));
