// Create Phone Number

/**
 * Write a function that accepts an array of
 * 10 integers (between 0 and 9),
 * that returns a string of those numbers in the
 * form of a phone number.
 * @param { Array<Number> } numbers
 * @returns { String }
 */

// Write your code here
function makePart(n) {
  const first = n.slice(0, 3).join('');
  const second = n.slice(3, 6).join('');
  const third = n.slice(6).join('');
  return [first, second, third];
}

function createPhoneNumber(numbers){
  const [ first, second, third ] = makePart(numbers);

  return `(${first}) ${second}-${third}`;
}

// ------------------------------------------------------------
// Sample Tests
// ------------------------------------------------------------
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});
