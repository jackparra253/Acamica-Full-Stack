const sum = (num1, num2) => num1 + num2;
const substration = (num1, num2) => num1 - num2;

const calculator = function (num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calculator(3,2,sum));

console.log(calculator(3,2,substration));

console.log(calculator(4,5,(num1, num2)=> num1 * num2));