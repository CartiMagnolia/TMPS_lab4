// Vehicule
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(`${this.name} has started.`);
    }

    stop() {
        console.log(`${this.name} has stopped.`);
    }
}

// Masini
class Car extends Vehicle {
    constructor(name) {
        super(name);
    }

    start() {
        console.log(`${this.name} car has started.`);
    }

    stop() {
        console.log(`${this.name} car has stopped.`);
    }
}

// Biciclete
class Bicycle extends Vehicle {
    constructor(name) {
        super(name);
    }

    start() {
        console.log(`${this.name} bicycle has started.`);
    }

    stop() {
        console.log(`${this.name} bicycle has stopped.`);
    }
}

// Main
function main() {
    const car = new Car('Audi');
    const bicycle = new Bicycle('Idk');

    const vehicles = [car, bicycle];

    vehicles.forEach(vehicle => {
        vehicle.start();
        vehicle.stop();
        console.log('---');
    });
}

// Rulam main
main();
