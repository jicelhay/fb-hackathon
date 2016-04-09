/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('classModule',[]);

classModule.controller('recentCtrl', ['$scope', function($scope) {
  $scope.cards = [{
    title: 'Reunión Apoderados' ,
    body: 'Se les informa que la reunión del Miercoles se atrasará una hora'
  },{
    title: 'Paseo de curso' ,
    body: 'Recuerden que los alumnos deben llevar colación al paseo del Viernes'
  }];
}]);
