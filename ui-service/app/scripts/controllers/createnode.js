'use strict';

/**
 * @ngdoc function
 * @name uiServiceApp.controller:CreatenodeCtrl
 * @description
 * # CreatenodeCtrl
 * Controller of the uiServiceApp
 */
angular.module('uiServiceApp')
  .controller('CreatenodeCtrl', [
    '$state',
    '$scope',
    '$stateParams',
    function($state, $scope, $stateParams) {
        $scope.node = new Node();
    }
]);