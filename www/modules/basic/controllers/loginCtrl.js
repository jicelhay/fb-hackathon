var classModule = angular.module('classModule');

classModule.controller('loginCtrl', ['$scope', '$state', 'Auth', '$ionicLoading', 'loggedService', function($scope,$state,Auth, $ionicLoading, loggedService) {

  $scope.data = {isChecked: false};

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

   var userType;
   if ($scope.data.isChecked){
     userType="Profesor"
   }else{
     userType="Apoderado"
   }

  if (authData === null) {
    console.log("Not logged in yet");
  } else {
    var usersRef = new Firebase("https//redatomo.firebaseio.com/users");
    usersRef.child(authData.uid).set({
      provider: authData.provider,
      name: authData.facebook.displayName,
      type: userType
    });

    // Setear parametros de usuario
    var userData = {};
    var classesArray = [];
    userData.picture = authData.facebook.profileImageURL;
    userData.name = authData.facebook.displayName;
    userData.rol = userType;
    usersRef.child(authData.uid).child("classes").on("child_added", function(snapshot, prevChildKey) {
      var cl = snapshot.val();
      classesArray.push({name: cl.name, id: cl.id});
      console.log(cl);
      console.log(cl.name);
    });
    userData.classes = classesArray;
    loggedService.setData(userData);

    console.log("Logged in as", authData.uid);
    $state.go('logged.class');
  }
  $scope.authData = authData; // This will display the user's name in our view
   $ionicLoading.hide();

});

}]);
