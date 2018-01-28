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
    instance = new CherwellRestApi.SearchItem();
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

  describe('SearchItem', function() {
    it('should create an instance of SearchItem', function() {
      // uncomment below and update the code to test SearchItem
      //var instance = new CherwellRestApi.SearchItem();
      //expect(instance).to.be.a(CherwellRestApi.SearchItem);
    });

    it('should have the property association (base name: "association")', function() {
      // uncomment below and update the code to test the property association
      //var instance = new CherwellRestApi.SearchItem();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new CherwellRestApi.SearchItem();
      //expect(instance).to.be();
    });

    it('should have the property localizedScopeName (base name: "localizedScopeName")', function() {
      // uncomment below and update the code to test the property localizedScopeName
      //var instance = new CherwellRestApi.SearchItem();
      //expect(instance).to.be();
    });

    it('should have the property parentFolderId (base name: "parentFolderId")', function() {
      // uncomment below and update the code to test the property parentFolderId
      //var instance = new CherwellRestApi.SearchItem();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new CherwellRestApi.SearchItem();
      //expect(instance).to.be();
    });

    it('should have the property scopeOwner (base name: "scopeOwner")', function() {
      // uncomment below and update the code to test the property scopeOwner
      //var instance = new CherwellRestApi.SearchItem();
      //expect(instance).to.be();
    });

    it('should have the property searchId (base name: "searchId")', function() {
      // uncomment below and update the code to test the property searchId
      //var instance = new CherwellRestApi.SearchItem();
      //expect(instance).to.be();
    });

    it('should have the property searchName (base name: "searchName")', function() {
      // uncomment below and update the code to test the property searchName
      //var instance = new CherwellRestApi.SearchItem();
      //expect(instance).to.be();
    });

  });

}));
