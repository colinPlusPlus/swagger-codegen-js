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
    instance = new CherwellRestApi.PromptValue();
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

  describe('PromptValue', function() {
    it('should create an instance of PromptValue', function() {
      // uncomment below and update the code to test PromptValue
      //var instance = new CherwellRestApi.PromptValue();
      //expect(instance).to.be.a(CherwellRestApi.PromptValue);
    });

    it('should have the property busObId (base name: "busObId")', function() {
      // uncomment below and update the code to test the property busObId
      //var instance = new CherwellRestApi.PromptValue();
      //expect(instance).to.be();
    });

    it('should have the property collectionStoreEntireRow (base name: "collectionStoreEntireRow")', function() {
      // uncomment below and update the code to test the property collectionStoreEntireRow
      //var instance = new CherwellRestApi.PromptValue();
      //expect(instance).to.be();
    });

    it('should have the property collectionValueField (base name: "collectionValueField")', function() {
      // uncomment below and update the code to test the property collectionValueField
      //var instance = new CherwellRestApi.PromptValue();
      //expect(instance).to.be();
    });

    it('should have the property fieldId (base name: "fieldId")', function() {
      // uncomment below and update the code to test the property fieldId
      //var instance = new CherwellRestApi.PromptValue();
      //expect(instance).to.be();
    });

    it('should have the property listReturnFieldId (base name: "listReturnFieldId")', function() {
      // uncomment below and update the code to test the property listReturnFieldId
      //var instance = new CherwellRestApi.PromptValue();
      //expect(instance).to.be();
    });

    it('should have the property promptId (base name: "promptId")', function() {
      // uncomment below and update the code to test the property promptId
      //var instance = new CherwellRestApi.PromptValue();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new CherwellRestApi.PromptValue();
      //expect(instance).to.be();
    });

    it('should have the property valueIsRecId (base name: "valueIsRecId")', function() {
      // uncomment below and update the code to test the property valueIsRecId
      //var instance = new CherwellRestApi.PromptValue();
      //expect(instance).to.be();
    });

  });

}));
