// Definim interfeța
class NotificationService {
    sendNotification(message) {
        throw new Error("Error");
    }
}

// Extindem interfata pentru mesaj Email
class EmailNotificationService extends NotificationService {
    sendNotification(message) {
        console.log("Trimitere notificare prin e-mail:", message);
    }
}

// Extindem interfata pentru mesaj SMS
class SMSNotificationService extends NotificationService {
    sendNotification(message) {
        console.log("Trimitere notificare prin SMS:", message);
    }
}

// Clasa principala pentru utilizarea serviciului de mesaj
class User {
    constructor(name, notificationService) {
        this.name = name;
        this.notificationService = notificationService;
    }

    sendWelcomeNotification() {
        const message = `Bun venit, ${this.name}!`;
        this.notificationService.sendNotification(message);
    }
}

// Utilizarea claselor
const emailNotificationService = new EmailNotificationService();
const userWithEmailNotification = new User("A", emailNotificationService);
userWithEmailNotification.sendWelcomeNotification();

const smsNotificationService = new SMSNotificationService();
const userWithSMSNotification = new User("B", smsNotificationService);
userWithSMSNotification.sendWelcomeNotification();
