// Interfata pentru un document imprimabil
const Printable = {
    print: function() {
        console.log("Documentul este imprimat.");
    }
};

// Interfata pentru un document scrisabil
const Writable = {
    write: function() {
        console.log("Documentul este scris.");
    }
};

// Interfata pentru un document citibil
const Readable = {
    read: function() {
        console.log("Documentul este citit.");
    }
};

// Utilizam interfetele in clasa
class Document {
    constructor() {
    }

    // Implementam metodele din interfete
    print() {
        Printable.print();
    }

    write() {
        Writable.write();
    }

    read() {
        Readable.read();
    }
}

// Utilizarea claselor
function processDocument(document) {
    if (typeof document.print === 'function') {
        document.print();
    }

    if (typeof document.write === 'function') {
        document.write();
    }

    if (typeof document.read === 'function') {
        document.read();
    }
}

const myDocument = new Document();
processDocument(myDocument);
