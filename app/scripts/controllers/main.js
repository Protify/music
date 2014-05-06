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

app.controller('MainCtrl', function ($scope, Track) {
  $scope.nowPlaying = 0;

  $scope.clickTitle = function(title) {
    console.log('Clicked title '+title);
  };

  $scope.clickArtist = function(artist) {
    console.log('Clicked artist '+artist);
  };

  $scope.clickAlbum = function(album) {
    console.log('Clicked album '+album);
  };

  $scope.clickLength = function(length) {
    console.log('Clicked length '+length);
  };

  $scope.tracks = [{
    title: 'The server is fucked',
    artist: 'Protify team',
    album: 'Error Blues',
    length: 'unknown',
    file: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Rick_Astley_-_Never_Gonna_Give_You_Up.ogg'
  }];

  Track.all()
    .success( function(data) {
      $scope.tracks = data;
    });
});

app.directive('player', function (){

  function PlayerCtrl($scope, Audio) {
    $scope.play = function() {
      Audio.play($scope.tracks[$scope.nowPlaying].file);
    };

    $scope.stop = function() {
      Audio.stop();
    };

    $scope.previous = function() {
      if (--$scope.nowPlaying < 0) {
        $scope.nowPlaying = $scope.tracks.length - 1;
      }
      $scope.play();
    };

    $scope.next = function() {
      if (++$scope.nowPlaying >= $scope.tracks.length) {
        $scope.nowPlaying = 0;
      }
      $scope.play();
    };
  }

  return {
    restrict: 'E',
    controller: ['$scope', 'Audio', PlayerCtrl],
    templateUrl: 'views/player.html',
    replace: true
  };
});

app.factory('Audio',function ($document) {
  var audioElement = $document[0].createElement('audio');
  return {
    audioElement: audioElement,

    play: function(filename) {
      audioElement.src = filename;
      audioElement.play();
    },

    stop: function() {
      audioElement.pause();
    }
  };
});