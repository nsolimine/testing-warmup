const assert = require("chai").assert;
const queries = require("../exercise");

describe("Gets Sum", function () {
  describe("#addsNumbers", function () {
    it("it takes a string and returns the numbers summed together", function () {
      assert.deepEqual(exercise.addsNumbers([]), 10);
    });
  });
});
