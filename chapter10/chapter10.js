// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

let muArray=[[],[]];

// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

let matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log(matrix)

// 3. Write a program to print numeric counting from 1 to 10.

for (let i=1;i<=10;i++){
    console.log(i)
}

// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.


let table=document.querySelector("#table")
let tableNumber=prompt("enter any value to print table: ");
tableNumber=parseInt(tableNumber)
let tableRange=prompt("enter table range: ")
tableRange=parseInt(tableRange)

document.querySelector(".tableOf").innerText=`table of ${tableNumber}`
for(let i=1;i<=tableRange;i++){
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

// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

let fruits=["apple","banana","mango","orange","strawberry"]
for(let fruit=0;fruit<fruits;fruit++){
    console.log(fruits[fruit])
}
for(let fruit=0;fruit<fruits;fruit++){
    console.log(`Element at index ${fruit} is ${fruits[fruit]}`)
}

// 6. Generate the following series in your browser. See 
// example output.

let counting=document.querySelector(".counting")
let reverseCounting=document.querySelector(".reverseCounting")
let even=document.querySelector(".even")
let odd=document.querySelector(".odd")
let series=document.querySelector(".series")

for(let i=1;i<=15;i++){
    counting.innerText+=i+", " 
}
for(let i=10;i>0;i--){
    reverseCounting.innerText+=i+", " 
}
for(let i=1;i<=15;i++){
    if(i%2 == 0){even.innerText+=i+", " }
}
for(let i=1;i<=15;i++){
    if(i%2 !== 0){odd.innerText+=i+", " }
}
for(let i=1;i<=15;i++){
    if(i%2 == 0){series.innerText+=i+"k, " }
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let items=["cake","apple pie","cookies","chips","patties"]
console.log("available items"+items)
let searchItem=prompt("enter item to search ")

for(let i=0;i<items.length;i++){
    if(items[i]==searchItem){
        alert(`${searchItem} found at index ${i}`)
    }
    else{
        alert(`${searchItem} not found`)
    }
}

// 8. Write a program to identify the largest number in the 
// given array.

let arr=[24,53,78,91,12]

let maxNum=arr[0]
console.log("array"+arr)
for (i=0;i<arr.length;i++){

        if (arr[i]>maxNum){
            maxNum=arr[i]
        }
  
}

console.log(maxNum)

// 9. Write a program to identify the smallest number in the 
// given array.

let minNum=arr[0]
console.log("array"+arr)
for (i=0;i<arr.length;i++){

        if (arr[i]<maxNum){
            minNum=arr[i]
        }
  
}

console.log(minNum)

// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.
 console.log("multiples of 5 ranging from 1 to 100")
for(let i=1;i<=100;i++){
    if(i%5==0){
        console.log(i)
    }
}