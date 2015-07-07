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
        totalSteps: '='
      },
      templateUrl: '/scripts/directives/templates/st-step.html',
      restrict: 'A',
      link: function() {

      },
      controller: function($scope) {

        var stvm = $scope;

        stvm.nextStep = function () {
          if(stvm.activeStep < stvm.totalSteps){
            stvm.activeStep = stvm.activeStep + 1;
          }
        };

        stvm.prevStep = function () {
          if(stvm.activeStep > 1){
            stvm.activeStep = stvm.activeStep - 1;
          }
        };

      }
    };
  }]);
