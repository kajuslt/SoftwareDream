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

AngularApp.factory('Reddit', function ($http) {
    var Reddit = function () {
        this.items = [];
        this.busy = false;
        this.after = '';
    };

    Reddit.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;

        var url = "https://localhost:44300/Stroll/Projects" + this.after + "&jsonp=JSON_CALLBACK";
        $http.jsonp(url).success(function (data) {
            var items = data.data.children;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i].data);
            }
            this.after = "t3_" + this.items[this.items.length - 1].id;
            this.busy = false;
        }.bind(this));
    };

    return Reddit;
});