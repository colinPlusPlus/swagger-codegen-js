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
    instance = new CherwellRestApi.SaveGalleryImageRequest();
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

  describe('SaveGalleryImageRequest', function() {
    it('should create an instance of SaveGalleryImageRequest', function() {
      // uncomment below and update the code to test SaveGalleryImageRequest
      //var instance = new CherwellRestApi.SaveGalleryImageRequest();
      //expect(instance).to.be.a(CherwellRestApi.SaveGalleryImageRequest);
    });

    it('should have the property base64EncodedImageData (base name: "base64EncodedImageData")', function() {
      // uncomment below and update the code to test the property base64EncodedImageData
      //var instance = new CherwellRestApi.SaveGalleryImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CherwellRestApi.SaveGalleryImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property folder (base name: "folder")', function() {
      // uncomment below and update the code to test the property folder
      //var instance = new CherwellRestApi.SaveGalleryImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property imageType (base name: "imageType")', function() {
      // uncomment below and update the code to test the property imageType
      //var instance = new CherwellRestApi.SaveGalleryImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CherwellRestApi.SaveGalleryImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new CherwellRestApi.SaveGalleryImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property scopeOwner (base name: "scopeOwner")', function() {
      // uncomment below and update the code to test the property scopeOwner
      //var instance = new CherwellRestApi.SaveGalleryImageRequest();
      //expect(instance).to.be();
    });

    it('should have the property standInKey (base name: "standInKey")', function() {
      // uncomment below and update the code to test the property standInKey
      //var instance = new CherwellRestApi.SaveGalleryImageRequest();
      //expect(instance).to.be();
    });

  });

}));