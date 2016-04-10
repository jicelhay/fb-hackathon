/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('classModule');

classModule.controller('configCtrl', ['$scope','classService', function($scope,$stateParams,classService) {

  $scope.picture = "img/ionic.png";


}]);
