// 1. Create a Simple Object Create an object car with properties make, model, and year. Assign values to these properties and log the object. 

const car={
    make:"indian",
    model:"Fortuner",
    year:"2025"
}
console.log("Task 1:",car);

// 2. Access Object Properties Given the object user = { name: "Alice", age: 25, city: "New York" }, access and log each property individually. 
let user = { 
    name: "Sathya",
    age: 22,
    city: "Nellai"
    }
console.log("Task 2 Dot Notation:",user.name);
console.log("Task 2 Dot Notation:",user.age);
console.log("Task 2 Dot Notation:",user.city);

console.log("Task 2 Bracket Notation:",user["name"]);
console.log("Task 2 Bracket Notation:",user["age"]);
console.log("Task 2 Bracket Notation:",user["city"]);

// 3. Modify Object Properties Start with the object book = { title: "1984", author: "George Orwell" }. Add a year property and update the author property.

let book = 
    { 
    title: "1984",
    author: "George Orwell",
    }
    console.log("Task 3 Before update:",book);
    book.title="Full Stack Web Development"
    book.year=2025;
    book.author="Ragavan Sir"
    console.log("Task 3 After update:",book);
    book["pages"]=500;
    console.log("Task 3 Bracket notation:",book);


    // 4. Add Methods to Objects Create an object person with properties firstName and lastName. Add a method fullName that returns the full name of the person.
    const person={
        firstName:"Sathya",
        lastName:"S", 
        fullName:function(){
             console.log((this.firstName+this.lastName));  
        }
    }
    person.fullName()

    person["fullName"]();
    


    // what is the difference between dot notation and bracket notation in js

    let pers = {
        "first name": "murugan",
        secondname:"S",
        age: 30,
        blood:"a1+"

      };
      
      console.log(pers["first name"]); // Output: murugan
      console.log(pers["age"]);  // Output: 30


             

      let property = "age";
      let prop="blood"
      console.log("We can use variable's inside brackets to access and print output but dot notation can't",pers[property]);

      console.log("Main difference of dot and bracket",pers.prop);
      

    
    
    

    
    
    