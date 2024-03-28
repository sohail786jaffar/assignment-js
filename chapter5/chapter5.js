// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.

let num1= +prompt("enter your first number ")
let num2= +prompt("enter your second number ")


let sum=num1+num2
document.querySelector(".sum").innerHTML=`sum of ${num1} and ${num2} is ${sum}`

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

//subtraction

let subtraction=num1-num2
document.querySelector(".subtraction").innerHTML=`subtraction of ${num1} and ${num2} is ${subtraction}`

//mutiplication

let multiplication=num1*num2
document.querySelector(".multiplication").innerHTML=`multiplication of ${num1} and ${num2} is ${multiplication}`

//division

let division=num1/num2
document.querySelector(".division").innerHTML=`division of ${num1} and ${num2} is ${division}`

//modulus

let modulus=num1%num2
document.querySelector(".modulus").innerHTML=`modulus of ${num1} and ${num2} is ${modulus}`

//question 3

let number;

document.querySelector(".value").innerHTML=`value after variable declaration is ${number}`

number=5;

document.querySelector(".initialValue").innerHTML=`initial value : ${number}`

number=++number;

document.querySelector(".increment").innerHTML=`value after increment  is: ${number}`

number=number+7;

document.querySelector(".addition").innerHTML=`value after addition is ${number}`

number=--number;

document.querySelector(".decrement").innerHTML=`value after decrement  is: ${number}`

number=number%3;

document.querySelector(".modulus").innerHTML=`remainder after divided by 3 is : ${number}`
 
// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output:

let ticketPrice=600

let totalCost=5*ticketPrice

document.querySelector(".cost").innerHTML=`total cost is ${totalCost}Rs`


// 5. Write a script to display multiplication table of any 
// number in your browser.


let table=document.querySelector("#table")
let tableNumber=prompt("enter any value to print table: ");
tableNumber=parseInt(tableNumber)

document.querySelector(".tableOf").innerText=`table of ${tableNumber}`
for(let i=1;i<=10;i++){
    let row=document.createElement("tr")
    table.appendChild(row)

    let cell1=document.createElement("td")
    row.appendChild(cell1)
    cell1.innerText=tableNumber

    let cell2=document.createElement("td")
    row.appendChild(cell2)
    cell2.innerText="×"

    let cell3=document.createElement("td")
    row.appendChild(cell3)
    cell3.innerText=i;

    let cell4=document.createElement("td")
    row.appendChild(cell4)
    cell4.innerText="=";

    let cell5=document.createElement("td")
    row.appendChild(cell5)
    cell5.innerText=tableNumber*i
}

// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

let celsius=25;

let celsiusToFahrenheit=celsius*9/5+32;
document.querySelector(".celsius").innerText=`${celsius}C is equal to ${celsiusToFahrenheit}F `

let fahrenheit=70;

let fahrenheitToCelsius=(fahrenheit-32)*5/9;

document.querySelector(".fahrenheit").innerText=`${fahrenheit}F is equal to ${fahrenheitToCelsius}F`


// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables

let item1Price=650;
let item1Quantity=3;
let item2Price=650;
let item2Quantity=7;
let shippingCost=100;
document.querySelector(".item1").innerHTML=`price of item 1 is ${item1Price}`
document.querySelector(".item1Quantity").innerHTML=`Quantity of item 1 is ${item1Quantity}`

document.querySelector(".item2").innerHTML=`price of item 2 is ${item2Price}`

document.querySelector(".item2Quantity").innerHTML=`Quantity of item 1 is ${item2Quantity}`

let totalPrice=item1Price*item1Quantity+item2Price*item2Quantity+shippingCost;

document.querySelector(".totalPrice").innerText=`total price is ${totalPrice}Rs`

// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.

let currentYear=2024;

let birthYear=2000;

let age=currentYear-birthYear;

var br = document.createElement('br');

let ageCalculator=document.querySelector(".ageCalculator");
ageCalculator.append(`current year is ${currentYear}`)
ageCalculator.appendChild(br.cloneNode())
ageCalculator.append(`birth year is ${birthYear}`)
ageCalculator.appendChild(br.cloneNode())
ageCalculator.append(`age is ${age}`)

