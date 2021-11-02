const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('Please enter an operator');
const op = readline.prompt();

console.log(`How many nums to ${op}?`);
const numOps = readline.prompt();

let res = 0;
let nums = [];

for (let i = 0; i<numOps; i++){
    console.log(`Please enter number ${i+1}:`);
    nums.push(parseFloat(readline.prompt()));
}
res = nums[0]
for (let j = 1; j<numOps; j++){
    switch (op) {
        case '+':
            res += nums[j];
            break;
        case '-':
            res = res - nums[j];
            break;
        case '*':
            res = nums[j] * res;
            break;
        case '/':
            res = res / nums[j] ;
            break;
        default:
            console.log('Not a valid operator!');
    }
}
console.log(`The result is: ${res}`);