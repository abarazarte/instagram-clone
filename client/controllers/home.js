angular.module('Instagram-Clone')
  .controller('HomeCtrl', function($scope, $window, $rootScope, $auth) {

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function() {
      $auth.link('instagram')
        .then(function(res){
          $window.localStorage.currentUser = JSON.stringify(res.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        });
    };
  });
