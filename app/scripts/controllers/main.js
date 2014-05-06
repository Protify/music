'use strict';

var app = angular.module('protifyApp');

app.controller('MainCtrl', function ($scope, Track, Audio, $stateParams) {
  
  $scope.setTrack = function(track){
    $scope.nowPlaying = track;
    Audio.playFile(track.file);
  };

  $scope.id = $stateParams;

  $scope.clickArtist = function(artist) {
    console.log('Clicked artist '+artist);
  };

  $scope.clickAlbum = function(album) {
    console.log('Clicked album '+album);
  };

  $scope.tracks = [{
    title: 'The server is fucked',
    artist: 'Protify team',
    album: 'Error Blues',
    length: 'unknown',
    file: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Rick_Astley_-_Never_Gonna_Give_You_Up.ogg'
  }];

  $scope.nowPlaying = $scope.tracks[0];

  Track.all()
    .success( function(data) {
      $scope.tracks = data;
      $scope.nowPlaying = $scope.tracks[0];
      Audio.playFile($scope.nowPlaying.file);
      Audio.pause();
    });
});

