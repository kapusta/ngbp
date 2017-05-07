/**
@memberof ngbp
@ngdoc component
@name ngbpAbout
@description about the site
@example <ngbp-about></ngbp-about>
*/
(function(angular){
  angular.module('ngbp').component('ngbpAbout', {
    templateUrl: '/components/ngbp-about/ngbp-about.html',
    controllerAs: 'ctrl',
    controller: $log => {
      $log.log('ngbpAbout component is running');
      let ctrl = this;
    }
  });
}(window.angular));
