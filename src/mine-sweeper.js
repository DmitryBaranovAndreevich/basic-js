const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function search(indY, indX, arr) {
  const height = arr.length;
  const width = arr[0].length;
  let count = 0;
  for (let i = indY - 1; i <= indY + 1; i++) {
    for (let j = indX - 1; j <= indX + 1; j++) {
      if (
        (0 <= i) &
        (i < height) &
        (0 <= j) &
        (j < width) &
        ((i != indY) | (j != indX))
      ) {
        if (arr[i][j]) count++;
      }
    }
  }
  return count;
}

function minesweeper(matrix) {
  const res = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[0].length; j++) {
      if (matrix[i][j]) res[i][j] = 1;
      else {
        console.log(i, j);
        res[i][j] = search(i, j, matrix);
      }
    }
  }
  return res;
}


module.exports = {
  minesweeper
};
