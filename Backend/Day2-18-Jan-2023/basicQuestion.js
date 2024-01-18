// 1. Use the logical operators to find the age of a person Lies between 10 and 20

// let age1 = 15;
// let age2 = 25;
// let age3 = 5;
// let age4 = 10;
// let age5 = 20;

// console.log("Age1: " + (age1 > 10 && age1 < 20));
// console.log("Age2: " + (age2 > 10 && age2 < 20));
// console.log("Age3: " + (age3 > 10 && age3 < 20));
// console.log("Age4: " + (age4 > 10 && age4 < 20));
// console.log("Age5: " + (age5 > 10 && age5 < 20));

// 2. Demonstrate the use of switch case in javascript
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;    
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;    
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;    
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
        break;
}

// 3. Write a js program to find whether a given number is divisible by 2 and 3.
let num = 6;

if (num % 2 == 0 && num % 3 == 0) {
    console.log("Number is divisible by 2 and 3");
}
else {
    console.log("Number is not divisible by 2 and 3");
}

// 4. Write a js program to find whether a given number is divisible by 2 or 3.
let num1 = 6;

if (num1 % 2 == 0 || num1 % 3 == 0) {
    console.log("Number is divisible by 2 or 3");
}
else {
    console.log("Number is not divisible by 2 or 3");
}

