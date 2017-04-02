/**
@memberof ngbp
@ngdoc component
@name ngbpAbout
@description about the site
@example <ngbp-about></ngbp-about>
*/
(function(angular){
  'use strict';
  angular.module('ngbp').component('ngbpAbout', {
    templateUrl: '/components/ngbp-about/ngbp-about.html',
    controllerAs: 'ctrl',
    controller: function($log) {
      $log.log('ngbpAbout component is running');
      var ctrl = this;
    }
  });
}(window.angular));
