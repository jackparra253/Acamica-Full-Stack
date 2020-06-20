// Crea una nueva función para saber si un número ﻿entero es primo o no.
// Utiliza esta nueva función a través de “calc”

const callback = function (number) {
    let count = 0;

    for (let i = 1; i <= number; i++) {
        if(number%i  == 0) 
            count++;
    }

    if (count === 2)
        console.log(`El ${number} es primo`);
    else {
        console.log(`El ${number} no es primo.`);
    }
}


const calc = (number, callback) => callback(number);

calc(4,callback);
calc(11,callback);
calc(7,callback);