var ProjectsController = function ($scope, ProjectsFactory, $controller) {
    $controller('BaseController', { $scope: $scope });
    $scope.projects = new ProjectsFactory();
}

// The inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
ProjectsController.$inject = ['$scope', 'ProjectsFactory', '$controller'];
