'use strict';

angular.module('hummingbirdApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
