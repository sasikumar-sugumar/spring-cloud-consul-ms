'use strict';

/**
 * @ngdoc service
 * @name uiServiceApp.node
 * @description
 * # node
 * Factory in the uiServiceApp.
 */
angular.module('uiServiceApp')
  .factory('node', ['$http', function($http){
    var abstractFactory = new AbstractFactory();
			var Node = function() {
				var _node = this;
				this.name;
				this.key;
				this.value;
				this.controller = 'node';
        this.method = 'getAllNodes';
        var _node = $http(abstractFactory.getUrl(this.getMethod()));
			}
			Node.prototype = {
				getMethod : function() {
					return this.method;
				},
				getParam : function() {
					return {
						name : this.name,
					  key : this.key,
						value : this.value,
					}
				},
			};

			return Node;

  }]); 

