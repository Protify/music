'use strict';

var app = angular.module('protifyApp');

app.factory('Track', function($http){
  var url = 'http://lallinuo.users.cs.helsinki.fi/protify/tracks';
  var trackService = {};

  trackService.all = function(){
    return $http.get(url);
  };

  return trackService;
});