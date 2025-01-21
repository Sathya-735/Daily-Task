
// Task 1: Calculate Discounts Based on Membership Level

let membership_level="Bronze";
switch(membership_level)
{
    case "gold":
    console.log("Task 1 Your a Gold member and your discount is 90%");
    break;
    case "Platinum":
    console.log("Task 1 Your a Platinum member and your discount is 80%");
    break;
    case "Silver":
    console.log("Task 1 Your a Silver member and your discount is 70%");
    break; 
    case "Bronze":
    console.log("Task 1 Your a Bronze member and your discount is 60%");
    break; 
    default:
    
        console.log("invalid");    
    
}

// Task 2: Determine the Season Based on the Month

let month=12;
switch(month)
{
    case 1:
    console.log("Task 2 Its a summer Month");
    break;
    case 2:
    console.log("Task 2 Its a Winter Month");
    break;
    case 3:
        console.log("Task 2 Its a Rainy Month");
    break; 
    case 4:
        console.log("Task 2 Its a monsoon Month");
    break;
    case 5:
        console.log("Task 2 Its a Dry Month");
    break; 
    case 6:
        console.log("Task 2 Its a autumn Month");
    break;
    case 7:
    console.log("Task 2 Its a summer Agro-climatic Month");
    break;
    case 8:
    console.log("Task 2 Its a Winter Rainfall Month");
    break;
    case 9:
        console.log("Task 2 Its a coldest Month");
    break; 
    case 10:
        console.log("Task 2 Its a Hotest Month");
    break;
    case 11:
        console.log("Task 2 Its a spring Month");
    break; 
    case 12:
        console.log("Task 2 Its a cloudy Month");
    break;
    default:
    
        console.log("invalid");    
    
}

// Task 3: Determine Type of Vehicle Based on Number of Wheels

let wheel=8;
switch(wheel)
{ 
    case 2:
    console.log("TasK 3 Bicycle");
    console.log("Task 3 Motorcycle");
    break;
    case 4:
    console.log("TasK 3 Car");
    break;
    case 8:
    console.log("Task 3 Truck");
    break;
    default:
        
            console.log("invalid");      
        
}

// Task 4: Menu Selection in a Restaurant

let Menu_combo=1;
switch(Menu_combo)
{ 
    case 1:
    console.log("TasK 4 Your menu Combo number is 1 Your order is Non & Paneer butter-masala");
    break;
    case 2:
    console.log("TasK 4 Your menu Combo number is 2 Your order is Parotta & Paneer-gravy");
    break;
    case 3:
    console.log("Task 4 Your menu Combo number is 3 Your order is Paneer-Pulav & Chicken-gravy");
    break;
    default:
        
            console.log("invalid");      
    
}

// Task 5: Day of the Week Planner

let Weekplanner="Sunday";
switch(Weekplanner)
{
    case "Sunday":
    console.log("Task 5 Its a holiday so enjoy the day");
    break;
    case "Monday":
    console.log("Task 5 Running Activities");
    break;
    case "Tuesday":
    console.log("Task 5 Take Fasting");
    break; 
    case "Wednesday":
    console.log("Task 5 Cycling");
    break;
    case "Thursday":
    console.log("Task 5 Pray God");
    break;
    case "Friday":
    console.log("Task 5 Do Pushups 100");
    break;
    case "Saturday":
    console.log("Task 5 A Bestday before sunday so please wait for sunday");
    break;
    default:
        console.log("invalid");   
}


// Task 6: Student Mark Score card

let mark=90;
switch(true)
{   
    case mark<35:
    console.log("Reappear");
    break;
    case mark>=35 && mark<=50:
    console.log("Your mark is:",mark,"Pass and your grade is D");
    break;
    case mark>=51 && mark<=71:
    console.log("Your mark is:",mark,"Pass and your grade is C");
    break;
    case mark>=72 && mark<=91:
    console.log("Your mark is:",mark,"Pass and your grade is B");
    break;
    case mark>=92 && mark<=100:
    console.log("Your mark is:",mark,"Pass and your grade is A");
    break;
    default:
    console.log("invalid");  
}
