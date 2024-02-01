//Challenge 1: Create a for loop to print all even numbers till 100 in the console

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// --------------------------------------------------------------------------------------------------------------

// Challenge 2: Create a while loop to print all odd numbers till 100 in the console

// let i=0;
// while(i<=100){
//     if(i%2!=0){
//         console.log(i);
//     }
//     i++;
// }

// --------------------------------------------------------------------------------------------------------------

// Challenge 3: Create a do while loop to print the mulitiples of 3 till 100 in the console

// let i=0;
// do{
//     if(i%3==0){
//         console.log(i);
//     }
//     i++;
// }while(i<=100);

// --------------------------------------------------------------------------------------------------------------

// Challenge 4: Create a for loop to print all  the prime numbers till 100 in the console

for(let i=2;i<=100;i++){
    let flag = 0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag = 1;
            break;
        }
    }
    if(flag==0){
        console.log(i);
    }
}

// --------------------------------------------------------------------------------------------------------------