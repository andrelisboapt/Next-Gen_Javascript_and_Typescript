const userName = 'Max'; //this is constant so we can't change this value
//userName = 'Maximilian';

let age = 30; //this is variable that can be changed

age = 29; 

/* function add(a: number, b: number){
    let result;
    result = a + b;
    return result;
}

console.log(result) */

/* if (age > 20){
    var isOld = true;
}

console.log(isOld)  *///we still can get the value "true", because var works on a global scope and let is considered a block scope


//we shouldn't use VAR anymore


/* const add = (a: number, b: number) => { //arrow function
    return a + b;
};

console.log(add(2, 5)); */

const add = (a: number, b: number) =>  a + b; //arrow function even shorter


console.log(add(2, 5));

const printOutput: (a: string | number) => void = output => console.log(output) //other way to do arrow function with typescript

printOutput(add(5, 2));

const button = document.querySelector('button');

if (button){
    button.addEventListener('click', event => console.log(event))
}
