'use strict';

var app = angular.module('protifyApp');

app.controller('MainCtrl', function ($scope, Content, Audio, $stateParams, $location) {
  
  /* SCOPE */
  $scope.setTrack = function (track) {
    $scope.nowPlaying = track;
    Audio.playFile(track.file);
  };

  /* INITIALIZE PLAYER IN CASE BACKEND IS DOWN */
  $scope.tracks = [{
    title: 'The server is fucked',
    artist: 'Protify team',
    album: 'Error Blues',
    length: 'unknown',
    file: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Rick_Astley_-_Never_Gonna_Give_You_Up.ogg'
  }];

  $scope.nowPlaying = $scope.tracks[0];

  /* REPLACE MOCK DATA WITH REAL DATA */
  var initPlayer = function (data) {
    if (data.band && data.tracks){
      $scope.tracks = data.tracks;
      $scope.band = data.band;
    } else {
      $scope.tracks = data;
    }

    var trackId = parseInt($stateParams.trackId, 10) -1 || 0;
    if (trackId >= $scope.tracks.length || trackId < 0) {
      $scope.nowPlaying = $scope.tracks[0];
    } else {
      $scope.nowPlaying = $scope.tracks[trackId];
    }
  }

  if ($stateParams.bandId) {
    Content.band($stateParams.bandId)
    .success(function (data) {
      initPlayer(data);
    }).error(function (error) {
      $location.path('/');
    });
  } else {
    Content.all()
    .success(function (data) {
      initPlayer(data);
    });
  }
});