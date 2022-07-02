const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybiusModule.polybius", () => {
  it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return `false`.", () => {
    const expected = false;
    const actual = polybiusModule.polybius("12 11212", false);
    expect(actual).to.equal(expected);
  });
  it("When encoding, your output should still be a string", () => {
    const strings = "112131";
    const stringActual = polybiusModule.polybius("abc", true);
    expect(stringActual).to.equal(strings);
  });
  it("should ignore capital letters", () => {
    const caps = "112131";
    const capsActual = polybiusModule.polybius("ABC", true);
    expect(caps).to.equal(capsActual);
  });
  it("should maintain spaces throughout", () => {
    const spaces = "11 21 31";
    const spacesActual = polybiusModule.polybius("a b c", true);
    expect(spacesActual).to.equal(spaces);
  });
  it("When decoding, the letters 'i' and 'j' should somehow be shown.", () => {
    const sharedDecode = "(i/j)(i/j)";
    const sharedDecodeActual = polybiusModule.polybius("4242", false);
    expect(sharedDecodeActual).to.equal(sharedDecode);
  });
});