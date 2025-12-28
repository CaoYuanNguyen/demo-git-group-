"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import hàm sumThreeNumber từ Module.ts
var module_1 = require("./module");
var listNumber = [5, 3, 8, 1, 10];
var resultEvenSum = (0, module_1.sumEven)(listNumber);
console.log(resultEvenSum);
var resultSum = (0, module_1.sumThreeNumber)(10, 20, 30);
console.log(resultSum);
var resultMultiply = (0, module_1.multiplyNumber)(5, 4);
console.log(resultMultiply);
// khai bao bien
var username = "Nguyen Van A";
var age = 30;
var price = 30.45;
var isActive = true;
var email = "nguyenvana@example.com";
var quantity = 10;
var fruits = ["Apple", "Banana", "Mango"];
var numbers = [1, 2, 3, 4, 5];
console.log(username);
// khai báo hàm (function)
function addTwoNumber(number1, number2) {
    return number1 + number2;
}
var result = addTwoNumber(5, 10);
console.log(result);
function sumArrayNumber() {
    var numbers = [2, 5, 7, 1];
    var sum = 0;
    // for(let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i];
    // }
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        sum += number;
    }
    return sum;
}
var total = sumArrayNumber();
console.log(total);
console.log(total + "123");
