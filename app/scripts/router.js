'use strict';

var app = angular.module('protifyApp');
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('player', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('track', {
    url: '/track/:trackId',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('band', {
    url: '/band/:bandId',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('bandTrack', {
    url: '/band/:bandId/track/:trackId',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  });
});