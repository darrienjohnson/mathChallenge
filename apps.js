/*

// 1. Attach this file geometry.js to the index.html file

// 2. Create a function that calculates the area of a rectangle.
//    The function should accept the width and height as arguments
//    and return the area of that rectangle.
//    The area of a rectangle is the width * height

function calcAreaRectangle(width, height) {
  const area = width * height;
  return area;
}
//OR
function calcAreaRectangle(width, height) {
  return width * height;
}

// const calcAreaRectangle = (width, height) => {
//   const area = width * height;
//   return area;
// }

// 3. Create a function that calculates the volume of a rectangular prism.
//    The function should accept the width, height and length as arguments
//    and return the volume of that rectangular prism.
//    The volume of a rectangular prism is the width * height * length
function calVolumeRectangle(width, height, lenght) {
  return width * height * length; 
}
// 4. Create a function that calculates the area of a circle.
//    The function should accept the radius of the circle as an argument
//    and return the area of that circle.
//    The area of a circle is the value of π * radius^2
function calAreaCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}
// 5. Create a function that calculates the volume of a sphere.
//    The function should accept the radius of the sphere as an argument
//    and return the volume.
//    The volume of a circle is: 4/3 *  π * radius^3
function calcVolumeSphere(radius,) {
  return (4/3) * Math.PI * Math.pow(radius, 3);
}
// 6. Use console.log to test each function and output to the JavaScript console
//    Here are the values to test and the expected results
//    -- Area of rectangle that is 5 wide and 22 tall: 110
//    -- Volume of a rectangular prism that is 4.5 x 12.5 x 17.4: 978.7499999999999
//    -- Area of a circle that with a radius of 7.2: 162.8601631620949
//    -- Volume of a spehere with a radius of 7.2: 1563.4575663561109
console.log(calcAreaRectangle(4,5) );
console.log(calVolumeRectangle(4,5,6) );
console.log(calAreaCircle(4) );
console.log(calcVolumeSphere(4) );


*/

//understanding => arrow functions
/**const name = "Jessie";
const greeting = () => alert(`Greetings, ${name}!`);

//is functionally equivalent to
const name = "Jessie";
const greeting = function () {
  alert(`Greetings, ${name}!`);
}

//another example is 
const sayYay = function () {
  return "Yay!";
}
//is functionally equivalent to
const sayYay = () => "Yay!";


function getArea(width, length, unit="inches") {
  const area = width * length
  return `${area}` ${unit}
}

getArea(4,5,undefined)
*/


/**<---Random Number Function--->
*return a number between two numbers.
* @ param {number} lower - the lowest number value.
* @ param {number} upper -the highest number value.
* @ return {number} the random number value.
*/

//Call the function and pass it different values.
function getRandomNumber(lowNumber, highNumber) {
  const randomNumber = Math.floor(Math.random() * (highNumber - lowNumber + 1)) + lowNumber;
  return randomNumber;
//OR return Math.floor(Math.random()*(highNumber-lowNumber +1)) + lowNumber;
}
console.log(getRandomNumber(1, 6));
console.log(getRandomNumber(10, 100));
console.log(getRandomNumber(200, 500));