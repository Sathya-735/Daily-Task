// Task 1: Print numbers from 1 to 10

let i=1;
for(i=1;i<11;i++)
{   
    
    console.log("Task 1:",i); 
}

// Task 2: Print even numbers from 1 to 20

let a=1;
for(a=1;a<21;a++)
{
    if(a%2==0)
    {
        console.log("Task 2:",a)
    }
}

// Task 3: Print odd numbers from 1 to 20

for(b=1;b<21;b++)
{   
    if(b==1){
        console.log("Task 3:",b)
    } 
    else if(b%3==0 && b%1==0)
    {
        console.log("Task 3:",b);
    }
}

// Task 4: Sum of numbers from 1 to 10
let son=1;
let sum=0;
for(son=1;son<11;son++)
{    
    console.log("Task 4:",son); 
}

// Task 6: Print a multiplication table of 5
let e=1;
for(e=1;e<21;e++)
{
    console.log("Task 6:5*",e,"=",e*5);
}

// Task 8: Print numbers from 10 to 1
let p=10;
for(p=10;p>0;p--)
{
    console.log("Task 8:",p);
}

// Task 9: Check if a number is prime
for(prime=0;prime<101;prime++)
{
    
        console.log("Task 9:",prime)
}





// Task 10: Print numbers from 1 to 100, but skip multiples of 3

let numbers=1;
for(numbers=1;numbers<101;numbers++)
{
    if(numbers%3!=0)
    {
        console.log("Task 10:",numbers);
    }
}