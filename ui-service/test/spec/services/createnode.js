'use strict';

describe('Service: createnode', function () {

  // load the service's module
  beforeEach(module('uiServiceApp'));

  // instantiate service
  var createnode;
  beforeEach(inject(function (_createnode_) {
    createnode = _createnode_;
  }));

  it('should do something', function () {
    expect(!!createnode).toBe(true);
  });

});
