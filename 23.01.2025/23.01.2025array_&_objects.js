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


// Task 5: Count the number of vowels in a string
let vowels=["sathiya"];
let ad1=0;
let ad2=0;
let ad3=0;
let ad4=0;
let tot=ad1+ad2+ad3+ad4;
for(v=0;v<6;v++)
{
    if(vowels[v]=="s")
    {
        ad1+=1;
    }
    console.log(ad1);
}


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
