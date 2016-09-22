'use strict';

/**
 * @ngdoc service
 * @name uiServiceApp.node
 * @description
 * # node
 * Factory in the uiServiceApp.
 */
var nodeFactory = angular.module('node.factory', ['node.config','abstract.factory']);
nodeFactory
  .factory('Node', ['$http','AbstractFactory', function($http,AbstractFactory){
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

