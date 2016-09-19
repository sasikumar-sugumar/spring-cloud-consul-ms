'use strict';

describe('Service: abstract', function () {

  // load the service's module
  beforeEach(module('uiServiceApp'));

  // instantiate service
  var abstract;
  beforeEach(inject(function (_abstract_) {
    abstract = _abstract_;
  }));

  it('should do something', function () {
    expect(!!abstract).toBe(true);
  });

});
