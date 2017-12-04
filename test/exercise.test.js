const assert = require("chai").assert;
const exercise = require("../exercise");
const numbers = require("../exercise");

describe("Gets Sum", function () {
  describe("#addsNumbers", function () {
    it("it takes a string and returns the numbers summed together", function () {
      assert.equal(exercise.addsNumbers(numbers), 10);
    });
  });
});
