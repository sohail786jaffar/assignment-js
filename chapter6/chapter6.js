// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
browser:


console.log("result")
let a=10;
console.log(`the value of a is ${a}`)
console.log(`The value of ++a is ${++a}`)
console.log(`The value of a is ${a} `)

console.log(`The value of a++ is ${a++}`)
console.log(`The value of a is ${a} `)

console.log(`The value of --a is ${--a}`)
console.log(`The value of a is ${a} `)

console.log(`The value of a-- is ${a--}`)
console.log(`The value of a is ${a} `)

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

let b=2,c=1;

let result = --b - --c + ++c + c--;

console.log("b is " + b)
console.log("c is " + c)

console.log("result is "+result)

// 3. Write a program that takes input a name from user & 
// greet the user.

let studentName=prompt("enter your Name ")
document.querySelector(".name").innerHTML +=studentName

// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.

let number=prompt("enter a number")
if(number==null){
    number=5
}
for(let i=1;i<=10;i++){
    console.log(`${number} x ${i} = ${number*i}`)
}

//Question 6 grade calculator
function gradecal(percentage) {
    let grade;
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
}

function calculateGrade() {
    let english = parseInt(document.getElementById("english").value) || 0;                   
    let math = parseInt(document.getElementById("maths").value) || 0;
    let urdu = parseInt(document.getElementById("urdu").value) || 0;
    let computer = parseInt(document.getElementById("computer").value) || 0;
    let physics = parseInt(document.getElementById("physics").value) || 0;
    if (math>100 ||english>100 ||urdu>100 ||computer>100 ||physics>100){
        alert("please enter marks between 0 to 100")
    }
    else{
    let obtainMarks = english + math + urdu + computer + physics;
    let percentage = (obtainMarks / 500) * 100;
    document.getElementById("totalMarks").innerText = obtainMarks;
    document.getElementById("percentage").innerText = percentage;
    document.getElementById("Grade").innerText = gradecal(percentage);
    }
}