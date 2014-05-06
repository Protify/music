var app = angular.module('protifyApp');
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otheriwse("player");
  $stateProvider
  .state('player',{
    url:'/',
    templateUrl: "index.html",
    controller: "MainCtrl"
  })
  .state('song',{
    url: "/song/:id",
    templateUrl:'index.html',
    controller: 'MainCtrl'
  }
}

