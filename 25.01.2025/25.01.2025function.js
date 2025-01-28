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
let max_a=50;
let max_b=100;
function find_maxi()
{
    if(max_a>max_b)
    {
        console.log("Task 3:Traditional Greater Value is:",max_a); 
    }
    else{
        console.log("Task 3:Traditional Greater Value is:",max_b); 
    }
}
find_maxi()

let maxi_a=900;
let maxi_b=800;
const fnd_maxi=()=>
{
    if(maxi_a>maxi_b)
    {
        console.log("Task 3:Arrow Function: Greater Value is:",maxi_a); 
    }
    else
    {
        console.log("Task 3:Arrow Function: Greater Value is:",maxi_b);
    }
}
fnd_maxi()


// Task 4: Write a Function to Find the Maximum of Two Number
let mini_a=150;
let mini_b=100;
function find_mini()
{
    if(mini_a<mini_b)
    {
        console.log("Task 4:Traditional Minimum Value is:",mini_a); 
    }
    else{
        console.log("Task 4:Traditional Minimum Value is:",mini_b); 
    }
}
find_mini()

let min_a=300;
let min_b=800;
const fnd_min=()=>
{
    if(min_a<min_b)
    {
        console.log("Task 4:Arrow Function: Minimum Value is:",min_a); 
    }
    else
    {
        console.log("Task 4:Arrow Function: Minimum Value is:",min_b);
    }
}
fnd_min()




// Task 5 : Write a Function to Concatenate Strings

let fn="Sathya"
let ln="S"

function concat()
{
    console.log("Task 5:Traditional:",fn+ln);
}
concat()

let fin="";
let lan="";
let plus="";

const concate=(lan,plus,fin)=>
{
    console.log("Task 5:Arrow Function:",fin+plus+lan);
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
strings=["s","a","t"]
function Rev()
{
    for(let re=strings.length-1;re>=0;re--)
    {   
        console.log("Task 7:Traditional:",strings[re]);   
    }    
}
Rev()

string=["s","i","v","a"]
const rev=()=>
{
    for(let r=string.length-1;r>=0;r--)
    {
        console.log("Task 7:Arrow Function:",string[r]); 
    }
}
rev()



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
// Task 9: Write a Function to Convert Celsius to Fahrenheit

let Celsius=0;
function Celsius_To_Fahrenheit(Celsius)
{   
    let Fahrenheit=(Celsius * 9/5) + 32;
    console.log("Task :9 Traditional",Fahrenheit);
}
Celsius_To_Fahrenheit(1)
Celsi=0;
const Celsi_To_Fahren=()=>
{
    let Fahren=(Celsius * 9/5) + 32;
    console.log("Task :9 Arrow Function",Fahren);
}
Celsi_To_Fahren()

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




