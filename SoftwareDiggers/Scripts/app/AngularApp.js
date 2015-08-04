var AngularApp = angular.module('AngularApp', ['ngRoute']);

AngularApp.controller('LandingPageController', LandingPageController);
AngularApp.controller('StartController', StartController);
AngularApp.controller('LoginController', LoginController);
AngularApp.controller('RegisterController', RegisterController);

AngularApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularApp.factory('LoginFactory', LoginFactory);
AngularApp.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/start', {
            templateUrl: '/Start/Index'
        })
        .when('/start/_comonData', {
            templateUrl: '/Start/_comonData'
        })
        .when('/start/_platforms', {
            templateUrl: '/Start/_platforms'
        })
        .when('/start/_shortDescription', {
            templateUrl: '/Start/_shortDescription'
        })

        .when('/stroll', {
            templateUrl: '/Stroll/Index'
        })/*
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })*/
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

AngularApp.config(configFunction);