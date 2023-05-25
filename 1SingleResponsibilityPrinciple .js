const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Citirea
const userInput = {
    readNumber: function (message) {
        return new Promise((resolve) => {
            rl.question(message, (input) => {
                resolve(Number(input));
            });
        });
    },
};

//Calculator
const calculator = {
    add: function (a, b) {
        return a + b;
    },
};

//Afisare
const output = {
    displayResult: function (result) {
        console.log(`Suma celor doua numere este: ${result}`);
        rl.close();
    },
};

//Main
async function main() {
    //Citim numerele
    const num1 = await userInput.readNumber('Introduceti primul numar: ');
    const num2 = await userInput.readNumber('Introduceti al doilea numar: ');

    //Facem suma
    const sum = calculator.add(num1, num2);

    //Afisam
    output.displayResult(sum);
}

//Pornim functia main
main();
