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

  console.log('me cargue');
  $scope.cards = classService.getNews();
}]);
