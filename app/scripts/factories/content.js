'use strict';

var app = angular.module('protifyApp');

app.factory('Content', function ($http) {
  var base = 'http://www.loezi.fi/protify-mock-backend';
  var contentService = {};

  contentService.all = function () {
    return $http.get(base + '/tracks');
  };

  contentService.band = function (band) {
    return $http.get(base + '/band/' + band);
  };

  return contentService;
});