// Script de callbackCrea una nueva función para calcular el cuadrado del número entero.
// Calcula el cuadrado del número a través de la función “calc”


const square = (number) => number * number;

const calculateSquare = (number, callback) => {
    return callback(number);
}

console.log(calculateSquare(7, square));