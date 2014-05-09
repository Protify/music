'use strict';

var app = angular.module('protifyApp');

app.directive('player', function () {

  return {
    restrict: 'E',
    controller: 'PlayerCtrl',
    templateUrl: 'views/player.html',
    replace: true
  };
});