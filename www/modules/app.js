angular.module('starter', ['ionic', 'starter.controllers','classModule', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// Para poder hacer login con autentificacioens de firebase como facebook
.factory("Auth", function($firebaseAuth) {
  var usersRef = new Firebase("https//redatomo.firebaseio.com/users");
  return $firebaseAuth(usersRef);
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login',{
      url: '/login',
      templateUrl: 'modules/basic/templates/login.html',
      controller: 'loginCtrl'
  })

    .state('logged', {
    url: '/logged',
    abstract: true,
    templateUrl: 'modules/logged/logged.html',
    controller: 'loggedCtrl'
  })

    .state('logged.class', {
      url: '/class',
      views: {
        'content': {
          templateUrl: 'modules/class/templates/class.html',
          controller: 'classCtrl'
        }
      }
    })
    .state('logged.class.recent', {
      url: '/recentActivity',
      views: {
        'logged-class-recent': {
          templateUrl: 'modules/class/templates/recentActivity.html',
          controller: 'recentActivityCtrl'
        }
      }
    })
    .state('logged.class.news', {
      url: '/news',
      views: {
        'logged-class-news': {
          templateUrl: 'modules/class/templates/news.html',
          controller: 'newsCtrl'
        }
      }
    })
    .state('logged.class.media', {
      url: '/media',
      views: {
        'logged-class-media': {
          templateUrl: 'modules/class/templates/media.html',
          controller: 'mediaCtrl'
        }
      }
    })
    .state('logged.config', {
      url: '/config',
      views: {
        'content': {
          templateUrl: 'modules/config/config.html',
          controller: 'configCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
