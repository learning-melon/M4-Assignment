let start = prompt("Please enter a number")
while(isNaN(start)){
    start = prompt("Please enter a valid number")
}

while(start >= 0){
    console.log(start)
    start--
}