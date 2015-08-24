var RegisterController = function ($scope, $location, RegistrationFactory, $controller) {
    $controller('BaseController', { $scope: $scope });
    $scope.registerForm = {
        emailAddress: '',
        password: '',
        confirmPassword: '',
        registrationFailure: false
    };

    $scope.register = function () {
        var result = RegistrationFactory($scope.registerForm.emailAddress, $scope.registerForm.password, $scope.registerForm.confirmPassword);
        result.then(function (result) {
            if (result.success) {
                $location.path('/routeOne');
            } else {
                $scope.registerForm.registrationFailure = true;
            }
        });
    }
}

RegisterController.$inject = ['$scope', '$location', 'RegistrationFactory', '$controller'];