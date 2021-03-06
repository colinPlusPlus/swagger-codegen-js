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
    instance = new CherwellRestApi.Role();
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

  describe('Role', function() {
    it('should create an instance of Role', function() {
      // uncomment below and update the code to test Role
      //var instance = new CherwellRestApi.Role();
      //expect(instance).to.be.a(CherwellRestApi.Role);
    });

    it('should have the property browserClientCustomViewId (base name: "browserClientCustomViewId")', function() {
      // uncomment below and update the code to test the property browserClientCustomViewId
      //var instance = new CherwellRestApi.Role();
      //expect(instance).to.be();
    });

    it('should have the property businessObjectExcludeList (base name: "businessObjectExcludeList")', function() {
      // uncomment below and update the code to test the property businessObjectExcludeList
      //var instance = new CherwellRestApi.Role();
      //expect(instance).to.be();
    });

    it('should have the property culture (base name: "culture")', function() {
      // uncomment below and update the code to test the property culture
      //var instance = new CherwellRestApi.Role();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CherwellRestApi.Role();
      //expect(instance).to.be();
    });

    it('should have the property mobileClientCustomViewId (base name: "mobileClientCustomViewId")', function() {
      // uncomment below and update the code to test the property mobileClientCustomViewId
      //var instance = new CherwellRestApi.Role();
      //expect(instance).to.be();
    });

    it('should have the property primaryBusObId (base name: "primaryBusObId")', function() {
      // uncomment below and update the code to test the property primaryBusObId
      //var instance = new CherwellRestApi.Role();
      //expect(instance).to.be();
    });

    it('should have the property roleId (base name: "roleId")', function() {
      // uncomment below and update the code to test the property roleId
      //var instance = new CherwellRestApi.Role();
      //expect(instance).to.be();
    });

    it('should have the property roleName (base name: "roleName")', function() {
      // uncomment below and update the code to test the property roleName
      //var instance = new CherwellRestApi.Role();
      //expect(instance).to.be();
    });

    it('should have the property smartClientCustomViewId (base name: "smartClientCustomViewId")', function() {
      // uncomment below and update the code to test the property smartClientCustomViewId
      //var instance = new CherwellRestApi.Role();
      //expect(instance).to.be();
    });

  });

}));
