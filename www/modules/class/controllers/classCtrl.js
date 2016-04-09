/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('classModule');

classModule.controller('classCtrl', ['$scope', '$stateParams','classService', function($scope,$stateParams,classService) {

  classService.setGeneral();

  $scope.$on('reloadClass',function(){
    console.log('evento');
    classService.setGeneral();
  });



}]);
