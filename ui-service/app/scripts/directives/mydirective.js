'use strict';

/**
 * @ngdoc directive
 * @name uiServiceApp.directive:myDirective
 * @description
 * # myDirective
 */
applicationModule
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });
