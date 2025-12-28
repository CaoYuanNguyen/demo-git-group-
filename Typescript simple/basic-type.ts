// import ham sumThreeNumber tu module,ts
import {sumThreeNumber, multiplyNumber, sumEven} from './module.ts';

let listNumber: number[] = [5, 3, 8, 1, 10];
let resultEvenSum = sumEven(listNumber);
console.log(resultEvenSum);

let resultSum = sumThreeNumber(10, 20, 30);
console.log(resultSum);

let resultSumMutiply = multiplyNumber(5,4);
console.log(resultSumMutiply);

// khai bao bien
let username: string = "Nguyen Van A";

let age: number = 30;
let price: number = 30.45;

let isActive: boolean = true;
let email: any = "nguyenvan@example.com";
let quantity: any = 10; 

let fruits: string[] = ["Apple", "Banana", "Mango"]
let numbers: number[] = [1, 2, 3, 4, 5]

console.log(username)

// Khai bao ham (function)
function addTwoNumber(number1: number, number2: number): number {
    return number1 + number2;
}

let result = addTwoNumber(5, 10);
console.log(result);

function sumArrayNumber():number {
    let numbers: number[] = [2, 5, 7, 1];
    let sum: number = 0;
    // for(let i = 0; i< numbers.length; i++) {
    //     sum += numbers[i];
    // }
    // return sum; 

    for(let number of numbers) {
        sum += number;
    }
    return sum;
}

let total = sumArrayNumber();
console.log(total);
