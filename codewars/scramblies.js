// Scramblies

/**
 * Complete the function scramble(str1, str2)
 *  that returns true if a portion of str1 characters can be rearranged
 *  to match str2, otherwise returns false.
 * @param {*} str1
 * @param {*} str2
 * @returns { boolean }
 */

// Write your code here
function scramble(str1, str2) {

  const reducer = (container, element) => {
    if(container[element] === undefined) {
      container[element] = 1;
      return container;
    } else {
      container[element] += 1;
       return container;
    }
  }

  let container1 = str1.split('').reduce(reducer,{});

  let container2 = str2.split('').reduce(reducer,{});

  for (let prop in container2) {
    if(!container1[prop]) return false;

    if(container1[prop] < container2[prop]) return false;
  }

  return true;
}

// ------------------------------------------------------------
// Sample Tests
// ------------------------------------------------------------
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Sample Tests', function(){
  it("Tests", () => {
    assert.strictEqual(scramble('rkqodlw',           'world'      ), true );
    assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
    assert.strictEqual(scramble('katas',             'steak'      ), false);
    assert.strictEqual(scramble('scriptjavx',        'javascript' ), false);
    assert.strictEqual(scramble('scriptingjava',     'javascript' ), true );
    assert.strictEqual(scramble('scriptsjava',       'javascripts'), true );
    assert.strictEqual(scramble('javscripts',        'javascript' ), false);
    assert.strictEqual(scramble('jscripts',          'javascript' ), false);
    assert.strictEqual(scramble('aabbcamaomsccdd',   'commas'     ), true );
    assert.strictEqual(scramble('commas',            'commas'     ), true );
    assert.strictEqual(scramble('sammoc',            'commas'     ), true )
  });

  it("Large inputs test", () => {
    let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
    let s2 = "zyxcba".repeat(9_000);
    assert.strictEqual(scramble(s1, s2), true);
  });
});
