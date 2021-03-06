﻿var LandingPageController = function ($scope, $controller) {
    $controller('BaseController', { $scope: $scope });
    $scope.models = {
        pageTitle: 'Digg!'
    };
}

// The inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope', '$controller'];