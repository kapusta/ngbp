/**
@memberof ngbs
@ngdoc component
@name movie
@description info and reviews for specified movie
@example <movie></movie>
*/
(function(angular){
  'use strict';
  function MovieController($routeParams, $filter, MovieService) {
    var ctrl = this;

    ctrl.getWorth = function() {
      return ctrl.movie.reviews.reduce(function(sum, review) {
        return sum + review.worth;
      }, 0) / ctrl.movie.reviews.length;
    };

    ctrl.updateWorth = function() {
      ctrl.worth = ctrl.getWorth();
    };

    ctrl.addReviewToList = function(review) {
      var newReview = angular.copy(review);
      ctrl.movie.reviews.push(newReview);
    };

    ctrl.addReview = function(review) {
      ctrl.addReviewToList(review);
      ctrl.updateWorth();
    };

    ctrl.movie = MovieService.getMovie($routeParams.title);
    ctrl.worth = ctrl.getWorth();
  }

  angular.module('ngbp').component('movie', {
    templateUrl: '/components/movie/movie.html',
    controller: MovieController
  });
}(window.angular));
