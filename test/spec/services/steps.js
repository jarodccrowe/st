'use strict';

describe('Service: Steps', function () {

  // load the service's module
  beforeEach(module('stacklaApp'));

  // instantiate service
  var Steps;
  beforeEach(inject(function (_Steps_) {
    Steps = _Steps_;
  }));

  it('should do something', function () {
    expect(!!Steps).toBe(true);
  });

});
