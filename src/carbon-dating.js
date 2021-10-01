import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  if (!sampleActivity || typeof(sampleActivity) !== "string") {
    return false;
  }
  let num = parseFloat(sampleActivity);
  if (((num) > MODERN_ACTIVITY) || (num) <= 0 || isNaN(num)) {
    return false;
  }
  const rate = 0.693 / HALF_LIFE_PERIOD;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / num) / rate);

  return result;
}
