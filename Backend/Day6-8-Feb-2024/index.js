const fs = require('fs'); // Importing File System Module

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

// fs.writeFileSync('read.txt', 'Welcome to Node.js!'); // Writing to a file
// fs.writeFileSync('read.txt', 'Hey, My name is Aditya Singh Rajput ' ); // Overwriting the file
// fs.appendFileSync('read.txt', 'I am a Full Stack Web Developer'); // Appending to the file

// const buf_data = fs.readFileSync('read.txt'); // Reading from a file
// console.log(buf_data); // Output: <Buffer> </Buffer>

// org_data = buf_data.toString(); // Converting Buffer to String
// console.log(org_data);

// fs.renameSync('read.txt', 'readwrite.txt'); // Renaming the file
// console.log('File is written successfully!'); // Output: File is written successfully!

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
// // Create a folder names "Aditya"
// // Create a file in it named bio.txt and write data into it.
// // Add more data into the file at the end of the existing data.
// // Display the data of the file on the console.
// // Rename the file to mybio.txt
// // Delete the file and folder.

// fs.mkdirSync('Aditya'); 
// fs.writeFileSync('Aditya/bio.txt', 'My name is Aditya Singh Rajput');
// fs.appendFileSync('Aditya/bio.txt', 'I am a Full Stack Web Developer'); 

// const data = fs.readFileSync('Aditya/bio.txt', 'utf-8'); 
// console.log(data);
// fs.renameSync('Aditya/bio.txt', 'Aditya/mybio.txt'); 

// fs.unlinkSync('Aditya/mybio.txt'); 
// fs.rmdirSync('Aditya'); 

// console.log('File and Folder is deleted successfully!'); 

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //


