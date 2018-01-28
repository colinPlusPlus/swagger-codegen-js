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
    instance = new CherwellRestApi.RemoveCustomerFromWorkgroupResponse();
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

  describe('RemoveCustomerFromWorkgroupResponse', function() {
    it('should create an instance of RemoveCustomerFromWorkgroupResponse', function() {
      // uncomment below and update the code to test RemoveCustomerFromWorkgroupResponse
      //var instance = new CherwellRestApi.RemoveCustomerFromWorkgroupResponse();
      //expect(instance).to.be.a(CherwellRestApi.RemoveCustomerFromWorkgroupResponse);
    });

    it('should have the property workgroupId (base name: "workgroupId")', function() {
      // uncomment below and update the code to test the property workgroupId
      //var instance = new CherwellRestApi.RemoveCustomerFromWorkgroupResponse();
      //expect(instance).to.be();
    });

    it('should have the property customerRecordId (base name: "customerRecordId")', function() {
      // uncomment below and update the code to test the property customerRecordId
      //var instance = new CherwellRestApi.RemoveCustomerFromWorkgroupResponse();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "errorCode")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instance = new CherwellRestApi.RemoveCustomerFromWorkgroupResponse();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instance = new CherwellRestApi.RemoveCustomerFromWorkgroupResponse();
      //expect(instance).to.be();
    });

    it('should have the property hasError (base name: "hasError")', function() {
      // uncomment below and update the code to test the property hasError
      //var instance = new CherwellRestApi.RemoveCustomerFromWorkgroupResponse();
      //expect(instance).to.be();
    });

  });

}));
