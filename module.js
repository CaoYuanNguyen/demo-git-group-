"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumThreeNumber = sumThreeNumber;
exports.multiplyNumber = multiplyNumber;
exports.sumEven = sumEven;
function sumThreeNumber(a, b, c) {
    return a + b + c;
}
function multiplyNumber(a, b) {
    return a * b;
}
// tính tổng các số chẵn trong mảng
function sumEven(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (number % 2 === 0) {
            sum += number;
        }
    }
    return sum;
}
