//var name = "sarveen";
//console.log(name);

//let fname = "sarveen";
//console.log(fname);

// const lname="sarveen"
//console.log(lname)

//var name = "sarveen";
//name = "Harleen";
//console.log(name);

//let fname = "sarveen";
//fname = "harleen";
//console.log(fname);

//The following will give error as we cannot change the value for const
//const lname="preet"
//lname="shahi"
//console.log(lname)

function abc(lpu) {
  if (lpu) {
    let name = "sarveen";
    const lname = "shahi";
    console.log("my name is " + name + " " + lname);
  }
}
abc(true);
function abc(lpu) {
  if (lpu) {
    var name = "sarveen";
    var lname = "shahi"; //concept of function and block scope.
    //var is function scope whereas let and const is blockscope.
  }
  console.log("my name is " + name + " " + lname);
}
abc(true);
