'use strict';

/**
 * @ngdoc function
 * @name stacklaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stacklaApp
 */
angular.module('stacklaApp')
  .controller('MainCtrl', ['Steps', function (Steps) {

    /* jshint validthis: true */
    var mvm = this;

    mvm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    mvm.steps = Steps.steps;
    mvm.activeStep = Steps.activeStep;
    mvm.totalSteps = Steps.totalSteps;

  }]);
