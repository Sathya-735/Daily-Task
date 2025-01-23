// Task 1: Print numbers from 1 to 10

let i=1;
for(i=1;i<11;i++)
{   
    
    console.log("Task 1:",i); 
}

let iw=1;
while(iw<11)
{   
    console.log("Task 1 While loop:",iw); 
    iw++;
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

let aw=1;
while(aw<21)
{
    if(aw%2==0)
    {
        console.log("Task 2 while loop:",aw);
    }
    aw++;
}
// Task 3: Print odd numbers from 1 to 20

for(b=1;b<21;b++)
{   
    if(b%2!==0)
    {
        console.log("Task 3:",b); 
    }
}

let bodd=1;
while(bodd<21)
{
    if(bodd%2!==0)
    {
        console.log("Task 3 While loop",bodd);
    }  
    bodd++;
}

// Task 4: Sum of numbers from 1 to 10
let adds=0;
for(son=1;son<11;son++)
{    
    adds+=son;
    // console.log("Task 4:",son); 
}
console.log("Task 4:",adds);

let addsw=0;
let sonw=0;
while(sonw<11)
{
    addsw+=sonw;
    sonw++;
}
console.log("Task 4 While loop:",addsw);


// Task 5: Factorial of a number (e.g., 5!)
let ad=1;
for(fact=1;fact<6;fact++)
{
    ad*=fact;
}
console.log("Task 5:",ad);

let adw=1;
let factw=1
while(factw<6)
{
    adw*=factw;
    factw++;
}
console.log(`Task 5 While loop: ${adw}`);


// Task 6: Print a multiplication table of 5
let e=1;
for(e=1;e<21;e++)
{
    console.log("Task 6:5*",e,"=",e*5);
}

let ew=1;
while(ew<21)
{
    console.log(`Task 6 While loop:${ew}*5=${ew*5}`);
    ew++;
}

// Task 7: Print the first 10 Fibonacci numbers
let n=9;
let fn=0;
let sn=1;
let ans=0;
console.log("Task 7:",fn);
console.log("Task 7:",sn);

for(let fi=2; fi<=n;fi++)
{
    ans=fn+sn;
    console.log("Task 7:",ans);
    fn=sn;
    sn=ans;
}
    
let nw=9;
let fnw=0;
let snw=1;
let answ=0;
let fiw=2;
console.log(fnw);
console.log(snw);
while(fiw<=nw)
{   
    
    answ=fnw+snw;
    console.log("Task 7 while loop:",answ);
    fnw=snw;
    snw=answ;
    fiw++;
}
// Task 8: Print numbers from 10 to 1
let p=10;
for(p=10;p>0;p--)
{
    console.log("Task 8:",p);
}

let pw=10;
while(pw>0)
{
    console.log("Task 8 While loop:",pw);
    pw--;
}


// Task 9: Check if a number is prime

for(prime=2;prime<101;prime++)
{
    if(prime==2 || prime==3)
    {
        console.log("Task 9",prime);
    }
    else if(prime%2!==0 && prime%3!==0 && prime%5!==0)
    {
        console.log("Task 9",prime);
        
    }
}

let pr=2;
while(pr<101)
{
    if(pr==2 || pr==3)
        {
            console.log("Task 9 While loop:",pr);
        } 
    else if(pr%2!==0 && pr%3!==0 && pr%5!==0)
    {
        console.log("Task 9 While loop:",pr);
    }
    pr++;
}

// Task 10: Print numbers from 1 to 100, but skip multiples of 3


for(numbers=1;numbers<101;numbers++)
{
    if(numbers%3!=0)
    {
        console.log("Task 10:",numbers);
    }
}

let number=1;
while(number<101)
{
    if(number%3!==0)
    {
        console.log("Task 10 while loop:",number);
    }
    number++;
}
