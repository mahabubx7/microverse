// Vowel Count

/**
 * The main idea is to count all the occurring characters in a string. If you have a string like aba,
 * then the result should be {'a': 2, 'b': 1}.
 * @param { String } string
 * @returns { Hash }
 */

// Write your code here
function count (string) {
  // The function code should be here
  let ans = {};
  for (let i=0; i<string.length; i++) {
    if (Object(ans).hasOwnProperty(string[i])) {
      ans[string[i]] += 1;
    } else {
      ans[string[i]] = 1;
    }
  }

  return ans;
}


// ------------------------------------------------------------
// Sample Tests
// ------------------------------------------------------------
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("should pass sample tests", () => {
    assert.deepEqual(count("aba"), { a: 2, b: 1 });
    assert.deepEqual(count("mahabub"), { a: 2, b: 2, h: 1, m: 1, u: 1 });
    assert.deepEqual(count(""), {});
  });
});

