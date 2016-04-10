/**
 * Created by Juanito on 09-04-2016.
 */
/**
 * Created by Juanito on 09-04-2016.
 */
var classModule = angular.module('classModule');

classModule.factory('classService',['$timeout', '$q' , function($timeout, $q) {

  var general;
  var service;
  var id;

  var recentPromise,mediaPromise,newsPromise;
  var recent,news, media;

  function setCards(id){
    console.log(id);
   recent =  [{
      title: 'Reunión Apoderados del curso '+ id ,
      body: 'Se les informa que la reunión del Miercoles se atrasará una hora'
    },{
      title: 'Paseo de curso' ,
      body: 'Recuerden que los alumnos deben llevar colación al paseo del Viernes'
    },
      {
        title: 'Paseo del curso'+id ,
        body: 'Recuerden que los alumnos deben llevar colación al paseo del Viernes'
      }];

    news =  [{
      title: 'Reunión Apoderados del curso '+ id ,
      body: 'Se les informa que la reunión del Miercoles se atrasará una hora'
    },{
      title: 'Paseo de curso' ,
      body: 'Recuerden que los alumnos deben llevar colación al paseo del Viernes'
    }];

    media =  [{
      title: 'Reunión Apoderados del curso ' + id,
      body: 'Se les informa que la reunión del Miercoles se atrasará una hora'
    }];
  }

  service = {
    setId: function(id){
      this.id = id;
    },

    setGeneral: function(){
      recentPromise = $q.defer();
      mediaPromise = $q.defer();
      newsPromise = $q.defer();
      setCards(this.id);
     $timeout(function(){
        recentPromise.resolve(recent);
        mediaPromise.resolve(media);
        newsPromise.resolve(news);
      },400);
    },
    getRecent:function(){
      return recentPromise.promise;
    },
    getMedia:function(){
      return mediaPromise.promise;
    },
    getNews:function(){
    return newsPromise.promise;
  }
  };

  return service;
}]);
