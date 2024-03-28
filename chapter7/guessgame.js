let randomNumber=Math.floor(Math.random()*10)+1;
console.log(randomNumber)
while(true){
    let userInput=prompt("Enter a number between 1 and 10")
    if(userInput==randomNumber){
        alert("Bingo! Correct answer ")
        break;
    }
    if(userInput==randomNumber-1 ||userInput==randomNumber+1){
        alert("Close enough to the correct answer")
    }
    else{
        alert("OOps try again")
    }
}