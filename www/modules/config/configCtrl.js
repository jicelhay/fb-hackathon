/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('classModule');

classModule.controller('configCtrl', ['$scope','classService','$ionicPopup','loggedService',
  function($scope,classService,$ionicPopup,loggedService) {


  $scope.myClasses = loggedService.getClasses();
    

  $scope.deleteClass = function(course) {
   loggedService.deleteClass(course)
     .then(function(data){
       var alertPopup = $ionicPopup.alert({
         title: 'Curso eliminado!',
         template: 'Recuerda que puedes solicitar nuevamente utilizando el código.'
       });
       alertPopup.then(function(res){
         $scope.myClasses = data;
       });
     });


  };



}]);
