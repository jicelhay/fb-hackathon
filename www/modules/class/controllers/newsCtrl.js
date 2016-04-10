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

classModule.controller('newsCtrl', ['$scope','classService', '$ionicModal', function($scope,classService,$ionicModal) {

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

  $scope.writeNew = function(){
      $ionicModal.fromTemplateUrl('modules/class/templates/write-new.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
      });
  }
}]);
