/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('starter.controllers',[]);

classModule.controller('loggedCtrl', ['$scope', '$state','classService','loggedService', function($scope, $state, classService, loggedService ) {


  $scope.picture = loggedService.getProfilePic();
  $scope.name = loggedService.getName();
  $scope.rol = loggedService.getRol();
  $scope.classes = loggedService.getClasses();

  $scope.goToClass = function(classId){
    classService.setId(classId);
    $scope.$broadcast('reloadClass');
    $state.go('logged.class');
  };

  $scope.goToConfig = function(){
    $state.go('logged.config');
  }

}]);
