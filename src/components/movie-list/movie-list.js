/**
@memberof ngbs
@ngdoc component
@name movieList
@description List of movies
@example <movie-list></movie-list>
*/
(function(angular){
  'use strict';
  function MovieListController(MovieService) {
    var ctrl = this;

    ctrl.movieList = MovieService.list;

  }

  angular.module('ngbp').component('movieList', {
    templateUrl: '/components/movie-list/movie-list.html',
    controller: MovieListController
  });
}(window.angular));
