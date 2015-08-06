var StrollController = function ($scope, Reddit) {
    $scope.reddit = new Reddit();
}

// The inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
StrollController.$inject = ['$scope', 'Reddit'];
