/**
 *
 * @param {numer} a
 * @param {numer} b
 * @returns {boolean}
 */
let checkMultiplicity = function (a, b) {
  return a % b === 0;
};

/**
 *
 * @param {numer} number
 * @returns {boolean}
 */
let checkNumber = function (number = 0, bigger = 20, aliqout = 7) {
  return number > bigger && number % aliqout === 0;
};
