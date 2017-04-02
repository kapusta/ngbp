/**
@memberof ngbp
@ngdoc component
@name ngbpSettings
@description about the site
@example <ngbp-settings></ngbp-settings>
*/
(function(angular){
  'use strict';
  angular.module('ngbp').component('ngbpSettings', {
    templateUrl: '/components/ngbp-settings/ngbp-settings.html',
    controllerAs: 'ctrl',
    controller: function($log) {
      $log.log('ngbpSettings component is running');
      var ctrl = this;

      ctrl.$onInit = function() {
        // nothing yet
      };

    }
  });
}(window.angular));
