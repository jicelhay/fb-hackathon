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
    .state('logged.classRecent', {
      url: '/classRecent',
      views: {
        'menuContent': {
          templateUrl: 'modules/class/recent.html',
          controller: 'recentCtrl'
        }
      }
    })

  .state('logged.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'modules/basic/templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/logged/classRecent');
});
