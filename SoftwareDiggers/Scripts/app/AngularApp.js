var AngularApp = angular.module('AngularApp', ['ngRoute', 'infinite-scroll', 'ngAnimate']);

AngularApp.controller('BaseController', BaseController);
AngularApp.controller('LandingPageController', LandingPageController);
AngularApp.controller('StartController', StartController);
AngularApp.controller('LoginController', LoginController);
AngularApp.controller('RegisterController', RegisterController);
AngularApp.controller('ProjectsController', ProjectsController);
AngularApp.controller('SearchController', SearchController);


AngularApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularApp.factory('LoginFactory', LoginFactory);
AngularApp.factory('RegistrationFactory', RegistrationFactory);
AngularApp.factory('ProjectsFactory', ProjectsFactory);
AngularApp.factory('SearchFactory', SearchFactory);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/Start/Index'
        })
        .when('/Start', {
            templateUrl: '/Start/Index'
        })
        .when('/Start/_comonData', {
            templateUrl: '/Start/_comonData'
        })
        .when('/Start/_platforms', {
            templateUrl: '/Start/_platforms'
        })
        .when('/Start/_shortDescription', {
            templateUrl: '/Start/_shortDescription'
        })
        .when('/Donation', {
            templateUrl: '/Donation/Index'
        })
        .when('/Donation/:Id', {
            templateUrl: function (params) { return '/Donation/Index/' + params.Id; }
        })
        .when('/ProjectDetails/:Id', {
            templateUrl: function(params) { return '/ProjectDetails/Index/' + params.Id; }
            })
        .when('/Stroll', {
            templateUrl: '/Projects/Index'
        })
        .when('/Search/:phrase', {
            templateUrl: function (params) { return '/Projects/Search?phrase=' + params.phrase; },
        })
        .when('/Login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/Register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
    //$locationProvider.html5Mode(true);//hash tagai
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

AngularApp.config(configFunction);

