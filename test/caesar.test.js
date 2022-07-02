const expect = require("chai").expect;
const caesarModule = require("../src/caesar.js");

describe("caesarModule.caesar", () => {
  it("should return false if the shift value is equal to 0, less than -25 or greater than 25", () => {
    const expected = false;
    const actual = caesarModule.caesar("zero", 0, true);
    const actualLess = caesarModule.caesar("less", -26, true);
    const actualGreat = caesarModule.caesar("greater", 26, true);
    const empty = caesarModule.caesar("", 26, true);
    expect(actual).to.equal(expected);
    expect(actualLess).to.equal(expected);
    expect(actualGreat).to.equal(expected);
    expect(empty).to.equal(expected);
  });
  it("should wrap around to the front of the alphabet if a letter is shifted so that it goes off the alphabet", () => {
    const wrap = "a";
    const wrap1 = caesarModule.caesar("z", 1, true);
    expect(wrap).to.equal(wrap1);
  });
  it("should ignore capital letters", () => {
    const caps = "bcd";
    const capsActual = caesarModule.caesar("ABC", 1, true);
    expect(caps).to.equal(capsActual);
  });
  it("should maintain spaces and non alpha characters", () => {
    const notAlphabet = "a b/c";
    const notAlphabetActual = caesarModule.caesar("z a/b", 1, true);
    expect(notAlphabet).to.equal(notAlphabetActual);
  });
});