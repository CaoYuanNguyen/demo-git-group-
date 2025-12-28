var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1: let, const
// const: hằng số, giá trị của nó không thay đổi
var PI = 3.14;
var MAX_USER = 100;
// 2: arrow function
// function addTwoNumber(a: number, b:number): number{
//     return a + b;
// }
// ES6
var addTwoNumber = function (a, b) {
    return a + b;
};
// 3: template string
var name1 = "John";
var age1 = 30;
var message = "Hello ".concat(name1, ", you are ").concat(age1, " years old.");
console.log(message);
// 4: destructuring
var person = {
    name: 'John',
    age: 30,
    gender: 'Male',
    occupation: 'Developer'
};
var namPerson = person.name, age = person.age;
console.log(namPerson, age);
var colors = ["red", "green", "blue"];
var redColor = colors[0], greenColor = colors[1];
console.log(redColor, greenColor);
// 5: default parameter
// lợi ích
// - làm cho hàm dễ đọc hơn, ngắn gọn hơn
// - maintain nhwungx hàm có sẵn mà muốn thêm logic mới vào
// const waitForElement = (timeout: number = 500) =>{
//     await setTimeout(() => {
//         console.log(`Waited for ${timeout} ms`)
//     },timeout)
// }
var greet = function (name) {
    if (name === void 0) { name = "Unknown"; }
    console.log("Hello ".concat(name));
};
greet();
greet("Alice");
// 6: rest parameter
// ít dùng cho playwright
// thu thập các parameter thành 1 mảng trong hàm
var sumAll = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        total += num;
    }
    return total;
};
console.log(sumAll(5, 6));
console.log(sumAll(4, 5, 6));
console.log(sumAll(5, 6, 7, 8));
// 7: spread operator
// gộp nhiều mảng -> 1 mảng, gộp nhiều object -> 1 project
// LƯU Ý: không làm thay đổi mảng ban đầu
// TH1:gộp nhiều mảng -> 1 mảng
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var arrayMerge = __spreadArray(__spreadArray([], array1, true), array2, true);
console.log(arrayMerge);
// TH2:gộp nhiều object -> 1 object
var obj1 = {
    name: 'Vy',
    age: 20
};
var obj2 = {
    gender: 'Male',
    occupation: 'Developer'
};
var objMerge = __assign(__assign({}, obj1), obj2);
console.log(objMerge);
// 8: async/await: bắt đồng bộ- gặp nhiều trong playwright
// 9: module: import/export
