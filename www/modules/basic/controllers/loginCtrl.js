var classModule = angular.module('classModule');

classModule.controller('loginCtrl', ['$scope','$state', function($scope,$state) {

 $scope.doLogin = function(){
   $state.go('logged.class');
 }
}]);
