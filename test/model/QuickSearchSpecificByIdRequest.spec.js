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
    instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
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

  describe('QuickSearchSpecificByIdRequest', function() {
    it('should create an instance of QuickSearchSpecificByIdRequest', function() {
      // uncomment below and update the code to test QuickSearchSpecificByIdRequest
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be.a(CherwellRestApi.QuickSearchSpecificByIdRequest);
    });

    it('should have the property busObIds (base name: "busObIds")', function() {
      // uncomment below and update the code to test the property busObIds
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property standIn (base name: "standIn")', function() {
      // uncomment below and update the code to test the property standIn
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ascending (base name: "ascending")', function() {
      // uncomment below and update the code to test the property ascending
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property nonFinalState (base name: "nonFinalState")', function() {
      // uncomment below and update the code to test the property nonFinalState
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property searchAnyWords (base name: "searchAnyWords")', function() {
      // uncomment below and update the code to test the property searchAnyWords
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property searchAttachments (base name: "searchAttachments")', function() {
      // uncomment below and update the code to test the property searchAttachments
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property searchRelated (base name: "searchRelated")', function() {
      // uncomment below and update the code to test the property searchRelated
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property searchText (base name: "searchText")', function() {
      // uncomment below and update the code to test the property searchText
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property selectedChangedLimit (base name: "selectedChangedLimit")', function() {
      // uncomment below and update the code to test the property selectedChangedLimit
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property selectedSortByFieldId (base name: "selectedSortByFieldId")', function() {
      // uncomment below and update the code to test the property selectedSortByFieldId
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property useSortBy (base name: "useSortBy")', function() {
      // uncomment below and update the code to test the property useSortBy
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property specificSearchTargetId (base name: "specificSearchTargetId")', function() {
      // uncomment below and update the code to test the property specificSearchTargetId
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property isBusObTarget (base name: "isBusObTarget")', function() {
      // uncomment below and update the code to test the property isBusObTarget
      //var instance = new CherwellRestApi.QuickSearchSpecificByIdRequest();
      //expect(instance).to.be();
    });

  });

}));
