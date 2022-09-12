const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const state = {
    repeatTimes: options.repeatTimes ? options.repeatTimes : 1,
    separator: options.separator ? options.separator : "+",
    addition: (options.addition !== undefined)
      ? String(options.addition)
      : undefined,
    additionRepeatTimes: options.additionRepeatTimes
      ? options.additionRepeatTimes
      : 1,
    additionSeparator: options.additionSeparator
      ? options.additionSeparator
      : "|",
  };
  console.log(state.addition)
  let after =
    (state.addition != undefined)
      ? (String(state.addition) + String(state.additionSeparator))
          .repeat(state.additionRepeatTimes)
          .slice(0, -state.additionSeparator.length)
      : "";
  let res = (
    String(str) + after
     +
    String(state.separator)
  )
    .repeat(state.repeatTimes)
    .slice(0, -state.separator.length);
    return res
}

module.exports = {
  repeater
};
