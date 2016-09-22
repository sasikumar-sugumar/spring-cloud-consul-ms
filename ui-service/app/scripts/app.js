'use strict';

/**
 * @ngdoc overview
 * @name uiServiceApp
 * @description
 * # uiServiceApp
 *
 * Main module of the application.
 */
var applicationModule = angular
  .module('uiServiceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'node.config',
    'abstract.factory',
    'node.factory',
    'node.ctrl',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
