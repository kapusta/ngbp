(function(angular){
  'use strict';

  /**
    @name plz
    @memberof ngbp
    @ngdoc factory
    @description an $http wrapper
  */
  angular.module('ngbp').provider('plz', function() {
    var timeout = 60000;

    var api = function($log, $q, $http) {
      $log.log('setting up plz provider');
      var get = function(params, url, successCb, errCb) {
        return $http({
          'method': 'GET',
          'params': params,
          'url': url,
          'timeout': timeout,
        })
        .then(
          function(resp) { if (successCb) { return successCb(resp); } else { return resp; } },
          function(resp) { if (errCb) { return $q.reject(errCb(resp)); } else { return $q.reject(resp); } }
        );
      };

      var post = function(url, data, successCb, errCb) {
        return $http({ // return for the sake of the promise
          'method': 'POST',
          'url': url,
          'data': data,
          'timeout': timeout,
        })
        .then(
          function(resp) { if (successCb) { return successCb(resp); } else { return resp; } },
          function(resp) { if (errCb) { return $q.reject(errCb(resp)); } else { return $q.reject(resp); } }
        );
      };

      var put = function(url, data, successCb, errCb) {
        return $http({ // return for the sake of the promise
          'method': 'PUT',
          'url': url,
          'data': data,
          'timeout': timeout,
        })
        .then(
          function(resp) { if (successCb) { return successCb(resp); } else { return resp; } },
          function(resp) { if (errCb) { return $q.reject(errCb(resp)); } else { return $q.reject(resp); } }
        );
      };

      return {
        get: get,
        post: post,
        put: put,
      };

    };

    this.setTimeout = function(ms) {
      if (ms) {
        timeout = parseInt(ms, 10);
      }
    };

    this.$get = function($log, $q, $http) {
      return api($log, $q, $http);
    };


  });

}(window.angular));
