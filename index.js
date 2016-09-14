"use strict";

var Owl = require('./lib/owl');

var owl = new Owl();

owl.flapWings();
owl.flapWings();

console.log("We flapped", owl.flapCount);