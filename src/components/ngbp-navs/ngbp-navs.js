/**
@memberof ngbp
@ngdoc component
@name ngbpNavs
@description opens a websocket and gets gps data
@example <ngbp-navs></ngbp-navs>
*/
(function(angular){
  'use strict';
  angular.module('ngbp').component('ngbpNavs', {
    templateUrl: '/components/ngbp-navs/ngbp-navs.html',
    controllerAs: 'ctrl',
    controller: function($log, $location, $rootScope) {
      $log.log('ngbpNavs component is running');
      var ctrl = this;

      ctrl.navTo = function(route) {
        $location.url(route);
      };

      var dereg = $rootScope.$on('$routeChangeSuccess', function (event, current, previous, rejection) {
        ctrl.$location = $location.url();
      });

    }
  });
}(window.angular));
