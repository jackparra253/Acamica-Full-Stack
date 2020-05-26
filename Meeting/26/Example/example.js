function hello() {
    var name = 'Jack';
    return name;
}

console.log('name', name);

console.log('function', hello());


function hello2() {
    var name2 = 'Jack';
    return name2;
}

console.log('name2', name3);

console.log('function2', hello2());


var number = 1;

function hello3() {
    var number = 2;
    return number;
}


console.log('function', hello3());

console.log('var', number);

/**********************************/
let number4 = 1;

function hello4() {
    let number4 = 2;
    return number4;
}

console.log('function', hello4());

console.log('let', number4);

let number4 = 1;


/**********************************/
hello4();

function hello4(x) {
    console.log(x);

    let number4 = 2 + x;
    return number4;
}

/**********************************/

let user;
let password;

function addUserPassword() {
    user = prompt('Ingrese el usuario');
    password = prompt('Ingrese contraseña');
}

function validUserPassword() {
    const jack = "jack";
    const passwordJack = '123';

    if (user === jack && password === passwordJack) {
        console.log('usuario y constraseña valida.')
    } else {
        console.log('usuario o contraseña invalida');
    }
}

addUserPassword();
validUserPassword();


function printValue() {
    let number = parseInt(prompt('ingrese un número.'));

    if (number > 10) {
        let number3 = parseInt(prompt('ingrese un número.'));

        if (number3 > 100) {
            console.log('A');
        } else {
            console.log('B');
        }
    } else {
        let number2 = parseInt(prompt('ingrese un número.'));

        if (number2 > 1000) {
            console.log('C');
        } else {
            console.log('D');
        }
    }
}

printValue();


