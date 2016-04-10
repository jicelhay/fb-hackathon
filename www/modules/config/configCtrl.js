/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('classModule');

classModule.controller('configCtrl', ['$scope','classService','$ionicPopup','loggedService',
  function($scope,classService,$ionicPopup,loggedService) {


  $scope.myClasses = loggedService.getClasses();

  $scope.data = {
    code: ""
  };

  $scope.deleteClass = function(course) {
    loggedService.deleteClass(course)
      .then(function (data) {
        var alertPopup = $ionicPopup.alert({
          title: 'Curso eliminado!',
          template: 'Recuerda que puedes solicitar nuevamente utilizando el código.'
        });
      });
  };

    $scope.addClass = function(){
      console.log('llegue a clase');
      loggedService.checkCode($scope.data.code)
        .then(function(res){
          var alertPopup;
          if(res){
             alertPopup = $ionicPopup.alert({
              title: 'Curso agregado!',
              template: 'Puedes ingresar al nuevo curso desde el menú.'
            });
          }
          else{
             alertPopup = $ionicPopup.alert({
              title: 'Código Incorrecto!',
              template: 'El curso solicitado no se ha inscrito.'
            });
          }
          $scope.data.code = "";
        })

    };


}]);
