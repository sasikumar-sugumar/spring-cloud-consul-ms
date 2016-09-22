'use strict';

/**
 * @ngdoc service
 * @name uiServiceApp.abstract
 * @description
 * # abstract
 * Factory in the uiServiceApp.
 */
var abstractFactory = angular.module('abstract.factory', ['node.config']);
abstractFactory
  .factory('AbstractFactory', ['$http', 'CONFIG',
            function($http, CONFIG) {
                var AbstractFactory = function() {
                    this.data = {};
                };

                AbstractFactory.prototype = {
                    getUrl: function(method) {
                        var url = CONFIG.CONTEXT + method;
                        console.log(url);
                        return {
                            url: url,
                            method: 'GET'
                        };
                    },
                    postUrl: function(url, params) {
                        console.log(params);
                        return {
                            url: url,
                            method: 'POST',
                            data: params,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        };
                    },
                    getRequest: function(method, param) {
                        console.log(param);
                        var url = CONFIG.CONTEXT + method // +'&callback=JSON_CALLBACK';

                        var returnObj = {
                            url: url,
                            dataType: 'jsonp',
                            method: 'GET'
                        };
                        if (param != null) {
                            returnObj.params = param;
                        }
                        return returnObj;
                    },
                    processResponse: function(response) {
                        return (response.responseCode == 'SUCCESS' || response.responseCode == 'success') ? response.responseDescription : response.errorDescription != '' ? response.errorDescription : response.errorCode;
                    }
                };

                return AbstractFactory;
            }
        ]);

