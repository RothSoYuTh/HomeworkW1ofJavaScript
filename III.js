//if else and else if 

let A = 15;

if ( A % 3 == 0 && A % 5 == 0){
    console.log("A is divisibe by 3 and 5.");
}else if ( A % 3 == 0){
    console.log(" A is divisible by 3 only.");
}else if ( A % 5 == 0){
    console.log(" A is divisible by 5 only.");
}


let day = "Monday";

let LowerDay = day.toLowerCase();

if ( LowerDay == "saturday" || LowerDay == "sunday"){
    console.log(LowerDay,"is weekend.");
}else{
    console.log(LowerDay,"is weekday.")
}

let tColor = "red";

let color = tColor.toLowerCase();

if( color == "red"){
    console.log("Stop!");
}else if( color == "yellow"){
    console.log("Slow Down!");
}else if( color == "green"){
    console.log("Go");
}else{
    console.log("Invalid Color.");
}