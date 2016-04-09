/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('starter.controllers',[]);

classModule.controller('loggedCtrl', ['$scope', '$state','classService','$ionicHistory', function($scope, $state, classService, $ionicHistory ) {


  $scope.picture = "img/ionic.png";
  $scope.name = 'John Snow';
  $scope.rol = 'Apoderado';
  $scope.classes = [{name: '1°C',id:'1cx' }, {name: '4°B',id:'4bx'}, {name: 'II°A',id:'iiax' }];


  $scope.goToClass = function(classId){
    classService.setId(classId);
    console.log()
    $scope.$broadcast('reloadClass');
    $state.go('logged.class');
  };


}]);
