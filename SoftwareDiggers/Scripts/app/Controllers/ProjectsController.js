var SearchController = function ($scope, SearchFactory, $controller) {
    $controller('BaseController', { $scope: $scope });
    $scope.projects = new SearchFactory();
}

// The inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
SearchController.$inject = ['$scope', 'SearchFactory', '$controller'];
