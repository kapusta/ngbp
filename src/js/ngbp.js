(function(angular) {
  'use strict'; // ECMA5 strict mode

  var ngbp = angular.module('ngbp', ['ngRoute']);

  // Configure the module.
  ngbp.config(function($routeProvider, $locationProvider, $httpProvider, plzProvider) {
    var baseUrl = '/';

    $locationProvider.html5Mode(true);
    plzProvider.setTimeout(90000);

    $routeProvider
    .when(baseUrl, {
      template:  function(params){
        return '<ngbp-about></ngbp-about>';
      }
    })
    .when(baseUrl + ':component', {
      template: function(params){
        return '<ngbp-'+params.component+'></ngbp-'+params.component+'>';
      }
    })
    .otherwise({redirectTo: baseUrl});

  });

  ngbp.run(function($routeParams, $route, $rootScope, $http, $location) {

    $http.defaults.headers.get  = {
      'Content-Type': 'application/json'
    };

    $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
      $location.replace().path($rootScope.baseUrl);
    });

  });

}(window.angular));
