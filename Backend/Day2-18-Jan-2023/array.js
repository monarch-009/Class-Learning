// //Challenge 1: Create an Array "myFavSuperhero" and add all your favorite Superheroes name as an array element (Please note , you should add altest 5 Superheroes name)

// let myFavSuperhero = ["Batman", "Superman", "Ironman", "Spiderman", "Thor"];

// //Challenge 2: Print the name of the superhero in the console
// console.log(myFavSuperhero);

// //Challenge 3: Print the length of the array in the console
// console.log(myFavSuperhero.length);

// //Challenge 4: Change the second last element in the array "myFavSuperhero" to your name and print the second last element in the console
// myFavSuperhero[myFavSuperhero.length - 2] = "Aditya";
// console.log(myFavSuperhero[myFavSuperhero.length - 2]); 

// //Challenge 5: Add  your friend's name (friend1) to the array "myFavSuperhero" at the start without using splice method and print it in the console
// myFavSuperhero.unshift("Saurav");
// console.log(myFavSuperhero);

// //Challenge 6: Add  your friend's name (friend2) to the array "myFavSuperhero" at the end without using splice method and print it in the console
// myFavSuperhero.push("Sumit");
// console.log(myFavSuperhero);

// //Challenge 7: Remove the first element from the array "myFavSuperhero" without using splice method and print the array in the console
// myFavSuperhero.shift();
// console.log(myFavSuperhero);

// //Challenge 8: Remove the last element from the array "myFavSuperhero" without using splice method and print the array in the console
// myFavSuperhero.pop();
// console.log(myFavSuperhero);

// //Challenge 9: Add  your friend's name (friend1) to the array "myFavSuperhero" at the 3rd position without removind any element using splice method and print it in the console
// myFavSuperhero.splice(2, 0, "Saurav"); // Splice method takes 3 arguments: 1. Index, 2. Number of elements to be removed, 3. Element to be added at that index position 
// console.log(myFavSuperhero);

// //Challenge 10: Remove the 4th and 5th elemement in the array "myFavSuperhero" and add your friend's name (friend2) at 4th position using splice method and print it in the console
// myFavSuperhero.splice(3, 2, "Sumit");
// console.log(myFavSuperhero);

//Challenge 11: Create a nested array "superheroUniverse" and add 2 arrays to it ("DC" and "Marvel").print the array in the console
let superheroUniverse = [
    ["Batman", "Superman", "Wonderwoman"],
    ["Ironman", "Spiderman", "Thor"]
];

console.log(superheroUniverse);
console.log(superheroUniverse[0]); //print one array from the nested array in the console



