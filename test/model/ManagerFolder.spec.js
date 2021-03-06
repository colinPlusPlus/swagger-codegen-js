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
    instance = new CherwellRestApi.ManagerFolder();
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

  describe('ManagerFolder', function() {
    it('should create an instance of ManagerFolder', function() {
      // uncomment below and update the code to test ManagerFolder
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be.a(CherwellRestApi.ManagerFolder);
    });

    it('should have the property association (base name: "association")', function() {
      // uncomment below and update the code to test the property association
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be();
    });

    it('should have the property childFolders (base name: "childFolders")', function() {
      // uncomment below and update the code to test the property childFolders
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be();
    });

    it('should have the property childItems (base name: "childItems")', function() {
      // uncomment below and update the code to test the property childItems
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be();
    });

    it('should have the property localizedScopeName (base name: "localizedScopeName")', function() {
      // uncomment below and update the code to test the property localizedScopeName
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be();
    });

    it('should have the property scopeOwner (base name: "scopeOwner")', function() {
      // uncomment below and update the code to test the property scopeOwner
      //var instance = new CherwellRestApi.ManagerFolder();
      //expect(instance).to.be();
    });

  });

}));
