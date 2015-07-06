'use strict';

describe('Directive: stStep', function () {

  // load the directive's module
  beforeEach(module('stacklaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<st-step></st-step>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stStep directive');
  }));
});
