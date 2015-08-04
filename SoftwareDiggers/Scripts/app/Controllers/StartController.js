var StartController = function ($scope) {
    $scope.items = ['_comonData', '_platforms', '_shortDescription'];
    $scope.selection = $scope.items[0];
}

// The inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
StartController.$inject = ['$scope'];
