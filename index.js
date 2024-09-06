// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
 const prompt = require('prompt-sync')({ sigint: true });



const numberArray = [0,1,2,3,4,5,6,7,8,9]
let shuffledArray = [];
for(let i = 0; i < numberArray.length ; i++){

    let index = Math.floor(Math.random() * numberArray.length);    //shuffling the array
     if(shuffledArray.includes(numberArray[index])){
        i--;
        continue;
     }
     shuffledArray.push(numberArray[index])

}
//console.log(shuffledArray);
let newNum = shuffledArray.slice(0,4);
let secretNumber = (newNum.join(''));
console.log(secretNumber);
let name = prompt('Hello user What is your name? ');
console.log(` Welcome ! ${name} :)`);  
let guess;
let bull = 0;
let cow = 0;
while(guess !== secretNumber){
guess = prompt('Hello!  please enter a 4 digit number ')
console.log(`${name} your guessed number is : ${guess} `); 

for(i = 0;i < guess.length; i++){
    if(guess[i] === guess[i + 1]){
        console.log("it is not an acceptable secret number.WE require all the digits to be unique");
        break;
    }
    
    else if(guess[i] === secretNumber[i]){
               bull += 1;
        }
        else if(secretNumber.includes(guess[i])){
            cow += 1;
        }
    }
  
   

  
if(cow > 1 && bull > 1){
   console.log(` ${cow}: cows ${bull}: bulls`);
}
else if(cow > 1 && bull <= 1){
    console.log(`${cow}: cows ${bull}: bull`);
}
else if(cow <= 1 && bull > 1){
    console.log( `${cow}: cow ${bull}: bulls`);
}
else{
    console.log( ` ${cow}: cow ${bull}: bull`);
}
bull = 0;
cow = 0;
}

console.log('Congratulation! You guessed the right number');
 


//-------------------------------------------------------------------------------------------------------------------------------
//with extra points
/*// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require('prompt-sync')({ sigint: true });   

/* const numberArray = [0,1,2,3,4,5,6,7,8,9]
let shuffledArray = [];
for(let i = 0; i < numberArray.length ; i++){

    let index = Math.floor(Math.random() * numberArray.length);    //shuffling the array
     if(shuffledArray.includes(numberArray[index])){
        i--;
        continue;
     }
     shuffledArray.push(numberArray[index]);

} */
//console.log(shuffledArray);
/* let newNum = shuffledArray.slice(0,4);
let secretNumber = (newNum.join(''));
console.log(secretNumber);
let name = prompt('Hello user What is your name? ');
 
if(!name){
    name = 'Player';
}
else{
    name = name;
}
console.log(`Hello ${name}!  :)`);
let guess;
let bull = 0;
let cow = 0;
let attempts = 0;
let msgArray = ['try again','keep trying','you can do it','you are almost there','you are close','you are very close','Keep guessing','Do not give up' ]; 
let playGame = true;
const numberArray = [0,1,2,3,4,5,6,7,8,9]
let name = prompt('Hello user What is your name? ');
 
if(!name){
    name = 'Player';
}
else{
    name = name;
}
console.log(`Hello ${name}!  :)`);
let guess;
let bull = 0;
let cow = 0;
let attempts = 0;
let msgArray = ['try again','keep trying','you can do it','you are almost there','you are close','you are very close','Keep guessing','Do not give up' ];
//while(guess !== secretNumber){
while(playGame){
   
let shuffledArray = [];
for(let i = 0; i < numberArray.length ; i++){

    let index = Math.floor(Math.random() * numberArray.length);    //shuffling the array
     if(shuffledArray.includes(numberArray[index])){
        i--;
        continue;
     }
     shuffledArray.push(numberArray[index]);

}
let newNum = shuffledArray.slice(0,4);
let secretNumber = (newNum.join(''));
console.log(secretNumber);

while(guess !== secretNumber){
guess = prompt(' please enter a 4 digit number ')
console.log(`${name} your guessed number is : ${guess} `); 

attempts +=1;
for(i = 0;i < guess.length; i++){
    if(guess[i] === guess[i + 1]){
        console.log("it is not an acceptable number.WE require all the digits to be unique");
        break;
    }
    
    else if(guess[i] === secretNumber[i]){
               bull += 1;
              
        }
        else if(secretNumber.includes(guess[i])){
            cow += 1;
        }
    }
  
if(cow > 1 && bull > 1){
   console.log(` ${cow}: cows ${bull}: bulls`);
}
else if(cow > 1 && bull <= 1){
    console.log(`${cow}: cows ${bull}: bull`);
}
else if(cow <= 1 && bull > 1){
    console.log( `${cow}: cow ${bull}: bulls`);
}
else if(cow === 0 && bull === 0){
    let randomMsg = msgArray[Math.floor(Math.random() * msgArray.length)];
    console.log(randomMsg);
}
else{
    console.log(` ${cow}: cow ${bull}: bull`);
}
bull = 0;
cow = 0;
}

if(guess === secretNumber){
    console.log('Congratulation! You guessed the right number');
    console.log(`You attempted ${attempts} times`); 
    let input = prompt('Do you want to play again? Yes or No ');
    if(input === 'No'){
        playGame = false;
}

}






}

console.log(`You attempted ${attempts} times`); 
console.log('Thank you for playing the game!');*/
 








