// 1. Given the array let fruits = ["Apple", "Banana", "Orange"];, how would you add "Mango" to the end of the array?

let fruits = ["Apple", "Banana", "Orange"];

fruits.push("Mango")
console.log("Task 1:",fruits);

// 2. How can you remove "Orange" from the fruits array?

fruits.splice(2,1)
console.log("Task 2:",fruits);

// 3. How would you add "Pineapple" to the beginning of the fruits array?

fruits.unshift("Pineapple")
console.log("Task 3:",fruits);


// 4. How can you remove "Apple" from the fruits array?

fruits.splice(1,1)
console.log("Task 4:",fruits);

// 5. How would you extract the first two elements from the fruits array? 
let fruit = ["Apple", "Banana", "Orange","mango","avacoda"];

fruit.splice(2,fruit.length)
console.log("Task 5:",fruit);

// 6. How can you replace "Banana" with "Strawberry" in the fruits array? 

fruit[1]="Strawberry";
console.log("Task 6:",fruit);

// 7. How would you reverse the order of elements in the fruits array? 

let numbers=[5,4,3,2,1,0]

numbers.reverse()
console.log("Task 7:",numbers);

// 8. How can you sort the fruits array alphabetically?

let frts = ["Banana", "Apple", "Cova"];

frts.sort()
console.log("Task 8:",frts);

// 9.  copyWithin

let number=[1,2,3,4,5,6];

number.copyWithin(3,0,2)
console.log("Task 9:",number);


// 10 . Fill the 0 all Array Elements

let f=[1,2,3,4,5,6]
f.fill(1,1)
console.log("Task 10:",f);
