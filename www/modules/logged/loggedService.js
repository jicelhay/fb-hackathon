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
  var uid = "";
  var newClass = {};
  var ref = new Firebase("https//redatomo.firebaseio.com");

  service = {

    setData: function(userData){
      picture = userData.picture;
      name = userData.name;
      rol = userData.rol;
      classes = userData.classes;
      uid = userData.uid;
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
          console.log("ELIMINADO: "+course.id);
          ref.child("users").child(uid).child("classes").child(course.id).remove();
          //classes.splice(index, 1);
        }
        q.resolve(classes);
      },300);

      return q.promise;
    },
    checkCode: function(code){
      var q = $q.defer();
      var result;
      $timeout(function(){

      result = false;

      ref.child("class").child(code).once("value", function(data) {
        if(data.val()){
          newClass.name = data.val().name;
          ref.child("users").child(uid).child("classes").child(code).set(newClass);
          result = true;
        }
        else{
          result = false;
        }
      });
        q.resolve(result);
      },300);
      return q.promise;
    }


  };

  return service;
}]);
