// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”


let city=prompt("enter your city name: ")
if(city==="karachi"){
    alert(`welcome to city of light`)
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

let gender=prompt("enter your gender: ")
if(gender==="male"){
    alert(`Good Morning Sir`)
}
else if(gender==="female"){
    alert(`Good Morning Ma’am`)
}

// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

let color=prompt("enter color of traffic signal: ")
if(color==="red"){
    alert("must stop")
}
else if(color==="yellow"){
    alert("Ready to go")
}
else if(color==="green"){
    alert("Move now")
}

// 4. Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”

let fuel=prompt("enter your current fuel: ")
if(fuel<0.25){
    alert("Please refill the fuel in your car")
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

let number=prompt("enter your number: ")
if(number%3===0){
    alert("number is divisible by 3")
}
else{
    alert("number is not divisible by 3")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

let number2=prompt("enter your number: ")
if(number2%2===0){
    alert("number is an even number")
}
else{
    alert("number is an odd number")
}

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature=prompt("enter your temperature: ")
if(temperature>40){
    alert("It is too hot outside")
}
else if(temperature>30){
    alert("The Weather today is Normal")
}
else if(temperature>20){
    alert("Today’s Weather is cool.")
}
else if(temperature>10){
    alert("OMG! Today’s weather is so Cool.")
}

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let num1=prompt("enter your first number: ")
let num2=prompt("enter your second number: ")
let operation=prompt("enter your operation  +,-,*, / or %: ")
if(operation==="+"){
    let result=num1+num2
    alert(result)
}
else if(operation==="*"){
    let result=num1*num2
    alert(result)
}
else if(operation==="/"){
    let result=num1/num2
    alert(result)
}
else if(operation==="-"){
    let result=num1-num2
    alert(result)
}
else if(operation==="%"){
    let result=num1+num2
    alert(result)
}
else{
    alert("invalid operation")
}