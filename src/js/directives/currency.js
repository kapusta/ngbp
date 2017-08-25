/**
@memberof ngbp
@ngdoc directive
@name currency
@description opens a websocket and gets gps data
@example <input currency></input>
*/
(function(angular){
  'use strict';
  angular.module('ngbp').directive('currency', function() {
    var STRIP_CURRENCY_REGEXP = /[^/$].*/;
    var NUMBER_REGEXP = /^\d+\.?\d*$/;

    return {
      require: 'ngModel',
      restrict: 'A',
      link: function(scope, element, attrs, ctrl) {

        ctrl.$formatters.unshift(function(value) {
          if(value) {
            var worth = STRIP_CURRENCY_REGEXP.exec(value)[0];
            if(NUMBER_REGEXP.test(worth)) {
              var worthCurrency = Number(worth).toFixed(2);
              return '$' + worthCurrency;
            }
          }
        });

        ctrl.$parsers.unshift(function(value) {
          if(value) {
            var worth = STRIP_CURRENCY_REGEXP.exec(value)[0];
            if(NUMBER_REGEXP.test(worth)) {
              ctrl.$setValidity('currency', true);
              return Number(worth).toFixed(2);
            } else {
              ctrl.$setValidity('currency', false);
            }
          }
        });

      }
    };
  });
}(window.angular));
