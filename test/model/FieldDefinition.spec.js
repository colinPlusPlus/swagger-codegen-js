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
    instance = new CherwellRestApi.FieldDefinition();
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

  describe('FieldDefinition', function() {
    it('should create an instance of FieldDefinition', function() {
      // uncomment below and update the code to test FieldDefinition
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be.a(CherwellRestApi.FieldDefinition);
    });

    it('should have the property autoFill (base name: "autoFill")', function() {
      // uncomment below and update the code to test the property autoFill
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property calculated (base name: "calculated")', function() {
      // uncomment below and update the code to test the property calculated
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property decimalDigits (base name: "decimalDigits")', function() {
      // uncomment below and update the code to test the property decimalDigits
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property fieldId (base name: "fieldId")', function() {
      // uncomment below and update the code to test the property fieldId
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property hasDate (base name: "hasDate")', function() {
      // uncomment below and update the code to test the property hasDate
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property hasTime (base name: "hasTime")', function() {
      // uncomment below and update the code to test the property hasTime
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property isFullTextSearchable (base name: "isFullTextSearchable")', function() {
      // uncomment below and update the code to test the property isFullTextSearchable
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property maximumSize (base name: "maximumSize")', function() {
      // uncomment below and update the code to test the property maximumSize
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property readOnly (base name: "readOnly")', function() {
      // uncomment below and update the code to test the property readOnly
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property typeLocalized (base name: "typeLocalized")', function() {
      // uncomment below and update the code to test the property typeLocalized
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property validated (base name: "validated")', function() {
      // uncomment below and update the code to test the property validated
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property wholeDigits (base name: "wholeDigits")', function() {
      // uncomment below and update the code to test the property wholeDigits
      //var instance = new CherwellRestApi.FieldDefinition();
      //expect(instance).to.be();
    });

  });

}));
