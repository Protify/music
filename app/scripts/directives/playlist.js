'use strict';

var app = angular.module('protifyApp');

app.directive('playlist', function () {

  return {
    restrict: 'E',
    controller: 'PlayerCtrl',
    templateUrl: 'views/playlist.html',
    replace: true
  };
});