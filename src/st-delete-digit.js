import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  let arr = [];
  const numStr = n.toString();
  for (let i = 0; i < numStr.length; i++) {
    let str = numStr.slice(0, i) + numStr.slice(i + 1);
    arr.push(str);
  } 
  
  arr.sort((a, b) => {
    return b - a;
  });

  return Number(arr[0]);
}
