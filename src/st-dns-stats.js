import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  let arrDomains = [];
  domains.forEach((el, i) => {
    arrDomains.push(el.split('.').map(el => '.'.concat(el)).reverse())
    
  })
  return arrDomains.reduce((total, el, i, arr)=> {
    let k = '';
    el.forEach((el2) => {
      k += el2;
      
      if (total[k] === undefined) total[k] = 1;
      else total[k] += 1;
    })
    return total;
  }, {})
}
