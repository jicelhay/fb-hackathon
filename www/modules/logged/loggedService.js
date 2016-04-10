/**
 * Created by Juanito on 09-04-2016.
 */
/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('starter.controllers');

classModule.factory('loggedService',['$timeout', '$q' , function($timeout, $q) {

 var service;

  var picture = "img/ionic.png";
  var name = 'John Snow';
  var rol = 'Apoderado';
  var classes = [{name: '1°C',id:'1cx' }, {name: '4°B',id:'4bx'}, {name: 'II°A',id:'iiax' }];

   var newClass = {name: 'IV°A',id:'4cx' };

  service = {

    setData: function(userData){
      picture = userData.picture;
      name = userData.name;
      rol = userData.rol;
      classes = userData.classes;
    },
    getName: function(){
      return name;
    },
    getRol: function(){
      return rol;
    },
    getClasses:function(){
      return classes;
    },
    getProfilePic: function(){
      return picture
    },

    deleteClass: function(course){
      var q = $q.defer();
      var index = classes.indexOf(course);

      $timeout(function(){
        if (index > -1) {
          classes.splice(index, 1);
        }
        q.resolve(classes);
      },300);

      return q.promise;
    },
    checkCode: function(code){
      console.log(code);
      var q = $q.defer();
      var result;
      $timeout(function(){
      if(code === '1234'){
        result = true;
        classes.push(newClass);
      }
      else{
        result = false;
      }
        q.resolve(result);
      },300);
      return q.promise;
    }


  };

  return service;
}]);
