/**
@memberof ngbp
@ngdoc component
@name ngbpTest
@description about the site
@example <ngbp-test></ngbp-test>
*/
(function(angular){
  'use strict';
  angular.module('ngbp').component('ngbpTest', {
    templateUrl: '/components/ngbp-test/ngbp-test.html',
    controllerAs: 'ctrl',
    controller: function($log) {
      $log.log('ngbpTest component is running');
      var ctrl = this;
    }
  });
}(window.angular));

//What does @example do?
