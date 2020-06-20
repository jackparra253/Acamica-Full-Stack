// MODULO USUARIOS
const users = [];

class User {
    constructor(name, lastname, email, phone) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
    }
}

let user;

function printUsers() {
    if (users.length >= 1) {
        users.forEach(user => {
            console.log(`nombre: ${user.name} apellido: ${user.lastname}  email: ${user.email}  telefono: ${user.phone}`);
        });
    } else {
        console.log("No existe usuarios registrados");
    }

}

// MODULO PRODUCTOS
function list() {
    let ask = parseInt(prompt("1: Crear \n 2: Ingresar \n 3: Regresar al menu anterior"));

    switch (ask) {
        case 1:
            const user = new User(prompt("Ingrese nombre"), prompt("ingrese apellido"), prompt("ingrese email"), prompt("ingrese telefono"));

            users.push(user);
            break;
        case 2:
            printUsers();
            break;
        default:
    }
}

let option;

while (option !== 4) {
    option = (parseInt(prompt("Que operacion desea realizar? \n 1-Usuario \n 2-Producto")));

    switch (option) {
        case 1:
            list();
            break;
        case 2:
            product = new Product(prompt("ingrese nombre de producto"), parseInt(prompt("ingrese precio de producto")));
            break;
        case 3:
            break;
        case 4:
        default:
    }
}