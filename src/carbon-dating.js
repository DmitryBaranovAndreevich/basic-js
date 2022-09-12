const { NotImplementedError } = require('../extensions/index.js');

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
function dateSample(str) {

  if (!Number.isFinite(Number(str))| str <= 0| str > 15| typeof str != 'string')
    return false;
 const res =
   Math.ceil(HALF_LIFE_PERIOD * Math.log(Number(str) / MODERN_ACTIVITY)/ (-0.693));
  return res;
}

module.exports = {
  dateSample
};
