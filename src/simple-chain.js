const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  state: [],
  getLength() {
    return this.state.length;
  },
  addLink(value) {
    if (value === "undefined") this.value.push(' ')
    else if (value === null) this.state.push('null');
    else this.state.push(value);
    return this;
  },
  removeLink(position) {
    if (
      (position < 1) |
      (position > this.state.length) |
      !Number.isFinite(Number(position)) |
      !Number.isInteger(position)
    ) {
      this.state = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.state = [
      ...this.state.slice(0, position - 1),
      ...this.state.slice(position),
    ];
    return this;
  },
  reverseChain() {
    this.state = this.state.reverse();
    return this;
  },
  finishChain() {
    const res = "( " + this.state.join(" )~~( ") + " )";
    this.state = []
    return res;
  },
};

module.exports = {
  chainMaker
};
