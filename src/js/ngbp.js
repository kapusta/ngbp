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
    .when(baseUrl + 'fun', { //This works, but doesn't use components
      template: "<h1> THIS IS A TEST <h1>"
    })
    .when(baseUrl + 'funny', { //This doesn't work and I still don't know why.
      redirectTo: 'https://imgs.xkcd.com/comics/90s_flowchart.png'
    })
    .when(baseUrl + 'newf', {
      
    })
    .when(baseUrl + ':component', {
      template: function(params){
        console.log(params);
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
