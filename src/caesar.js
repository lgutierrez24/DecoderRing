// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1;
    let lowerCaseInput = input.toLowerCase();
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split(""); //we need to split up the alphabet by each letter
    let newWord = "";

    for (let letter of lowerCaseInput)
      if (!alphabetArray.includes(letter)) newWord += letter;
      else {
        let letterIndex = alphabetArray.indexOf(letter);
        let indexShift = letterIndex + shift;
        indexShift = indexShift > 25 ? indexShift -= 26 : indexShift < 0 ? indexShift += 26 : indexShift;
        newWord += alphabetArray[indexShift];
      }
    return newWord;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };