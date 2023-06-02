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

/* const add = (a: number, b: number) =>  a + b; //arrow function even shorter


console.log(add(2, 5));

const printOutput: (a: string | number) => void = output => console.log(output) //other way to do arrow function with typescript

printOutput(add(5, 2));

const button = document.querySelector('button');

if (button){
    button.addEventListener('click', event => console.log(event))
} */

//spread operator in arrays
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies) //tells JS to pull out all the elements of the array and pass them to activeHobbies array

//spread operator in objects
const person = {
    name: 'Max',
    age: 30
};

const copiedPerson = {...person} //we got a perfect copy of the object (the keys from 'person' object)

const add = (...numbers: number[]) => {//rest parameters should be used when we don't know how many parameters we will use, '...' means that the function can receive a couple of arguments
    numbers.reduce((curResult, curValue)=>{
        return curResult + curValue;
    }, 0)


    //could be done with for loop
    /* let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum; */



}

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers)








