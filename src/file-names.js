const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function reName(el,state) {
 if (state[el]) {
  const name =reName((el + `(${state[el]})`), state);
   state[el]++;
   return name
 } else {
   state[el] = 1;
   return el;
 }
}

function renameFiles(names) {
  const state = {}
  const res =[];
  for(let i = 0; i< names.length;i++) {
   const name = reName(names[i],state)
   res.push(name)
  }
return res
}

module.exports = {
  renameFiles
};
