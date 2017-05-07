/**
@memberof ngbp
@ngdoc component
@name ngbpNavs
@description opens a websocket and gets gps data
@example <ngbp-navs></ngbp-navs>
*/
import angular from 'angular';

class Ctrl {
  constructor($log, $location, $rootScope) {
    $log.log('ngbpNavs component is running');
    let ctrl = this;

    ctrl.navTo = function(route) {
      $location.url(route);
    };

    let dereg = $rootScope.$on('$routeChangeSuccess', (event, current, previous, rejection) => {
      ctrl.$location = $location.url();
    });

  }
}

Ctrl.$inject = ['$log', '$location', '$rootScope'];

class ngbpNavs {
  constructor() {
    Object.assign(this, {
      templateUrl: '/components/ngbp-navs/ngbp-navs.html',
      controllerAs: 'ctrl',
      controller: Ctrl
    });
  }
}

angular.module('ngbp').component(ngbpNavs);
