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
    instance = new CherwellRestApi.TemplateRequest();
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

  describe('TemplateRequest', function() {
    it('should create an instance of TemplateRequest', function() {
      // uncomment below and update the code to test TemplateRequest
      //var instance = new CherwellRestApi.TemplateRequest();
      //expect(instance).to.be.a(CherwellRestApi.TemplateRequest);
    });

    it('should have the property busObId (base name: "busObId")', function() {
      // uncomment below and update the code to test the property busObId
      //var instance = new CherwellRestApi.TemplateRequest();
      //expect(instance).to.be();
    });

    it('should have the property fieldNames (base name: "fieldNames")', function() {
      // uncomment below and update the code to test the property fieldNames
      //var instance = new CherwellRestApi.TemplateRequest();
      //expect(instance).to.be();
    });

    it('should have the property fieldIds (base name: "fieldIds")', function() {
      // uncomment below and update the code to test the property fieldIds
      //var instance = new CherwellRestApi.TemplateRequest();
      //expect(instance).to.be();
    });

    it('should have the property includeAll (base name: "includeAll")', function() {
      // uncomment below and update the code to test the property includeAll
      //var instance = new CherwellRestApi.TemplateRequest();
      //expect(instance).to.be();
    });

    it('should have the property includeRequired (base name: "includeRequired")', function() {
      // uncomment below and update the code to test the property includeRequired
      //var instance = new CherwellRestApi.TemplateRequest();
      //expect(instance).to.be();
    });

  });

}));
