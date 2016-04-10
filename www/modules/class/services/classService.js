var classModule = angular.module('classModule');

classModule.factory('classService',['$timeout', '$q' , function($timeout, $q) {

  var general;
  var service;
  var id;

  var recentPromise,mediaPromise,newsPromise;
  var recent,news, media;

  var ref = new Firebase("https://redatomo.firebaseio.com/class");


  function setCards(id){
    console.log(id);
    var classRef = ref.child(id+"/news");

    recent = [];
    news = [];

    // Retrieve new posts as they are added to our database
    classRef.on("child_added", function(snapshot, prevChildKey) {
      recent.push(snapshot.val());
      news.push(snapshot.val());
    });

    media =  [{
      title: 'Imagen?',
      body: 'Esto es una imagen...'
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
