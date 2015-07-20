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

    this.activeStep = 0;

    this.steps = {
        step1: {
          id: 0,
          title: 'Upload Image',
          additionalText: '...'
        },
        step2: {
          id: 1,
          title: 'Your Information',
          additionalText: '...'
        },
        step3: {
          id: 2,
          title: 'Last Step',
          additionalText: 'Are you sure you want to submit the form?',
        }
    };

    this.countSteps = function() {
      this.totalSteps = Object.keys(this.steps).length;
      console.log('there are now ' + this.totalSteps + ' steps');
    };

    this.countSteps();

    this.addStep = function (name, id, title, additionalText) {
      this.steps[name] = {
        id: id,
        title: title,
        additionalText: additionalText
      };
      this.countSteps();
    };

  });
