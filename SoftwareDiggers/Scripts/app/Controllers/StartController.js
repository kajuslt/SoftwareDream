var StartController = function ($scope, $controller, $http) {
    $controller('BaseController', { $scope: $scope });
    $scope.items = ['_comonData', '_platforms', '_shortDescription'];
    $scope.selection = $scope.items[0];
    $scope.projectInfoForm = {
        projectNameString: "default",
        mainPurposeString: "default",
        additionalPurposeString: "default",
        basePlatform: { id: 0 },
        os: { id: 0 },
        browser: { id: 0 },
        expectationsString: "default"
    };
    $scope.submitForm = function (url) {
        if ($scope.projectInfoForm.$valid) {
            $http.post(url, JSON.stringify($scope.projectInfoForm)).success(function() {});
        }
    };

}

// The inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
StartController.$inject = ['$scope', '$controller','$http'];
