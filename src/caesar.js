// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //turning message into array
  function getArrayFromString(string) {
    return Array.from(string);
  }

  function shiftLetter(resultingIndex, shift) {
    let newIndex = (resultingIndex + shift) % 26;
    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }
    return alphabet[newIndex];
  }
  //if array is equal to a letter , then shift that letter and push it.
  function createShiftedArray(string, shift) {
    let shiftedArray = getArrayFromString(string).map((character) => {
      if (alphabet.indexOf(character) === -1) {
        //check if the character is in the array
        return character;
      }
      return shiftLetter(alphabet.indexOf(character), shift);
    });
    return shiftedArray;
  }

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    const string = input.toLowerCase();
    let updatedShift = shift;

    if (encode === false) {
      updatedShift = shift * -1;
    }

    return createShiftedArray(string, updatedShift).join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
