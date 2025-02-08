//Task 1 : Concatenate Two Strings  Description: Concatenate two strings, "Hello" and "World", with a space between them.  Expected Output: "Hello World"

const str1="Hello";
const str2="world";

console.log("Task 1:",str1.concat(" ",str2));

//Task 2 : Find the Length of a String  Description: Find the length of the string "JavaScript".  Expected Output: 10 
const str_length_10="          "

console.log("Task 2:",str_length_10.length);

// Task 3 : Extract a Substring  Description: Extract the word "World" from the string "Hello, World!".  Expected Output: "World" 

const extract="Hello, World!";

console.log("Task 3:",extract.substring(7,12));

console.log("Task 3:",extract.slice(7,12));

// Task 4 : Convert a String to Uppercase  Description: Convert the string "javascript" to uppercase.  Expected Output: "JAVASCRIPT" 

const uppercase='sathya';

console.log("Task 4:",uppercase.toUpperCase());

// Task 5 : Check if a String Contains a Substring  Description: Check if the string "I love coding" contains the substring "love".  Expected Output: true 

const find_sub_string="I love coding";

console.log("Task 5:",find_sub_string.includes("love"));

// Task 6 : Replace a Substring  Description: Replace "World" with "JavaScript" in the string "Hello, World!".  Expected Output: "Hello, JavaScript!"

const Replace="Hello, World!";
console.log("Task 6:Before Replace:",Replace);


console.log("Task 6:After Replace:",Replace.replace("World!","JavaScript!"));

// Task 7 : Trim Whitespace  Description: Trim the leading and trailing whitespace from the string " Hello, World! ".  Expected Output: "Hello, World!"

const Trim=" Hello, World! ";

console.log("Task 7:length Actual",Trim.length);
console.log(Trim);
console.log("Task 7:length After Trim",Trim.trim().length);
console.log(Trim.trim());

console.log("Task 7:After Trim length of Trim variable reduced its length");

// Task 8 : Split a String into an Array  Description: Split the string "apple,banana,cherry" into an array of fruits.  Expected Output: ["apple", "banana", "cherry"] 

const string="apple,banana,cherry";

console.log("Task 8:Before split",string);

console.log("Task 8:After split",string.split());

// Task 9 : Repeat a String  Description: Repeat the string "Ha!" three times.  Expected Output: "Ha!Ha!Ha!" 
const Repeat="Ha!"

console.log("Task 9:Before Repeat",Repeat);

console.log("Task 9:After Repeat",Repeat.repeat(3));

// Task 10 : Check the First Character of a String  Description: Check if the first character of the string "JavaScript" is "J".  Expected Output: true

const first_char_check="JavaScript";

console.log("Task 10:",first_char_check.startsWith('J'));




























