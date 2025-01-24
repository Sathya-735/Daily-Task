// Task 1: Print the elements of an array

let fridge=["Milk","Ice-cream","vegetables"];
for(i=0;i<3;i++)
{
console.log("Task 1:",fridge[i]);
}
// Task 2: Reverse the elements of an array

let Reverse=["Milk","Ice-cream","vegetables"];
for(r=2;r>=0;r--)
{   
    console.log("Task 2: In reverse order:",Reverse[r]);
}


// Task 3: Find the maximum number in an array

let maximum=[5,4,3,2,1,90]
console.log("Shortcut",Math.max(...maximum));

let maxiarray=[10,20,30,40];
let maxi=maxiarray[0];
for(mx=1;mx<maxiarray.length;mx++)
{
    if(maxiarray[mx]>maxi)
    {
        maxi=maxiarray[mx];
    }
}
console.log("task 3:",maxi);

// Task 4: Find the minimum number in an array

let minarray=[10,20,30,40];
let mini=minarray[0];
for(mn=1;mn<minarray.length;mn++)
{
    if(minarray[mn]<mini)
    {
        mini=minarray[mn];
    }
}


console.log("task 3:",mini);

// Task 6: Count digits in a number

let digit=[50,60,70,80];

    console.log("Task 6:",digit.length);

// Task 7: Sum of digits in a number

let sum=[5,10,11,12];
let add=0;
for(s=0;s<4;s++)
{   
    add+=sum[s];
      
}
console.log("Task 7:",add);

// Task 8: Print all elements of an object

let student={
    name:"Murugan",
    Roll:"1",
    std:"+2",
    Age:"16"
}

let student_keys=Object.keys(student);
let student_values=Object.values(student);

for(let stu=0;stu<student_keys.length;stu++)
{
    console.log("Task 8",student_keys[stu],student_values[stu]);
    
}

// Task 9: fibonacci numbers

let fib=[0,1];
let answer=0;
console.log("Task 9 Fibonacci:",fib[0]);
console.log("Task 9 Fibonacci:",fib[1]);

for(f=2;f<10;f++)
{   
    answer=fib[0]+fib[1];
    console.log("Task 9 Fibonacci:",answer);
    fib[0]=fib[1];
    fib[1]=answer;
}

let fibn=[0,1];
for(fi=2;fi<10;fi++)
{
  fibn[fi]=fibn[fi-1]+fibn[fi-2];
}

console.log(fibn);
