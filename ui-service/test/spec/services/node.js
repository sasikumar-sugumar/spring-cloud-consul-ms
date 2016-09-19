'use strict';

describe('Service: node', function () {

  // load the service's module
  beforeEach(module('uiServiceApp'));

  // instantiate service
  var node;
  beforeEach(inject(function (_node_) {
    node = _node_;
  }));

  it('should do something', function () {
    expect(!!node).toBe(true);
  });

});
