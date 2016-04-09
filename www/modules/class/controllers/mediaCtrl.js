/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('classModule');

classModule.controller('mediaCtrl', ['$scope','classService', function($scope,classService) {

  $scope.cards = classService.getMedia();


}]);
