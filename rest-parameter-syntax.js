/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);

console.log(sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6); //only the parameters (3) accepted in original function are counted, other params excluded

console.log(sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => { //...rest includes an array whithin the function including all extra params
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6, 15, 21);
console.log(sum3)