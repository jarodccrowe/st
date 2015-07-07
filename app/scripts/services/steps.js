'use strict';

/**
 * @ngdoc service
 * @name stacklaApp.Steps
 * @description
 * # Steps
 * Service in the stacklaApp.
 */
angular.module('stacklaApp')
  .service('Steps', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.activeStep = 1;

    this.totalSteps = 3;

    this.steps = {
        step1: {
          id: 1,
          title: 'Upload Image',
          additionalText: '...'
        },
        step2: {
          id: 2,
          title: 'Your Information',
          additionalText: '...'
        },
        step3: {
          id: 3,
          title: 'Last Step',
          additionalText: 'Are you sure you want to submit the form?',
        }
    };

  });
