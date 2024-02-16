// const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem() / 1024 / 1024 / 1024); //Free memory in Gb
// console.log(os.totalmem() / 1024 / 1024 / 1024);
// console.log(os.homedir());
// console.log(os.uptime());

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const path = require('path');

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.join(__dirname, 'test', 'hello.html'));
console.log(path.resolve(__dirname, 'test', 'hello.html'));


