const readline = require('readline-sync');

function numberInput(){
    let temp;
    do {
        temp = parseFloat(readline.prompt());
    } while (isNaN(temp));
    return temp
}

function getCalculationMode(){
    console.log('Which calculator mode do you want?\n 1) Arithmetic \n 2) Vowel Counting');
    resp = readline.prompt();
    return resp
}

function chooseOperator(){
    const op = readline.prompt();
    if (!['+','-','/','*'].includes(op)) {
        throw new Error('Not a valid operator');
    } else {
        return op
    }
}

function performCalculation(){
    console.log('Please enter an operator');
    let op;
    while (!op) {
        try {
            op = chooseOperator();
        } catch (e) {
            console.error(e.message);
        }
    }

    console.log(`How many nums to ${op}?`);
    const numOps = numberInput();

    let res = 0;
    let nums = [];

    for (let i = 0; i<numOps; i++){
        console.log(`Please enter number ${i+1}:`);
        nums.push(numberInput())
    }
    
    let reducer;
    switch (op) {
        case '+':
            reducer = (prev,curr) => prev + curr;
            break;
        case '-':
            reducer = (prev,curr) => prev - curr;
            break;
        case '*':
            reducer = (prev,curr) => prev * curr;
            break;
        case '/':
            reducer = (prev,curr) => prev / curr;
            break;
        default:
            console.log('Not a valid operator!');
    }
    if (op == '/'){
        res = nums.filter(x => Math.abs(x) > 0).reduce(reducer)
    }else{
        res = nums.reduce(reducer)
    }
    
    console.log(`The result is: ${res}`);
}

function performVowelCount(){
    console.log('Please enter a string');
    s = readline.prompt();
    let dict = {A:0,E:0,I:0,O:0,U:0};
    [...s].forEach(c => {
        c = c.toUpperCase();
        if (c in dict){
            dict[c] +=1;
        }
    })
    console.log(dict);
}


console.log('Welcome to the calculator!');

while (true) {
    const calcMode = getCalculationMode();
    if (calcMode == '1'){
        performCalculation();
    } else if (calcMode == '2'){
        performVowelCount();
    }
}

