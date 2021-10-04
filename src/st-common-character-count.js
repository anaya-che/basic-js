import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let res = 0;
  arr1.forEach((el) => {
    if (arr2.indexOf(el) !== -1) {
      arr2.splice(arr2.indexOf(el), 1);
      res += 1;
    }
  });

  return res;
}
