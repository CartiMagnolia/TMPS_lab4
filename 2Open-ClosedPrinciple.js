// Modulul pentru gestionarea mesajelor
class Message {
    constructor(content) {
        this.content = content;
    }

    display() {
        console.log(this.content);
    }
}

// Modulul pentru gestionarea mesajelor de tip text
class TextMessage extends Message {
    constructor(content) {
        super(content);
    }

    display() {
        console.log(`[Text] ${this.content}`);
    }
}

// Modulul pentru gestionarea mesajelor de tip imagine
class ImageMessage extends Message {
    constructor(content, imageUrl) {
        super(content);
        this.imageUrl = imageUrl;
    }

    display() {
        console.log(`[Image] ${this.content}`);
        console.log(`[Image URL] ${this.imageUrl}`);
    }
}

// Funcția principală a aplicației
function main() {
    const messages = [
        new TextMessage('Hello, world!'),
        new ImageMessage('Cat photo', 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'),
    ];

    // Afișăm mesajele în consolă
    messages.forEach((message) => {
        message.display();
        console.log('---');
    });
}

// Rulăm funcția principală
main();
