'use strict';

var app = angular.module('protifyApp', ['ngResource']);

app.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

app.filter('ifEmpty', function() {
    return function(input, replaceText) {
        if(input) return input;
        return replaceText;
    }
});