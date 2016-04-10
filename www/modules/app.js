angular.module('starter', ['ionic', 'starter.controllers','classModule'])

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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('logged', {
    url: '/logged',
    abstract: true,
    templateUrl: 'modules/logged/logged.html',
    controller: 'loggedCtrl'
  })





  .state('logged.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'modules/basic/templates/search.html'
      }
    }
  })

  .state('logged.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'modules/basic/templates/browse.html'
        }
      }
    })
    .state('logged.class', {
      url: '/class',
      views: {
        'menuContent': {
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
        'menuContent': {
          templateUrl: 'modules/config/config.html',
          controller: 'configCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/logged/class');
});
