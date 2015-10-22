angular.module('MyApp')

.config(function($routeProvider) {
    $routeProvider
    .when('/', { 
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
    })
    .when('/details/:pageNum', { 
        templateUrl: 'templates/details.html',
        controller: 'DetailsCtrl'
    })
    .otherwise({redirectTo: '/'});
    
    console.log('running config');
});