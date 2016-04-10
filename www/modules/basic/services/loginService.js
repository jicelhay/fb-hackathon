var classModule = angular.module('classModule');

classModule.factory("Auth", function($firebaseAuth) {
  var usersRef = new Firebase("https//redatomo.firebaseio.com/users");
  return $firebaseAuth(usersRef);
})
