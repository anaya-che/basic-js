const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
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
};
