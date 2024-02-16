//JavaScript:
//JavaScript is one of the 3 languages all web developers must learn:
//1. HTML to define the content of web pages
//2. CSS to specify the layout of web pages
//3. JavaScript to program the behavior of web pages

//JavaScript is a lightweight, cross-plantform, single-threaded and interpreted complied programming language. It is well-know for the development of web pages, many non-browser environments also use it.

//JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

//JavaScript is a high-level, often just-in-time compiled, and multi-paradigm programming language. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

//JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

function changeText() {
  document.getElementById("h1").innerHTML = "Thanks for liking my Webpage";
}

function changeColor() {
  document.getElementById("h1").style.color = "blue";
}

function changeFont() {
  document.getElementById("h1").style.fontFamily = "Arial";
}

function changeSize() {
  document.getElementById("h1").style.fontSize = "60px";
}

function changeBackground() {
  document.getElementById("h1").style.backgroundColor = "yellow";
}

function changeBorder() {
  document.getElementById("h1").style.border = "2px solid black";
}

function original() {
  document.getElementById("h1").innerHTML = "Hello, World!";
  document.getElementById("h1").style.color = "black";
  document.getElementById("h1").style.fontFamily = "Times New Roman";
  document.getElementById("h1").style = "40px";
  document.getElementById("h1").style = "white";
  document.getElementById("h1").style = "none";
}

// Class Work 
// 1. Create 3 variables to store an item price. The last price 2 items were ordered(multiplication)
// 2. Tell the user what the total price is before discount
// 3. Inform the user what the average price of the items is before discount
// 4. Inform them the final price after saving 5dollars with promo code "5OFF"

// let item1 = 10;
// let item2 = 20;
// let item3 = 30;
// let total = item1 + item2 + (item3 * 2);
// let average = total / 4;
// let finalPrice = total - 5;

// console.log("The total price before discount is: " + total);
// console.log("The average price before discount is: " + average);
// console.log("The final price after saving 5 dollars with promo code 5OFF is: " + finalPrice);


// Question: Write a code for leap year take input from user

let year = prompt("Enter a year: ");
if (year % 4 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}



