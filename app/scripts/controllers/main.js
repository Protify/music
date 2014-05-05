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

    function PlayerCtrl($scope) {
        $scope.play = function() {
            console.log("play");
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

        $scope.nowPlaying = 0
    };

    return {
        restrict: 'E',
        controller: PlayerCtrl,
        templateUrl: 'views/player.html',
        replace: true
    };
});