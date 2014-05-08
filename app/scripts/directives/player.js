'use strict';

var app = angular.module('protifyApp');

app.directive('player', function () {

  function PlayerCtrl($scope, Audio) {
    $scope.playing = 'play';

    $scope.$watch('nowPlaying', function () {
      $scope.play();
    });

    $scope.togglePlayback = function () {
      if (!Audio.paused) {
        $scope.play();
        $scope.playing = 'pause';
        return;
      }

      if ($scope.playing === 'pause') {
        Audio.pause();
        $scope.playing = 'play';
      } else {
        Audio.play();
        $scope.playing = 'pause';
      }
      
    };

    $scope.play = function () {
      Audio.playFile($scope.nowPlaying.file);
      $scope.playing = 'pause';
    };

    $scope.stop = function () {
      Audio.stop();
      $scope.playing = 'play';
    };

    $scope.previous = function () {
      var i = $scope.tracks.indexOf($scope.nowPlaying);
      if (i - 1 < 0) {
        $scope.nowPlaying = $scope.tracks[$scope.tracks.length - 1];
      } else {
        $scope.nowPlaying = $scope.tracks[i - 1];
      }
      $scope.play();
      $scope.playing = 'pause';
    };

    $scope.next = function () {
      var i = $scope.tracks.indexOf($scope.nowPlaying);
      if (i + 1 >= $scope.tracks.length) {
        $scope.nowPlaying = $scope.tracks[0];
      } else {
        $scope.nowPlaying = $scope.tracks[i + 1];
      }
      $scope.play();
      $scope.playing = 'pause';
    };

    Audio.end($scope.next);
  }


  return {
    restrict: 'E',
    controller: ['$scope', 'Audio', PlayerCtrl],
    templateUrl: 'views/player.html',
    replace: true
  };
});