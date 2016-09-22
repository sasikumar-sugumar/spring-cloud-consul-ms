'use strict';

/**
 * @ngdoc service
 * @name uiServiceApp.config
 * @description
 * # config
 * Constant in the uiServiceApp.
 */
var nodeConfig = angular.module('node.config', []);
window.console = window.console || {};
window.console.log = window.console.log || function () {
    };
nodeConfig
  .constant('CONFIG', (function() {
	var contextpath = 'http://localhost:8080/read-service/';
	var staticcontent = "getStaticContent";
	var templateuri = "/assets/js/directive/template/";
	var partials = "/assets/js/partials/";
	var images = "/assets/images/";
	return {
		CONTEXT : contextpath,
		STATIC_CONTENT : contextpath + '/' + staticcontent,
		TEMPLATECONTEXT : contextpath + templateuri,
		PARTIALS : contextpath + partials,
		IMAGE : contextpath + images,
	};
})());