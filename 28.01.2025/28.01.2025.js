// 1 )Write a Function to Add Two Numbers
function addNumbers(a,b)
{
   let c=a+b;
    return c;
}
console.log("Task 1:",addNumbers(10,10));

// 2) Function with Default Parameters
function greet(name) 
{   
    if(name)
    {
    return name;
    }   
    else{
        return "Hello Guest!"
    } 
}
greet();

console.log("Task 2:",greet());

// 3 ) Arrow Function to Find Square of a Number
const given_value=2;
const square=()=>
{
    console.log(`Task 3: Given Value:${given_value} Square of Givenvalue is:${given_value*given_value}`);   
}
square();
// 4) Function to Find the Largest of Three Numbers
x=6;
y=10;
z=3;
function findLargest(x=6,y=10,z=3)
{
    if(x>y && x>z)
    {   
        return x;
    }
    else if(y>x && y>z)
        {
            return y;
        }    
    else if(z>x && z>y) 
    {
        return z;
    }
}
findLargest();
console.log(`Task 4:The three given Value x=${x} y=${y} z=${z} The biggest Value is:`,findLargest());

// 5) Function Using Callback



// 6) Function to Calculate the Area of a Circle
let pi=3.141592653589793;
function calculateCircleArea(pi,radius)
{   
    return pi*radius*radius;
}
calculateCircleArea();
console.log("Task 6:",calculateCircleArea(pi,6));

// 7 )Function to Convert Celsius to Fahrenheit
let  Celsius=36;
(function Celsius_To_Fahrenheit()
{
   let Fahrenheit=(Celsius * 9/5) + 32;
   console.log(`Task 7: ${Celsius}°Degree Celsius is Equal to ${Fahrenheit}°Fahrenheit`);
})();