const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber,turnsSpeed) {

   function calc() {
     let disks = 1
     let count = 0
     while( disks <= disksNumber) {
      count = count + 2**(disks - 1)
      disks++;
     }
     return count
   }
const mov = calc();
const time = Math.floor((mov * 3600) / turnsSpeed);
return { turns: mov, seconds: time };
}

module.exports = {
  calculateHanoi
};
