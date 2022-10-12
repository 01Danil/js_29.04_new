/**
 *
 * @param {numer} a
 * @param {numer} b
 * @returns {boolean}
 */
let checkMultiplicity = function (a, b) {
  return a % b === 0;
};

// /**
//  *
//  * @param {numer} number
//  * @returns {boolean}
//  */
// let checkNumber = function (side1 = 1, side2 = 1, side3 = 10) {
// 	return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
// };
// console.log(checkNumber());

// const calcVolumeSfera = function (radius=100, PI=3.14){
// 	if(radius<=0){
// 		return NaN;
// 	}
// 	return 4*PI*(radius**3)/3;
// }
// console.log(calcVolumeSfera());

// const inputSomething= function () {
// 	const input = prompt('Input something')
// 	if(input) {
// 		return 'You input:' + input;
// 	}
// 	return 'return input';
// };

// console.log(inputSomething());

// const inputSomething= function () {
// 	const input = prompt('Input something')
// 	if(input==='' || input===null ) {
// 		return 'return input';
// 	}
// 	return 'You input:' + input;
// };

// console.log(inputSomething());

