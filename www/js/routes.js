angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.what2Eat', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/what2Eat.html',
        controller: 'what2EatCtrl'
      }
    }
  })

  .state('menu.myLocations', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myLocations.html',
        controller: 'myLocationsCtrl'
      }
    }
  })

  .state('menu.history', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('menu', {
    url: '/w2e-menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.settings', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.account', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signin', {
    url: '/page8',
    templateUrl: 'templates/signin.html',
    controller: 'signinCtrl'
  })

$urlRouterProvider.otherwise('/w2e-menu/page1')


});