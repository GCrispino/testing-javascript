const assert = require("assert");
const { add, div } = require("../index");

describe("The ADD function tests", () => {
  it("Should return 11 for arguments 5 and 6", () => {
    const actual = add(5, 6);
    const expected = 11;
    assert.equal(actual, expected);
  });
  it("Should throw an error if arguments are not passed in", () => {
    assert.throws(() => {
      add();
    });
  });
});

describe("The DIV function tests", () => {
  it("Should return 3 for arguments 6 and 2", () => {
    const actual = div(6, 2);
    const expected = 3;
    assert.equal(actual, expected);
  });
  it("Should throw an error if arguments are not passed in", () => {
    assert.throws(() => div());
  });
});
