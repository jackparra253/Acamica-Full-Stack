const square = (number) => number * number;

const calculateSquare = (number, callback) => {
    return callback(number);
}

console.log(calculateSquare(7, square));