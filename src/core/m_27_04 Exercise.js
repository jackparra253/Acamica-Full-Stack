const callback = function (number) {
    let y = 0;
    for (let i = 1; i <= number; i++) {
        if(number === 1 || number === 2)
            y = i * number;

    }
    return y;
}

console.log(callback(1));
console.log(callback(2));
console.log(callback(3));