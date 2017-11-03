"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SendMailWrapper_1 = require("./SendMailWrapper");
class Emailer {
    send(mail) {
        const { body, from, subject, to } = mail;
        SendMailWrapper_1.default.call(from, subject, to, body);
    }
}
exports.default = Emailer;
//# sourceMappingURL=Emailer.js.map