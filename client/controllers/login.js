angular.module('Instagram-Clone')
  .controller('LoginCtrl', function($scope, $window, $location, $rootScope, $auth){

    $scope.instagramLogin = function(){
      $auth.authenticate('instagram')
        .then(function(res){
          $window.localStorage.currentUser = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(res){
          console.log(response.data);
        });
    };

    $scope.emailLogin = function(){
      $auth.login({ email: $scope.email, password: $scope.password })
        .then(function(res){
          $window.localStorage.currentUser = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(res){
          $scope.errorMessage = {};
          angular.forEach(response.data.message, function(message, field) {
            $scope.loginForm[field].$setValidity('server', false);
            $scope.errorMessage[field] = response.data.message[field];
          });
        });
    };
  });
