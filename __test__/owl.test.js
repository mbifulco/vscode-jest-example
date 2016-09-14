"use strict";

var Owl = require('../lib/owl');

describe('testing owl wing flap count', function(){
  it('should report one flap on first try', function(){
    var owl = new Owl();
    owl.flapWings();
    expect(owl.flapCount).toBe(1);
  });
})