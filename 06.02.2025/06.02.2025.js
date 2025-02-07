// 1. Use Object.create() Create a base object shape = { color: "blue" }. Use Object.create() to create a new object circle with a radius property, inheriting color from shape. 

const shape = 
{ 
    color: "blue" 
};

const circle=Object.create(shape);
console.log("Task 1:",shape);

circle.color="green";
circle.radius="3cm"

console.log("Task 1:",circle);
console.log("Task 1:",circle.radius);


// 2. Iterate Over Object Properties Given the object student = { name: "John", grade: "A", age: 20 }, use a for...in loop to log all properties and their values. 

const student = { name: "John", grade: "A", age: 20 }

for(stu in student)
{
    console.log("Task 2:",stu,"-",student[stu]);
}

// 3. Delete Object Properties Create an object movie = { title: "Inception", director: "Nolan", year: 2010 }. Delete the director property and log the updated object.

const movie = { title: "Inception", director: "Nolan", year: 2010 }

console.log("Task 3: Before delete",movie);

delete movie.director;

console.log("Task 3: After delete",movie);


// 4. Check for Property Existence Given the object employee = { id: 123, name: "Alice" }, check if the property name exists in the object and log the result.

const employee = { id: 123, name: "Alice" }

console.log("Task 4:",'id' in employee);


// 5 . Merge Objects Create two objects address = { city: "San Francisco", state: "CA" } and contact = { phone: "123-456-7890", email: "example@example.com" }. Merge them into a new object profile.

address = { city: "San Francisco", state: "CA" }
contact = { phone: "123-456-7890", email: "example@example.com" }

const info=Object.assign(address,contact)

console.log("Task 5:",info);


// 6. Object Constructor Write a constructor function Person(name, age) that creates objects with name and age properties. Create two instances and log them. 

const Person=function(name,age)
{
    this.name=name;
    this.age=age;
}

const person1=new Person("sathya","21");
const person2=new Person("siva","25");

console.log("Task 6",person1);
console.log("Task 6",person1);


// 7. Add a Property Using Bracket Notation Given the object car = { make: "Toyota" }, add a model property using bracket notation and assign a value to it. 


car = { make: "Toyota" }

console.log("Task 7: Before assign",car);


car['model']='Etios'

console.log("Task 7: After assign",car);


// 8. Clone an Object Given the object original = { key: "value" }, create a shallow copy of this object using Object.assign() and log the copy. 
const normal={text:"hello"}

const assign=Object.assign(normal)

console.log("Task 8:",assign);


// 9. Use Object.keys() to List Properties Create an object user = { name: "Bob", age: 30, occupation: "Developer" }. Use Object.keys() to get an array of property names and log it. 


const user = { name: "Bob", age: 30, occupation: "Developer" }

const key=Object.keys(user);

console.log("Task 9:",key);


// 10. Define a Read-Only Property Create an object settings = { theme: "dark" }. Define a read-only property version with the value "1.0" using Object.defineProperty(). 

const settings = { theme: "dark" }

Object.freeze(settings);
settings["theme"]='black';

console.log("Task 10:",settings.theme);

// 11. Add and Remove Methods Create an object calculator with a method add that adds two numbers. Later, remove the add method from the object and verify it. 
const add_or_remove={
    a:5,
    b:5,
    function(){
    let calc =this.a+this.b;
    return calc
}
}

console.log("Task 11:",add_or_remove);

delete add_or_remove.function

console.log("Task 11:",add_or_remove);


// 12. Create Nested Objects Create an object library with a property books that is an array of objects, each representing a book with title and author.

const library={

    books:[{title:"Pride and Prejudice", Author:"Jane Austen"},
            {title:"Harry Potter", Author:"J. K. Rowling"},
            {title:"Alice's Adventures in Wonderland", Author:"Lewis Carroll"}  
    ]
};

console.log("Task 12:",library);


// 14. Use Object.values() Given the object student = { name: "Alice", grade: "A", age: 21 }, use Object.values() to get an array of values and log it.

const Student = { name: "Alice", grade: "A", age: 21 }

const Value=Object.values(Student)

console.log("Task 14:",Value);
