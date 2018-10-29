angular.module('app.controllers', [])

  .controller('what2EatCtrl', function ($scope, $stateParams, $timeout) {

    $scope.elements = animated.data.elements;

    animated.createWheel();
    animated.animateWheel();
    
    
    // END of what2EatCtrl

  })

  .controller('myLocationsCtrl', function ($scope, $stateParams) {

    // END of myLocationsCtrl
  })

  .controller('historyCtrl', function ($scope, $stateParams) {

    // END of historyCtrl
  })

  .controller('menuCtrl', function ($scope, $stateParams) {

    // END of menuCtrl
  })

  .controller('settingsCtrl', function ($scope, $stateParams) {

    // END of settingsCtrl
  })

  .controller('accountCtrl', function ($scope, $stateParams) {

    // END of accountCtrl
  })

  .controller('loginCtrl', function ($scope, $stateParams) {

    // END of loginCtrl
  })

  .controller('signinCtrl', function ($scope, $stateParams) {

    // END of signinCtrl
  })