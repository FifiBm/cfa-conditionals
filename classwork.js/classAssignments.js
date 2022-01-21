/ LOOPS

// 1. create a loop that prints out the numbers 0 - 5 using a while loop

console.log('while loop')
let i = 0;
while(i <= 5){
    console.log(i);
    i += 1;
}

// 2. create a loop that prints out the numbers 0 - 5 using a for loop

console.log('for loop');
for(let i = 0; i <= 5; i += 1){
    console.log(i);
}

// 3. create a loop that prints out the numbers 0 - 5 using a for loop but for each number return the squared version

console.log('squared for loop');
for(let i = 0; i <= 5; i += 1){
    console.log(i + 'squared =' + i = i);
}

//4. iterate over the string below and print out each character
let string = "the fox jumps over the moon"; 

console.log('string loop');
let string = "the fox jumps over the moon";
for(let char of string){
    console.log(char);
}