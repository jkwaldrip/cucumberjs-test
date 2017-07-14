/**
 * Created by jainwaldrip on 7/14/17.
 */

"use strict";

var {defineSupportCode} = require("cucumber");
var result = {};

defineSupportCode(function({Then,When}) {

  When(/^I add (\d) and (\d)$/, function(intFirst, intSecond) {
    result["outcome"] = parseInt(intFirst) + parseInt(intSecond);
  });

  When(/^I subtract (\d) from (\d)$/, function(intFirst, intSecond) {
    result["outcome"] = parseInt(intSecond) - parseInt(intFirst);
  });

  Then(/^the result is (\d)$/, function(intExpected) {
    expect(result.outcome).to.equal(parseInt(intExpected));
  });

  Then(/^the result is truthy/, function() {
    expect(!!(result.outcome)).to.be.true;
  });

  Then(/^the result is false?y?/, function() {
    expect(!!(result.outcome)).to.be.false;
  });
});