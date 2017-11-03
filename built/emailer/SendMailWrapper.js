"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendMailWrapper {
    static call(from, subject, to, body) {
        this.from = from;
        this.subject = subject;
        this.to = to;
        this.body = body;
    }
}
exports.default = SendMailWrapper;
//# sourceMappingURL=SendMailWrapper.js.map