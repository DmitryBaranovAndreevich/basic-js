const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
 return domains.reduce((res,el) => {
  const arr =el.split(".").reverse();
  arr.reduce((priv,el) => {
      priv =priv + '.' + el
      res = { ...res, [priv]: priv in res ? res[priv] + 1 : 1 };
      return priv
  },'');
  return res
 },{})
}

module.exports = {
  getDNSStats
};
