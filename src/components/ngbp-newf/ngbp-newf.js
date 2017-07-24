/**
@memberof ngbp
@ngdoc component
@name ngbpTest
@description about the site
@example <ngbp-newf></ngbp-newf>
*/
(function(angular){
  'use strict';

  // angular.module('ngbp').component('ngbpNewf', {
  //   templateUrl: '/components/ngbp-newf/ngbp-newf.html',
  //   controllerAs: 'ctrl',
  //   controller: function($log,$scope) {
  //     $log.log('ngbpNewf component is running');
  //     $scope.val=1;
  //     $scope.setValue = function(val){
  //       $scope.val=val;
  //     };
  //     var ctrl = this;
  //   }
  // });

  angular.module('ngbp').directive('testNum', function(){
    return{
      require:'ngModel',
      templateUrl: '/components/ngbp-newf/ngbp-newf.html',
      controllerAs: 'ctrl',
      controller: function($log,$scope) {
        $log.log('ngbpNewf component is running');
        $scope.val=1;
        $scope.setValue = function(val){
          $scope.val=val;
        };
        var ctrl = this;
      },
      link: function(scope, elem, attrs, thing){

        function checkDec(viewValue){
          if (parseInt(viewValue)*10%1 ===0) {
            thing.setValidity('badNumber',true);
            scope.log('Num: ' + parseInt(viewValue));
          }
          else {
            thing.setValidity('badNumber',false);
          }
          return viewValue;
        }
        thing.$parsers.unshift(checkDec);
        thing.$formatters.unshift(checkDec);
      }
    };
  });
}(window.angular));

//What does @example do?
