'use strict';

angular.module('protifyApp')
	.factory('Track', function($http){
		var url = "http://lallinuo.users.cs.helsinki.fi/protify/tracks";
		var trackService = {};

		trackService.all = function(){
			return $http.get(url);
		}

		return trackService;
});

angular.module('protifyApp')
  .controller('MainCtrl', function ($scope, Track) {

    $scope.clickTitle = function(title) {
        console.log("Clicked title "+title);
    }

    $scope.clickArtist = function(artist) {
        console.log("Clicked artist "+artist);
    }

    $scope.clickAlbum = function(album) {
        console.log("Clicked album "+album);
    }

    $scope.clickLength = function(length) {
        console.log("Clicked length "+length);
    }

    Track.all().success( function(data, status, headers, config) {
        $scope.tracks = data;
    }); 
  });

angular.module('protifyApp')
  .directive('player', function (){

    function PlayerCtrl($scope, Audio) {
        $scope.nowPlaying = 0;

        $scope.play = function() {
            console.log("http://lallinuo.users.cs.helsinki.fi/"+$scope.tracks[$scope.nowPlaying].path);
            Audio.play("http://lallinuo.users.cs.helsinki.fi/"+$scope.tracks[$scope.nowPlaying].path);
        }

        $scope.pause = function() {
            console.log("pause");
        }

        $scope.previous = function() {
            console.log("previous");
        }

        $scope.next = function() {
            console.log("next");
        }
    };

    return {
        restrict: 'E',
        controller: PlayerCtrl,
        templateUrl: 'views/player.html',
        replace: true
    };
});

angular.module('protifyApp')
.factory('Audio',function ($document) {
  var audioElement = $document[0].createElement('audio');
  return {
    audioElement: audioElement,

    play: function(filename) {
        audioElement.src = filename;
        audioElement.play();
    }

  }
});