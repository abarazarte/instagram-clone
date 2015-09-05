angular.module('Instagram-Clone', ['ngRoute', 'ngMessages', 'satellizer'])
  .config(function($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/photo/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise('/');

      $authProvider.loginUrl = 'http://localhost:3000/auth/login';
      $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
      $authProvider.oauth2({
        name: 'instagram',
        url: 'http://localhost:3000/auth/instagram',
        redirectUri: 'http://localhost:8000',
        clientId: '9f59752fb574458a89f17f2cdfe7e5db',
        requiredUrlParams: ['scope'],
        scope: ['likes'],
        scopeDelimiter: '+',
        authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
      });
  })
  .run(function($rootScope, $window, $auth){
    if($auth.isAuthenticated()){
      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    }
  });
