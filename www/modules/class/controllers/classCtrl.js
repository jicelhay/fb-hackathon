/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('classModule');

classModule.controller('classCtrl', ['$scope', '$stateParams','classService', function($scope,$stateParams,classService) {

  console.log('llegue aca');

  $scope.$on('reloadClass',function(){
    console.log('');
    classService.setGeneral();
  });

  $scope.classId = $stateParams.classId ? $stateParams.classId : '4x';
  console.log($scope.classId);





}]);
