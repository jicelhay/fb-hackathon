var classModule = angular.module('classModule');

classModule.controller('loginCtrl', ['$scope', '$state', 'Auth', '$ionicLoading', function($scope,$state,Auth, $ionicLoading) {

 $scope.doLogin = function() {
   $ionicLoading.show();
    Auth.$authWithOAuthPopup("facebook").then(function(authData) {
      // User successfully logged in
    }).catch(function(error) {
      if (error.code === "TRANSPORT_UNAVAILABLE") {
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
          // User successfully logged in. We can log to the console
          // since we’re using a popup here
          console.log(authData);
        });
      } else {
        // Another error occurred
        console.log(error);
      }
    });
};

 Auth.$onAuth(function(authData) {

  if (authData === null) {
    console.log("Not logged in yet");
  } else {
    console.log("Logged in as", authData.uid);
    $state.go('logged.class');
  }
  $scope.authData = authData; // This will display the user's name in our view
   $ionicLoading.hide();

});

}]);
