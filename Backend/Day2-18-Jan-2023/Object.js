//Write a js program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today = new Date(); // Date() is a constructor function
let day = today.getDay(); // getDay() is a method of Date() object
let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is: " + dayList[day]);

let hour = today.getHours(); // getHours() is a method of Date() object
let minute = today.getMinutes(); // getMinutes() is a method of Date() object
let second = today.getSeconds(); // getSeconds() is a method of Date() object
let prepand = hour >= 12 ? " PM " : " AM "; // Ternary operator

// hour = hour >= 12 ? hour - 12 : hour; // use for 12 hour format

if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
console.log(
  "Current Time : " + hour + " : " + minute + " : " + second + prepand
);

// //write a js program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// let side1 = 5;
// let side2 = 6;
// let side3 = 7;
// let s = (side1 + side2 + side3) / 2;
// let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
// console.log("Area of triangle: " + area.toFixed(2)); // toFixed() is a method of Number() object
