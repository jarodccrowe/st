'use strict';

/**
 * @ngdoc directive
 * @name stacklaApp.directive:stStep
 * @description
 * # stStep
 */
angular.module('stacklaApp')
  .directive('stStep', [function () {
    return {
      scope: {
        step: '=',
        activeStep: '=',
        totalSteps: '=',
        stepProgress: '='
      },
      templateUrl: '/scripts/directives/templates/st-step.html',
      restrict: 'A',
      link: function() {

      },
      controller: function($scope) {
        var stvm = $scope;

        stvm.init = function() {
          stvm.checkProgress();
        };

        stvm.nextStep = function () {
          if(stvm.activeStep < stvm.totalSteps){
            stvm.activeStep = stvm.activeStep + 1;
            stvm.checkProgress();
          }
        };

        stvm.prevStep = function () {
          if(stvm.activeStep > 0){
            stvm.activeStep = stvm.activeStep - 1;
            stvm.checkProgress();
          }
        };

        stvm.checkProgress = function() {
          stvm.stepProgress = Math.floor(stvm.step.id / stvm.totalSteps * 100);
        };

        stvm.changeActiveStep = function(newStepId) {
          stvm.activeStep = newStepId;
          console.log(stvm.activeStep);
        };

        stvm.init();
      }
    };
  }]);
