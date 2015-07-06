'use strict';

describe('Directive: step', function () {

  // load the directive's module
  beforeEach(module('stacklaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<step></step>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the step directive');
  }));
});
