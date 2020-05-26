const firstName = prompt('Ingrese un nombre.');
const lastName = prompt('Ingrese un apellido.');
const email = prompt('Ingrese email.')

class People {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class User extends People {
    constructor(firstName, lastName, email) {
        super(firstName, lastName);
        this.email = email;
    }
}

const user = new User(firstName, lastName, email);

alert(`Nombre: ${user.firstName} Apellido: ${user.lastName} email: ${user.email}`);