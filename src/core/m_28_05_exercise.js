const numberString = prompt('Ingrese un número');

const number = parseInt(numberString);

const promiseSum = new Promise((resolve, reject) => {
    resolve(`La suma es ${sum(number)}`);
});

function sum(number) {
    return number + number;
}

const promiseMultiplication = new Promise((resolve, reject) => {
    resolve(`El cuadrado de ${number} es ${multiplication(number)}`);
});

function multiplication(number) {
    return number * number;
}

const promiseSqrt = new Promise((resolve, reject) => {
    resolve(`La raíz cuadrada de ${number} es ${Math.sqrt(number)}`);
});

const promiseFactorial = new Promise((resolve, reject) => {
    resolve(`El factorial de ${number} es ${calculateFactorial(number)}`);
})

function calculateFactorial(number) {
    let factorial = 1;

    for (var i = 0; i < number; i++) {
        factorial += factorial * i;
    }

    return factorial;
}

promiseSum.then(data => {
            console.log(data)
            return promiseMultiplication;
        }).then(data => {
            console.log(data);
            return promiseSqrt;
        }).then(data => {
            console.log(data);
            return promiseFactorial;
        }).then(data => {
            console.log(data);
        });
