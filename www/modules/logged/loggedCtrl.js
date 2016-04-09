/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('starter.controllers',[]);

classModule.controller('loggedCtrl', ['$scope', '$ionicModal', '$timeout', function($scope, $ionicModal, $timeout) {


  $scope.picture = "img/ionic.png";
  $scope.name = 'John Snow';
  $scope.rol = 'Apoderado';
  $scope.classes = [{name: '1°C' }, {name: '4°B' }, {name: 'II°A' }];


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('modules/basic/templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}]);
