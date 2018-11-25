import Emailer from "../../emailer/ConsoleEmailer";
import IMail from "../../emailer/IMail";
import SendMailWrapper from "../../emailer/SendMailWrapper";

describe("An Emailer", () => {
    it("should call through to SendMailWrapper", () => {
        const mail = getMail();
        const emailer = new Emailer();
        spyOn(SendMailWrapper, "call");
        emailer.send(mail);
        expect(SendMailWrapper.call).toHaveBeenCalledWith(
            "bravo", "charlie", "delta", "alfa");
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

class FakeMail implements IMail {
    public body: string;
    public from: string;
    public subject: string;
    public to: string;
}
