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
    instance = new CherwellRestApi.ReadRequest();
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

  describe('ReadRequest', function() {
    it('should create an instance of ReadRequest', function() {
      // uncomment below and update the code to test ReadRequest
      //var instance = new CherwellRestApi.ReadRequest();
      //expect(instance).to.be.a(CherwellRestApi.ReadRequest);
    });

    it('should have the property busObId (base name: "busObId")', function() {
      // uncomment below and update the code to test the property busObId
      //var instance = new CherwellRestApi.ReadRequest();
      //expect(instance).to.be();
    });

    it('should have the property busObPublicId (base name: "busObPublicId")', function() {
      // uncomment below and update the code to test the property busObPublicId
      //var instance = new CherwellRestApi.ReadRequest();
      //expect(instance).to.be();
    });

    it('should have the property busObRecId (base name: "busObRecId")', function() {
      // uncomment below and update the code to test the property busObRecId
      //var instance = new CherwellRestApi.ReadRequest();
      //expect(instance).to.be();
    });

  });

}));
