"use strict";

var Owl = function()
{
  this.flapCount = 0;
};

Owl.prototype.flapWings = function(){
  this.flapCount++;

  console.log("Flap, flap");
} 


module.exports = Owl;