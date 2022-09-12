const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  const obj = {
    "--discard-next": function (arr, index) {
      if (arr[index + 1]) {
        arr[index] = undefined;
        arr[index + 1] = undefined;
      } else arr[index] = undefined;
    },
    "--discard-prev": function (arr, index) {
      if (arr[index - 1]) {
        arr[index] = undefined;
        arr[index - 1] = undefined;
      } else arr[index] = undefined;
    },
    "--double-next": function (arr, index) {
      if (arr[index + 1]) {
        arr[index] = arr[index + 1];
      } else {
        arr[index] = undefined;
      }
    },
    "--double-prev": function (arr, index) {
      if (arr[index - 1]) arr[index] = arr[index - 1];
      else {
        arr[index] = undefined;
      }
    },
  };
  const keys = Object.keys(obj);

  const res = [...arr];

  for (let i = 0; i < res.length; i++) {
    const el = res[i];
    if (keys.includes(el)) {
      obj[el](res, i);
    }
  }

  return res.filter((el) => el != undefined);
}
module.exports = {
  transform,
};
