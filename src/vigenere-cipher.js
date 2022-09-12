const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(notReverse = true) {
    this.isNotReverse = notReverse;
    this.enLang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }

  getTable(lang) {
    const square = [];
    for (let i = 0; i < lang.length; i++) {
      square[i] = [...lang.slice(i), ...lang.slice(0, i)];
    }
    return square;
  }
  encrypt(message, key) {
    if(!message|!key) throw new Error("Incorrect arguments!");
    // process.stdout.write(message, key);
    const table = this.getTable(this.enLang);
    let res = "";
    let priv = 0;
    for (let i = 0; i < message.length; i++) {
      const letter = message[i].toUpperCase();
      if (!this.enLang.includes(letter)) {
        res = res + letter;
        priv++
        continue;
      }

      const secondLetter = key[(i - priv) % key.length].toUpperCase();
      const firstIndex = this.enLang.indexOf(letter);
      const secondIndex = this.enLang.indexOf(secondLetter);
      res = res + table[firstIndex][secondIndex];
    }
    return this.isNotReverse
      ? res
      : [...res].reduce((prev, next) => next + prev);
  }

  decrypt(message, key) {
    if (!message | !key) throw new Error("Incorrect arguments!");
    const table = this.getTable(this.enLang);
    let res = "";
    let cor = 0
    for (let i = 0; i < message.length; i++) {
      const letter = message[i].toUpperCase();
      if (!this.enLang.includes(letter)) {
        res = res + letter;
        cor++
        continue;
      }
      const secondLetter = key[(i - cor) % key.length].toUpperCase();
      const secondIndex = this.enLang.indexOf(secondLetter);
      const arrForSearch = table[secondIndex];
      const letterToSearc =
        this.enLang[arrForSearch.indexOf(letter)];

      res = res + letterToSearc;
    }
    return this.isNotReverse
      ? res
      : [...res].reduce((prev, next) => next + prev);
  }
}

module.exports = {
  VigenereCipheringMachine
};
