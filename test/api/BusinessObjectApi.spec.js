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
    instance = new CherwellRestApi.BusinessObjectApi();
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

  describe('BusinessObjectApi', function() {
    describe('businessObjectDeleteBusinessObjectBatchV1', function() {
      it('should call businessObjectDeleteBusinessObjectBatchV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectDeleteBusinessObjectBatchV1
        //instance.businessObjectDeleteBusinessObjectBatchV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectDeleteBusinessObjectByPublicIdV1', function() {
      it('should call businessObjectDeleteBusinessObjectByPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectDeleteBusinessObjectByPublicIdV1
        //instance.businessObjectDeleteBusinessObjectByPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectDeleteBusinessObjectByRecIdV1', function() {
      it('should call businessObjectDeleteBusinessObjectByRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectDeleteBusinessObjectByRecIdV1
        //instance.businessObjectDeleteBusinessObjectByRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectDeleteRelatedBusinessObjectByPublicIdV1', function() {
      it('should call businessObjectDeleteRelatedBusinessObjectByPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectDeleteRelatedBusinessObjectByPublicIdV1
        //instance.businessObjectDeleteRelatedBusinessObjectByPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectDeleteRelatedBusinessObjectByRecIdV1', function() {
      it('should call businessObjectDeleteRelatedBusinessObjectByRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectDeleteRelatedBusinessObjectByRecIdV1
        //instance.businessObjectDeleteRelatedBusinessObjectByRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectFieldValuesLookupV1', function() {
      it('should call businessObjectFieldValuesLookupV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectFieldValuesLookupV1
        //instance.businessObjectFieldValuesLookupV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectAttachmentByAttachmentIdV1', function() {
      it('should call businessObjectGetBusinessObjectAttachmentByAttachmentIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectAttachmentByAttachmentIdV1
        //instance.businessObjectGetBusinessObjectAttachmentByAttachmentIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectAttachmentsByIdAndPublicIdV1', function() {
      it('should call businessObjectGetBusinessObjectAttachmentsByIdAndPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectAttachmentsByIdAndPublicIdV1
        //instance.businessObjectGetBusinessObjectAttachmentsByIdAndPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectAttachmentsByIdAndRecIdV1', function() {
      it('should call businessObjectGetBusinessObjectAttachmentsByIdAndRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectAttachmentsByIdAndRecIdV1
        //instance.businessObjectGetBusinessObjectAttachmentsByIdAndRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectAttachmentsByNameAndPublicIdV1', function() {
      it('should call businessObjectGetBusinessObjectAttachmentsByNameAndPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectAttachmentsByNameAndPublicIdV1
        //instance.businessObjectGetBusinessObjectAttachmentsByNameAndPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectAttachmentsByNameAndRecIdV1', function() {
      it('should call businessObjectGetBusinessObjectAttachmentsByNameAndRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectAttachmentsByNameAndRecIdV1
        //instance.businessObjectGetBusinessObjectAttachmentsByNameAndRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectAttachmentsV1', function() {
      it('should call businessObjectGetBusinessObjectAttachmentsV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectAttachmentsV1
        //instance.businessObjectGetBusinessObjectAttachmentsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectBatchV1', function() {
      it('should call businessObjectGetBusinessObjectBatchV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectBatchV1
        //instance.businessObjectGetBusinessObjectBatchV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectByCacheKeyV1', function() {
      it('should call businessObjectGetBusinessObjectByCacheKeyV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectByCacheKeyV1
        //instance.businessObjectGetBusinessObjectByCacheKeyV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectByPublicIdV1', function() {
      it('should call businessObjectGetBusinessObjectByPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectByPublicIdV1
        //instance.businessObjectGetBusinessObjectByPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectByRecIdV1', function() {
      it('should call businessObjectGetBusinessObjectByRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectByRecIdV1
        //instance.businessObjectGetBusinessObjectByRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectByScanCodeBusObIdV1', function() {
      it('should call businessObjectGetBusinessObjectByScanCodeBusObIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectByScanCodeBusObIdV1
        //instance.businessObjectGetBusinessObjectByScanCodeBusObIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectByScanCodeBusObNameV1', function() {
      it('should call businessObjectGetBusinessObjectByScanCodeBusObNameV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectByScanCodeBusObNameV1
        //instance.businessObjectGetBusinessObjectByScanCodeBusObNameV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectSchemaV1', function() {
      it('should call businessObjectGetBusinessObjectSchemaV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectSchemaV1
        //instance.businessObjectGetBusinessObjectSchemaV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectSummariesV1', function() {
      it('should call businessObjectGetBusinessObjectSummariesV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectSummariesV1
        //instance.businessObjectGetBusinessObjectSummariesV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectSummaryByIdV1', function() {
      it('should call businessObjectGetBusinessObjectSummaryByIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectSummaryByIdV1
        //instance.businessObjectGetBusinessObjectSummaryByIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectSummaryByNameV1', function() {
      it('should call businessObjectGetBusinessObjectSummaryByNameV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectSummaryByNameV1
        //instance.businessObjectGetBusinessObjectSummaryByNameV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetBusinessObjectTemplateV1', function() {
      it('should call businessObjectGetBusinessObjectTemplateV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetBusinessObjectTemplateV1
        //instance.businessObjectGetBusinessObjectTemplateV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetRelatedBusinessObjectByRequestV1', function() {
      it('should call businessObjectGetRelatedBusinessObjectByRequestV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetRelatedBusinessObjectByRequestV1
        //instance.businessObjectGetRelatedBusinessObjectByRequestV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetRelatedBusinessObjectV1', function() {
      it('should call businessObjectGetRelatedBusinessObjectV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetRelatedBusinessObjectV1
        //instance.businessObjectGetRelatedBusinessObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectGetRelatedBusinessObjectWithCustomGridV1', function() {
      it('should call businessObjectGetRelatedBusinessObjectWithCustomGridV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectGetRelatedBusinessObjectWithCustomGridV1
        //instance.businessObjectGetRelatedBusinessObjectWithCustomGridV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectLinkRelatedBusinessObjectByRecIdV1', function() {
      it('should call businessObjectLinkRelatedBusinessObjectByRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectLinkRelatedBusinessObjectByRecIdV1
        //instance.businessObjectLinkRelatedBusinessObjectByRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectRemoveBusinessObjectAttachmentByIdAndPublicIdV1', function() {
      it('should call businessObjectRemoveBusinessObjectAttachmentByIdAndPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectRemoveBusinessObjectAttachmentByIdAndPublicIdV1
        //instance.businessObjectRemoveBusinessObjectAttachmentByIdAndPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectRemoveBusinessObjectAttachmentByIdAndRecIdV1', function() {
      it('should call businessObjectRemoveBusinessObjectAttachmentByIdAndRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectRemoveBusinessObjectAttachmentByIdAndRecIdV1
        //instance.businessObjectRemoveBusinessObjectAttachmentByIdAndRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectRemoveBusinessObjectAttachmentByNameAndPublicIdV1', function() {
      it('should call businessObjectRemoveBusinessObjectAttachmentByNameAndPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectRemoveBusinessObjectAttachmentByNameAndPublicIdV1
        //instance.businessObjectRemoveBusinessObjectAttachmentByNameAndPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectRemoveBusinessObjectAttachmentByNameAndRecIdV1', function() {
      it('should call businessObjectRemoveBusinessObjectAttachmentByNameAndRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectRemoveBusinessObjectAttachmentByNameAndRecIdV1
        //instance.businessObjectRemoveBusinessObjectAttachmentByNameAndRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectSaveBusinessObjectAttachmentBusObV1', function() {
      it('should call businessObjectSaveBusinessObjectAttachmentBusObV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectSaveBusinessObjectAttachmentBusObV1
        //instance.businessObjectSaveBusinessObjectAttachmentBusObV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectSaveBusinessObjectAttachmentLinkV1', function() {
      it('should call businessObjectSaveBusinessObjectAttachmentLinkV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectSaveBusinessObjectAttachmentLinkV1
        //instance.businessObjectSaveBusinessObjectAttachmentLinkV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectSaveBusinessObjectAttachmentUrlV1', function() {
      it('should call businessObjectSaveBusinessObjectAttachmentUrlV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectSaveBusinessObjectAttachmentUrlV1
        //instance.businessObjectSaveBusinessObjectAttachmentUrlV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectSaveBusinessObjectBatchV1', function() {
      it('should call businessObjectSaveBusinessObjectBatchV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectSaveBusinessObjectBatchV1
        //instance.businessObjectSaveBusinessObjectBatchV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectSaveBusinessObjectV1', function() {
      it('should call businessObjectSaveBusinessObjectV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectSaveBusinessObjectV1
        //instance.businessObjectSaveBusinessObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectSaveRelatedBusinessObjectV1', function() {
      it('should call businessObjectSaveRelatedBusinessObjectV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectSaveRelatedBusinessObjectV1
        //instance.businessObjectSaveRelatedBusinessObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectUnLinkRelatedBusinessObjectByRecIdV1', function() {
      it('should call businessObjectUnLinkRelatedBusinessObjectByRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectUnLinkRelatedBusinessObjectByRecIdV1
        //instance.businessObjectUnLinkRelatedBusinessObjectByRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectUploadBusinessObjectAttachmentByIdAndPublicIdV1', function() {
      it('should call businessObjectUploadBusinessObjectAttachmentByIdAndPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectUploadBusinessObjectAttachmentByIdAndPublicIdV1
        //instance.businessObjectUploadBusinessObjectAttachmentByIdAndPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectUploadBusinessObjectAttachmentByIdAndRecIdV1', function() {
      it('should call businessObjectUploadBusinessObjectAttachmentByIdAndRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectUploadBusinessObjectAttachmentByIdAndRecIdV1
        //instance.businessObjectUploadBusinessObjectAttachmentByIdAndRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectUploadBusinessObjectAttachmentByNameAndPublicIdV1', function() {
      it('should call businessObjectUploadBusinessObjectAttachmentByNameAndPublicIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectUploadBusinessObjectAttachmentByNameAndPublicIdV1
        //instance.businessObjectUploadBusinessObjectAttachmentByNameAndPublicIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('businessObjectUploadBusinessObjectAttachmentByNameAndRecIdV1', function() {
      it('should call businessObjectUploadBusinessObjectAttachmentByNameAndRecIdV1 successfully', function(done) {
        //uncomment below and update the code to test businessObjectUploadBusinessObjectAttachmentByNameAndRecIdV1
        //instance.businessObjectUploadBusinessObjectAttachmentByNameAndRecIdV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
