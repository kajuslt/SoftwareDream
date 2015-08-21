var AngularApp = angular.module('AngularApp', ['ngRoute', 'infinite-scroll']);

AngularApp.controller('LandingPageController', LandingPageController);
AngularApp.controller('StartController', StartController);
AngularApp.controller('LoginController', LoginController);
AngularApp.controller('RegisterController', RegisterController);
AngularApp.controller('StrollController',StrollController);

AngularApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularApp.factory('LoginFactory', LoginFactory);
AngularApp.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/Start', {
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
            templateUrl: '/Stroll/Index'
        })/*
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })*/
        .when('/Login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/Register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

AngularApp.config(configFunction);

AngularApp.factory('Reddit', function ($http) {
    var Reddit = function () {
        this.items = [];
        this.busy = false;
        this.after = '';
    };

    Reddit.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        
        var url = "https://localhost:44300/Stroll/Projects?after=" + this.after;
        $http.get(url).success(function (data) {
            var items = data;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i]);
            }
            this.after = items[items.length - 1].Id;
            this.busy = false;
        }.bind(this));
    };

    return Reddit;
});