// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

function checkCharacter(inputChar) {
    var asciiCode = inputChar.charCodeAt(0);

    if (asciiCode >= 65 && asciiCode <= 90) {
        console.log(inputChar + " is an uppercase letter.");
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        console.log(inputChar + " is a lowercase letter.");
    } else if (asciiCode >= 48 && asciiCode <= 57) {
        console.log(inputChar + " is a number.");
    } else {
        console.log(inputChar + " is neither a number nor an English letter.");
    }
}

var character = prompt("Enter a character (number or string):");
checkCharacter(character);


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let num1=+prompt("enter your first number: ")
let num2=+prompt("enter your second number: ")
if(num1>num2){
    console.log(`${num1} is greater`)
}
else{
    console.log(`${num2} is greater`)
}

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

let number3=prompt("enter your number: ")
if(number3>0){
    console.log(`${number3} is positive`)
}
else if(number3<0){
    console.log(`${number3} is negative`)
}
else{
    console.log(`${number3} is zero`)
}


// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise

function checkVowel(character){
    if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
        return true
    }
    else{
        return false
    }
}

let character1 = prompt("Enter a character (i.e. string of length 1):");
let isVowel=checkVowel(character1)
if(isVowel){
    console.log(`${character1} is a vowel`)
}
else{
    console.log(`${character1} is not a vowel`)
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;

var hour = 13;
if (hour < 18) {
console.log("Good day")
}
else{
console.log("Good Evening")
}

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

let time=1900;

if(time>= 0 && time<1200){
    alert("Good morning")
}
else if(time>=1200 && time<1700){
    alert("Good afternoon")
}

else if(time>=1700 && time<2100){
    alert("Good evening")
}
else{
    alert("Good night")
}