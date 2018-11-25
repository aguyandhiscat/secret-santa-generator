"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emailer {
    send(mail) {
        const { body, from, subject, to } = mail;
        console.log(from, subject, to, body);
    }
}
exports.default = Emailer;
//# sourceMappingURL=ConsoleEmailer.js.map