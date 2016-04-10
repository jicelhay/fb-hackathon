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

classModule.controller('newsCtrl', ['$scope','classService', '$ionicModal','$rootScope', function($scope,classService,$ionicModal,$rootScope) {

  $scope.dataReady = false;
  $scope.data= {title:'',
  body: ''};
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
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };

  $scope.sendNew = function(){
    if($scope.data.title && $scope.data.body){
      var postedNew = {title: $scope.data.title, body: $scope.data.title};
      $scope.cards.push(postedNew);
      $scope.closeModal();
      $scope.data.title = "";
      $scope.data.body = "";
    }
  };

}]);
