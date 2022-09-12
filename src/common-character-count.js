const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(s1, s2) {
  const hashTab = [...s1].reduce((priv, el) => {
    return { ...priv, [el]: el in priv ? priv[el] + 1 : 1 };
  }, {});

  const hashTab1 = [...s2].reduce((priv, el) => {
    if (el in hashTab) priv = { ...priv, [el]: el in priv ? priv[el] + 1 : 1 };
    return priv;
  }, {});

  return Object.keys(hashTab1).reduce(
    (priv, key) => priv + Math.min(hashTab[key], hashTab1[key]),
    0
  );
}

module.exports = {
  getCommonCharacterCount
};
