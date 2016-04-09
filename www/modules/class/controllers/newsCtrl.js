/**
 * Created by Juanito on 09-04-2016.
 */
/**
 * Created by Juanito on 09-04-2016.
 */
/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('classModule');

classModule.controller('newsCtrl', ['$scope','classService', function($scope,classService) {

  $scope.dataReady = false;
  classService.getNews()
    .then(function(data){
      $scope.dataReady = true;
      $scope.cards = data;
    });

  $scope.$on('reloadClass',function(){
    $scope.dataReady = false;
    classService.getNews()
      .then(function(data){
        $scope.dataReady = true;
        $scope.cards = data;
      });
  });
}]);
