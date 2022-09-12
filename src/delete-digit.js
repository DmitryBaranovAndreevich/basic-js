const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
 let res = -Infinity;
 let m = String(n);
 for(let i = 0; i< m.length;i++) {
  const priv = Number(m.substring(0, i) + m.substring(i+1))
  if(priv> res) res = priv
 }
 return res
}

module.exports = {
  deleteDigit
};
