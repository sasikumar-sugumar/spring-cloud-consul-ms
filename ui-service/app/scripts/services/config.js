'use strict';

/**
 * @ngdoc service
 * @name uiServiceApp.config
 * @description
 * # config
 * Constant in the uiServiceApp.
 */
angular.module('uiServiceApp')
  .constant('CONFIG', (function() {
	var contextpath = 'http://localhost:8080/graph';
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