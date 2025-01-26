// Task 1: Print the elements of an array

let fridge=["Milk","Ice-cream","vegetables"];
for(const inside of fridge)
{
console.log("Task 1 For of:",inside);
}

// Task 2: Reverse the elements of an array

let arrayfridge=["Milk","Ice-cream","vegetables"];
        // doubt


// Task 3: Find the maximum number in an array

let big=[5,4,3];
let bvalues=big[0];
for(const bigs of big)
{
    if(bigs>bvalues)
    {
        bvalues=bigs;
    }
}
console.log("for of max",bvalues);

// Task 4: Find the minimum number in an array

let small=[5,4,3];
let svalues=small[0];
for(const sms of small)
{
    if(sms<svalues)
    {
        svalues=sms;
    }
}
console.log("for of min",svalues);


// Task 6: Count digits in a number

let digit=[50,60,70,80];

    console.log("Task 6:",digit.length);

// Task 7: Sum of digits in a number

let sum=[5,10];
let add=0;
for(const s of sum)
{   
    add+=s;
      
}
console.log("Task 7:",add);

// Task 8: Print all elements of an object

let student={
    name:"Murugan",
    Roll:"1",
    std:"+2",
    Age:"16"
}

for(const su in student)
{
    console.log("Task 8 for",su);
    
}

// Task 9: fibonacci numbers

// let fib=[0,1];
// let answer=0;
// console.log("Task 9 Fibonacci:",fib[0]);
// console.log("Task 9 Fibonacci:",fib[1]);
// for(f=2;f<10;f++)
// {   

//     answer=fib[0]+fib[1];
//     console.log("Task 9 Fibonacci:",answer);
//     fib[0]=fib[1];
//     fib[1]=answer;
// }

let fibn=[0,1];
for(fi=2;fi<10;fi++)
{     
  fibn[fi]=fibn[fi-1]+fibn[fi-2];
}
console.log(fibn);
for(const f of fibn)
{
    console.log(f);
}


