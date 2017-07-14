/**
 * Created by jainwaldrip on 7/14/17.
 */

"use strict";

var {defineSupportCode} = require("cucumber")
var result = {};

defineSupportCode(function({Then,When}) {

  When(/^I add (\d) and (\d)$/, function(intFirst, intSecond) {
    result["outcome"] = parseInt(intFirst) + parseInt(intSecond);
  });

  Then(/^the result is (\d)$/, function(intExpected) {
    expect(result.outcome).to.equal(parseInt(intExpected));
  });
});