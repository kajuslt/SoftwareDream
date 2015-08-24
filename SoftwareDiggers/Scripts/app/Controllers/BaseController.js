var BaseController = function ($scope, $window) {
    $scope.Search = function (phrase) {
        $scope = $scope || angular.element(document).scope();
        $window.location.href="#/Search/" + phrase;
    }
}
BaseController.$inject = ['$scope', '$window'];
