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
    instance = new CherwellRestApi.FormsApi();
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

  describe('FormsApi', function() {
    describe('formsGetMobileFormForBusObByIdAndPublicIdV1', function() {
      it('should call formsGetMobileFormForBusObByIdAndPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test formsGetMobileFormForBusObByIdAndPublicIdV1
        //instance.formsGetMobileFormForBusObByIdAndPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('formsGetMobileFormForBusObByIdAndRecIdV1', function() {
      it('should call formsGetMobileFormForBusObByIdAndRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test formsGetMobileFormForBusObByIdAndRecIdV1
        //instance.formsGetMobileFormForBusObByIdAndRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('formsGetMobileFormForBusObByNameAndPublicIdV1', function() {
      it('should call formsGetMobileFormForBusObByNameAndPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test formsGetMobileFormForBusObByNameAndPublicIdV1
        //instance.formsGetMobileFormForBusObByNameAndPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('formsGetMobileFormForBusObByNameAndRecIdV1', function() {
      it('should call formsGetMobileFormForBusObByNameAndRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test formsGetMobileFormForBusObByNameAndRecIdV1
        //instance.formsGetMobileFormForBusObByNameAndRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
