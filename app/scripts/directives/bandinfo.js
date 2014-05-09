'use strict';

var app = angular.module('protifyApp');

app.directive('bandinfo', function () {

  return {
    restrict: 'E',
    controller: 'MainCtrl',
    templateUrl: 'views/bandinfo.html',
    replace: true
  };
});