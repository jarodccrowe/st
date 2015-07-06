'use strict';

/**
 * @ngdoc function
 * @name stacklaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stacklaApp
 */
angular.module('stacklaApp')
  .controller('MainCtrl', function () {

    /* jshint validthis: true */
    var mvm = this;

    mvm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    mvm.steps = {
        step1: {
          title: 'Upload Image'
        },
        step2: {
          title: 'Your Information'
        },
        step3: {
          title: 'Last Step'
        }
    };

  });
