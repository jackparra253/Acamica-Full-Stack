const firstName = prompt('Ingrese un nombre.');
const lastName = prompt('Ingrese un apellido.');
const email = prompt('Ingrese email.');
const age = prompt('Ingrese edad.');

class People {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class User extends People {
    constructor(firstName, lastName, email, age) {
        super(firstName, lastName, age);
        this.email = email;
    }
}

const user = new User(firstName, lastName, email, age);

alert(`Nombre: ${user.firstName} Apellido: ${user.lastName} email: ${user.email} edad: ${user.age} `);