// 1. Given the fruits array, how would you find the position of "Banana"?

let fruits=["Apple","Mango","Banana","Orange","kiwi"];
let find_the_position=fruits.indexOf("Banana");
console.log("Task 1:",find_the_position);

// 2. How can you check if "Grapes" is in the fruits array? 

let fruit=["Apple","Mango","Banana","Grapes"];
let Present_or_not=fruit.includes("Grapes");
console.log("Task 2:",Present_or_not);

// 3. How would you create a shallow copy of the fruits array? 
let num=[1,2,3,4];
let shallow_array=num.slice();
console.log("Task 3:",num);
console.log("Task 3 Shallow copy:",shallow_array);

// 4. How can you combine the fruits array with another array ["Grapes", "Kiwi"]?

let con_cat_array=["Grapes", "Kiwi"];

console.log("Task 4:Before concat Fruits array",fruits);

console.log("Task 4:After concat",fruits.concat(con_cat_array));

// 5. How would you extract the first two elements from the fruits array?

sli=[10,20,30,40];

console.log("Task 5: Before slice",sli);

console.log("Task 5: After slice",sli.slice(0,2));

// 6. How can you filter out fruits that do not contain the letter "a" from the fruits array?
// let fru=["Apple","Mango","Banana","Orange","kiwi"];

// let do_not_contain_a=fru.find((v)=>{
//     return v.length!=="A";
// })
// console.log("Task 6:",do_not_contain_a);

// 7. How would you iterate over the fruits array and print each fruit using forEach()? 

// let iterate_forEach=fru.forEach((vls)=>{
//     return vls;
// })
// console.log(iterate_forEach);






// 8. How can you check if every fruit name in the fruits array has more than 3 characters? 
let frits=["Apple","Mango","Banana","Orange","kiwi","haw"];

let morethan3=frits.map((frtlength)=>{
    return frtlength.length>3;
});
console.log("Task 8:",morethan3);

// 9. How would you find the first fruit in the fruits array that starts with the letter "O"? 






// 10. How can you join all the elements of the fruits array into a single string separated by commas? 

join_by_commas=fruits.join(",");

console.log("Task 10:",join_by_commas);

// 11. How would you remove the second element ("Banana") from the fruits array?

let f=["Apple","Mango","Banana","Orange","kiwi","haw"];
console.log("Task 11:",f)
f.splice(2,1)
console.log("Task 11:",f);














