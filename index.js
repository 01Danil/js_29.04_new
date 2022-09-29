// найти периметр квадрата
// сторона *4
//const sideSquare = prompt("enter side square", "10");
/**
 * 
 * @param {number} side 
 * @returns {null | number }
 */
const calkPerimetrSquare = function (side=0) {
	if(side<0){
		return null;
	}
  return side*4;
};
console.log(calkPerimetrSquare());
//console.log(calkPerimetrSquare(sideSquare));
console.log(calkPerimetrSquare(8));
const result = calkPerimetrSquare(8);
if(result===null){
	alert("Введи положительное число")
};