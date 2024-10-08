let coinFlip
let numFlips = prompt("Enter number of times you want to flip a coin")
for (let i = 0; i < numFlips; i++){
    coinFlip = Math.round(Math.random()) //assuming step 3 is saying assign it to coinFlip
    if(coinFlip == 0) console.log("Heads")
    else console.log("Tails")
}