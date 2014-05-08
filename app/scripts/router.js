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
  .state('song', {
    url: '/song/:id',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  });
});