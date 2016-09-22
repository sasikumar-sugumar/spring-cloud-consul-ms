'use strict';

/**
 * @ngdoc function
 * @name uiServiceApp.controller:CreatenodeCtrl
 * @description
 * # CreatenodeCtrl
 * Controller of the uiServiceApp
 */
var nodeModule = angular.module('node.ctrl', [
    'node.factory'
]).controller('CreatenodeCtrl', [
    '$scope',
    'Node',
    function($scope, Node) {
        $scope.node = new Node();
    }
]);