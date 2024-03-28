// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.

let studentNames=[];

let studentNamesObject={};
let stringArray=["sohail","jaffar","college"]
let numberArray=[1,2,3,4,5,6]
let booleanArray=[true,false,true];
let mixedArray=[1,2,"sohail","jaffar","college"];

// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

let qualifications=["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"]
qualifications.forEach(function(item,index){
    console.log(`item at index ${index}: ${ item}`)
})

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

studentNames=["ali","kashif","raza"];
let studentMarks=[400,300,450];
for (let i=0 ; i<studentNames.length ; i++){
    let percentages=studentMarks[i]/500*100;
    console.log(`Score of ${studentNames[i]} is ${studentMarks[i]}. percentage: ${percentages}`)

}

//Question 9

let colors=["red", "blue", "green","purple","pink"];

let unshift=document.querySelector("#unshift")
let shift=document.querySelector("#shift")
let push=document.querySelector("#push")
let pop=document.querySelector("#pop")

unshift.addEventListener("click",()=>{
    let color=document.querySelector("#color").value;
    if(color===""){
        alert("please enter a color")
    }
    else{
    let newItems= color.split(",")

    newItems.forEach(((item)=>{
        colors.unshift(item)
        console.log(colors)
    }))
    let unShiftOutput = document.querySelector(".unShiftOutput");
    unShiftOutput.innerText = '';

    // Add each color to the output element
    colors.forEach((color) => {
        unShiftOutput.innerText += `"${color}" ,  `;
    });
}
})

shift.addEventListener("click",()=>{
    colors.shift()
    console.log(colors)

    let ShiftOutput = document.querySelector(".shiftOutput");
    ShiftOutput.innerText=colors.join('","')
})

push.addEventListener("click",()=>{
    let color=document.querySelector("#color").value;
    if(color===""){
        alert("please enter a color")
    }
    else{
    let newItems= color.split(",")

    newItems.forEach(((item)=>{
        colors.push(item)
        console.log(colors)
    }))
    let pushOutput = document.querySelector(".pushOutput");
    pushOutput.innerText = '';

    // Add each color to the output element
    colors.forEach((color) => {
        pushOutput.innerText += `,"${color}"`;
    });
}
  
})

pop.addEventListener("click",()=>{
    colors.pop()
    console.log(colors)
    let popOutput = document.querySelector(".popOutput");
    popOutput.innerText=colors.join('",')
})

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

let scores=[320,230,480,120]
console.log("scores of students ",scores)
scores.sort((a,b)=>{a-b})
console.log("sorted scores of students ",scores)

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

let cities= ["karachi", "lahore" ,"islamabad" ,"quetta","peshawar"]
let selectedCities=cities.slice(2)
console.log(cities)
console.log(selectedCities)

// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This" , " is ", " my ", " cat"];
console.log(arr.join());
console.log(arr.join(""));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

let arr1=["keyboard","mouse","printer","monitor"]
let arrlength=arr1.length
for (let a=0;a<arrlength;a++){
    let popItem=arr1.shift()
    console.log("OUT:")
    console.log(popItem)
}

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

let arr2=[]
arr2.push("keyboard")
arr2.push("mouse")
arr2.push("printer")
arr2.push("monitor")

let arr2length=arr2.length
for (let a=0;a<arr2length;a++){
    let popItem=arr2.pop()
    console.log("out:")
    console.log(popItem)
}

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method
 
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

function generateDropdown() {
    document.write("<select>");

    for (var i = 0; i < phoneManufacturers.length; i++) {
        document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
    }

    
    document.write("</select>");
}

generateDropdown();
 
