﻿var DonationController = function ($scope, $controller) {
    $controller('BaseController', { $scope: $scope });
}

// The inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
DonationController.$inject = ['$scope', '$controller'];
