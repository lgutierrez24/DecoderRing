// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabetArray = [
    ["a", 11],
    ["b", 21],
    ["c", 31],
    ["d", 41],
    ["e", 51],
    ["f", 12],
    ["g", 22],
    ["h", 32],
    ["i", 42],
    ["j", 42],
    ["k", 52],
    ["l", 13],
    ["m", 23],
    ["n", 33],
    ["o", 43],
    ["p", 53],
    ["q", 14],
    ["r", 24],
    ["s", 34],
    ["t", 44],
    ["u", 54],
    ["v", 15],
    ["w", 25],
    ["x", 35],
    ["y", 45],
    ["z", 55],
  ];
  const numberArray = [
    ["a", 11],
    ["b", 21],
    ["c", 31],
    ["d", 41],
    ["e", 51],
    ["f", 12],
    ["g", 22],
    ["h", 32],
    ["(i/j)", 42],
    ["k", 52],
    ["l", 13],
    ["m", 23],
    ["n", 33],
    ["o", 43],
    ["p", 53],
    ["q", 14],
    ["r", 24],
    ["s", 34],
    ["t", 44],
    ["u", 54],
    ["v", 15],
    ["w", 25],
    ["x", 35],
    ["y", 45],
    ["z", 55],
  ];

  function polybius(input, encode = true) {
    let outputWord = "";

    if (encode) {
      const inputArray = input.toLowerCase().split("");
      for (let letter of inputArray) {
        const matching = alphabetArray.find((pairs) => letter === pairs[0]);
        if (!letter.match(/[a-z]/)) {
          outputWord += letter;
        } else outputWord += matching[1];
      }
      return outputWord;
    }

    if (!encode) {
      let trimInput = input.replace(/ /g, "");
      let decodeArray = trimInput.split("");
      let length = decodeArray.length;
      if (!(length % 2 === 0)) return false;

      let outputArray = [];
      for (i = 0; i < input.length; i = i + 2) {
        let numOne = input[i];
        let numTwo = input[i + 1];
        if (numOne === " ") {
          outputArray.push(" ");
          i = i - 1;
        } else {
          outputArray.push(`${numOne}${numTwo}`);
        }
      }
      for (let number of outputArray) {
        if (number === " ") {
          outputWord += number;
        } else {
          const numberMatch = numberArray.filter(
            (pairedSets) => number == pairedSets[1]
          );
          outputWord += numberMatch[0][0];
        }
      }
      return outputWord;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };