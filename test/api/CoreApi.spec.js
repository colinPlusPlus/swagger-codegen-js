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
    instance = new CherwellRestApi.CoreApi();
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

  describe('CoreApi', function() {
    describe('coreDeleteGalleryImageByStandInKeyV1', function() {
      it('should call coreDeleteGalleryImageByStandInKeyV1 successfully', function(done) {
        //uncomment below and update the code to test coreDeleteGalleryImageByStandInKeyV1
        //instance.coreDeleteGalleryImageByStandInKeyV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetGalleryImageV1', function() {
      it('should call coreGetGalleryImageV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetGalleryImageV1
        //instance.coreGetGalleryImageV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetGalleryImagesFolderV1', function() {
      it('should call coreGetGalleryImagesFolderV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetGalleryImagesFolderV1
        //instance.coreGetGalleryImagesFolderV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetGalleryImagesScopeOwnerV1', function() {
      it('should call coreGetGalleryImagesScopeOwnerV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetGalleryImagesScopeOwnerV1
        //instance.coreGetGalleryImagesScopeOwnerV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetGalleryImagesScopeV1', function() {
      it('should call coreGetGalleryImagesScopeV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetGalleryImagesScopeV1
        //instance.coreGetGalleryImagesScopeV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetGalleryImagesV1', function() {
      it('should call coreGetGalleryImagesV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetGalleryImagesV1
        //instance.coreGetGalleryImagesV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetStoredValueV1', function() {
      it('should call coreGetStoredValueV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetStoredValueV1
        //instance.coreGetStoredValueV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetStoredValuesFolderV1', function() {
      it('should call coreGetStoredValuesFolderV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetStoredValuesFolderV1
        //instance.coreGetStoredValuesFolderV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetStoredValuesScopeOwnerV1', function() {
      it('should call coreGetStoredValuesScopeOwnerV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetStoredValuesScopeOwnerV1
        //instance.coreGetStoredValuesScopeOwnerV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetStoredValuesScopeV1', function() {
      it('should call coreGetStoredValuesScopeV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetStoredValuesScopeV1
        //instance.coreGetStoredValuesScopeV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetStoredValuesV1', function() {
      it('should call coreGetStoredValuesV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetStoredValuesV1
        //instance.coreGetStoredValuesV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreGetViewsV1', function() {
      it('should call coreGetViewsV1 successfully', function(done) {
        //uncomment below and update the code to test coreGetViewsV1
        //instance.coreGetViewsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreSaveGalleryImageV1', function() {
      it('should call coreSaveGalleryImageV1 successfully', function(done) {
        //uncomment below and update the code to test coreSaveGalleryImageV1
        //instance.coreSaveGalleryImageV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreSaveStoredValueV1', function() {
      it('should call coreSaveStoredValueV1 successfully', function(done) {
        //uncomment below and update the code to test coreSaveStoredValueV1
        //instance.coreSaveStoredValueV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('coreSetCultureV1', function() {
      it('should call coreSetCultureV1 successfully', function(done) {
        //uncomment below and update the code to test coreSetCultureV1
        //instance.coreSetCultureV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
