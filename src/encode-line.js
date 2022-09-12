const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
 for(let i = 1; i < str.length;i++) {
  if(i == str.length - 1) {
    if(str[i] == str[i - 1]) res = res + (count+1) + str[i]
    else res = res +(count==1?str[i - 1]: count+ str[i-1]) + str[i]
  }
  else if(str[i] == str[i -1]) {
    count++;
    continue}
  else {

    res = res + (count==1?str[i - 1]: count+ str[i-1])
    count = 1;}
 }
 return res
}

module.exports = {
  encodeLine
};
