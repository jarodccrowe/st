'use strict';

/**
 * @ngdoc directive
 * @name stacklaApp.directive:stStep
 * @description
 * # stStep
 */
angular.module('stacklaApp')
  .directive('stStep', function () {
    return {
      scope: {
        step: '='
      },
      templateUrl: '/scripts/directives/templates/st-step.html',
      restrict: 'A',
      link: function(scope) {
        console.log('st-step');
        console.log(scope.step);
      }
    };
  });
