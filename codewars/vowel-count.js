// Vowel Count

/**
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case
 * letters and/or spaces.
 * @param { String } str
 * @returns { Int }
 */

// Write your code here
function isVowel(c) {
  if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') return true;
  return false;
}

function getCount(str) {
  let v = 0;
  for (let i=0; i<str.length; i++) {
    if (isVowel(str[i])) {
      v += 1;
    }
  }
  return v;
}


// ------------------------------------------------------------
// Sample Tests
// ------------------------------------------------------------
const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});
