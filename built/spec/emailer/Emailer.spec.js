"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleEmailer_1 = require("../../emailer/ConsoleEmailer");
const SendMailWrapper_1 = require("../../emailer/SendMailWrapper");
describe("An Emailer", () => {
    it("should call through to SendMailWrapper", () => {
        const mail = getMail();
        const emailer = new ConsoleEmailer_1.default();
        spyOn(SendMailWrapper_1.default, "call");
        emailer.send(mail);
        expect(SendMailWrapper_1.default.call).toHaveBeenCalledWith("bravo", "charlie", "delta", "alfa");
    });
});
function getMail() {
    const fakeMail = new FakeMail();
    fakeMail.body = "alfa";
    fakeMail.from = "bravo";
    fakeMail.subject = "charlie";
    fakeMail.to = "delta";
    return fakeMail;
}
class FakeMail {
}
//# sourceMappingURL=Emailer.spec.js.map