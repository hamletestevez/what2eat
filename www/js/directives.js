angular.module('app.directives', [])

  .directive('spacerSm', function () {
    return {
      template: "<div style='height: 15px; width: auto; clear:both;'></div>"
    }
  })

  .directive('spacerMd', function () {
    return {
      template: "<div style='height: 30px; width: auto; clear:both;'></div>"
    }
  })

  .directive('spacerLg', function () {
    return {
      template: "<div style='height: 60px; width: auto; clear:both;'></div>"
    }
  })