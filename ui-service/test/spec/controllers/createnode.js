'use strict';

describe('Controller: CreatenodeCtrl', function () {

  // load the controller's module
  beforeEach(module('uiServiceApp'));

  var CreatenodeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatenodeCtrl = $controller('CreatenodeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreatenodeCtrl.awesomeThings.length).toBe(3);
  });
});
