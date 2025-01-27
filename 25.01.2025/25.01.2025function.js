// Task 1: Write a Function to Add Two Numbers

let a=0;
let b=0;

function add(a,b)
{
    console.log("Task 1:Traditional",a+b)
}
add(10,20)

let c=0;
let d=0;

const addition=(c,d)=>
{
    console.log("Task 1:Arrow function",c+d)
}
addition(5,20)


// Task 2: Write a Function to Check Even or Odd

e=10;

function even_or_odd()
{
    if(e%2!==0)
    {
        console.log("Task 2:Traditional:Odd");
    }
    else{
        console.log("Task 2:Traditional:Even");
        
    }
}
even_or_odd()

let E=0;

const Even_or_odd=(E)=>
{
    if(E%2!==0)
        {
            console.log("Task 2:Arrow function:Odd");
        }
        else{
            console.log("Task 2:Arrow function:Even");
            
        }
}

Even_or_odd(15)


// Task 3: Write a Function to Find the Maximum of Two Number

// Task 4: Write a Function to Find the Maximum of Two Number


// Task 5 : Write a Function to Concatenate Strings

let fn="Sathya"
let ln="S"

function concat()
{
    console.log("Task 3:Traditional:",fn+ln);
}
concat()

let fin="";
let lan="";
let plus="";

const concate=(lan,plus,fin)=>
{
    console.log("Task 3:Arrow Function:",fin+plus+lan);
}
concate("Sathya",".","S")

// Task 6: Write a Function to Calculate Factorial

let fact=0;
let result=1;
function Factorial(fact)
{
for(i=1;i<=fact;i++)
{
    result*=i;
}
console.log("Task 6:Traditional",result);
}
Factorial(6)
let Fact=0;
Result=1;
const factorial=(Fact)=>
{
    for(let f=1;f<=Fact;f++)
    {
        Result*=f;
    }
    console.log("Task 6:Arrow Function",Result);
    
}
factorial(5)

// Task 7: Write a Function to Reverse a String




// Task 8: Write a Function to Find the Length of an Array
let arrlength=[1,2,3,4];
let arlen=[1,2,3,4,5,6]
function findlengthofarray() {

    console.log("Task 8:Traditional:",arlen.length);
}
findlengthofarray()

let al=[1,2,3,4,5,6,7]
const alength=()=>
{
    console.log("Task 8:Arrow function",al.length);
    
}
alength()


// Task 10: Write a Function to Filter Even Numbers from an Array
let arr=[1,2,3,4,5,6,7,8,9,10]
console.log("Task 10 Traditional:");

function filter_even()
{
    
    for(let eve=0;eve<=arr.length;eve++)
    {   
        if(arr[eve]%2==0)
        {
            console.log(arr[eve]);
        }
    }
}
filter_even()

let arra=[1,2,3,4,5,6,7,8,9,10];
console.log("Task 10 Arrow function:");
const Filter_even=()=>
{
    for(let even=0;even<=arra.length;even++)
        {   
            if(arra[even]%2==0)
            {
                console.log(arra[even]);
            }
        }
}
Filter_even()