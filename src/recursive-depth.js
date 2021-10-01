import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    let n = 0;
    arr.forEach((val) => {
      if (Array.isArray(val)) {
        n = Math.max(this.calculateDepth(val), n);
      }
    })
    return n + 1;
  }
}
