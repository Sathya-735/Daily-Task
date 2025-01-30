

console.log("1.what is implicit conversion?");
function implicit(a,b)
{   
    return a+b;  
}
console.log(implicit(5,"5"));

console.log("2.what is explicit(Also Known As Casting) conversion?");

function explicit(a,b)
{   
    return a+b;  
}
console.log(explicit(5,Number("5")));

setTimeout(function se(names)
{   
    console.log("heloo",names);
    
},3000,"sathya")

console.log("3.question?",+"25"-(+"13"*0));


console.log("4.question?",+"2540"+"30"-(+"8"*5));


console.log("5.question?",+"2540"+(+"30")-(+"7"*5));


console.log("6.question?",+"2040"-(-"30")-(+"5"*5));


console.log("7.question?",+"2540"-"30"-(-"6"*10));

console.log("8.question?",-"45"-"30"+(+"13"*1+"4"+"60"));

console.log("9.question?",-"40"+"40"*2-(+"13"*5));

console.log("10.question?",+"30"+"30"-(+"10"*5));

