import Read from "../../emailer/Read";
import MockDuplexStream from "../helpers/MockDuplexStream";

describe("The Reader", () => {
    it("should read in from a stream", (done) => {
        const stream = new MockDuplexStream();
        const read = Read.from(stream);
        read.onComplete(() => {
            expect(read.getData()).toBe("Hi");
            done();
        });
        stream.send("Hi");
        stream.send(null);
        stream.end();
    });
});
