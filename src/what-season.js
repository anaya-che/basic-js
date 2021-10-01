import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  const months = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.toTimeString();
  } catch (e) {
    throw new Error("Invalid date!");
  }

  let monthNum = date.getMonth();
  let season = months.filter((val, i, arr) => (i === monthNum))
  return season;
}
