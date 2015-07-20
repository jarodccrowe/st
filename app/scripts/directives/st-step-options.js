'use strict';

/**
 * @ngdoc directive
 * @name stacklaApp.directive:stStepOptions
 * @description
 * # stStepOptions
 */
angular.module('stacklaApp')
  .directive('stStepOptions', ['Steps', function (Steps) {
    return {
      scope: {
        step: '=',
        activeStep: '=',
        totalSteps: '=',
        stepProgress: '='
      },
      templateUrl: '/scripts/directives/templates/st-step-options.html',
      restrict: 'A',
      controller: function($scope) {
        var sovm = $scope;

        sovm.addStep = function(name, id, title, additionalText) {
          console.log('addStep function directive' + name + id + title + additionalText);
          Steps.addStep(name, id, title, additionalText);
        };

      }
    };
  }]);
