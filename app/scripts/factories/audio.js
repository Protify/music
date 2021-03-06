'use strict';

var app = angular.module('protifyApp');

app.factory('Audio', function ($document) {
  var audioElement = $document[0].createElement('audio');
  return {
    audioElement: audioElement,
    paused: audioElement.paused,
    playing: !audioElement.paused,

    setSource: function (filename) {
      audioElement.src = filename;
    },

    end: function (callback) {
      audioElement.addEventListener('ended', callback);
    },

    play: function () {
      audioElement.play();
    },

    playFile: function (filename) {
      audioElement.src = filename;
      audioElement.play();
    },

    pause: function () {
      audioElement.pause();
    },

    stop: function () {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  };
});