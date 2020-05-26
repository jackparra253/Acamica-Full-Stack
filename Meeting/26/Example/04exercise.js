class Dog {
    constructor(race, name, weight, age) {
        this.race = race;
        this.name = name;
        this.weight = weight;
        this.age = age;
    }
}

let salir = 1;
const dogs = [];
do {
    let race = prompt('Ingrese raza');
    if (race === 'Stop')
        break;

    let name = prompt('Ingrese nombre');
    let weight = prompt('Ingrese peso');
    let age = prompt('Ingrese edad');

    const dog = new Dog(race, name, weight, age);
    dogs.push(dog);

    if (race === 'Stop')
        salir = 0;

} while (salir === 1);

function print() {
    dogs.forEach(dog => {
        console.log(`raza: ${dog.race} Nombre: ${dog.name} Peso: ${dog.weight} Edad: ${dog.age}`);
    });
}

print();