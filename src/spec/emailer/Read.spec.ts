import Read from "../../emailer/Read";
import MockDuplexStream from "../helpers/MockDuplexStream";

fdescribe("The Reader", () => {
    it("should read in from a stream", (done) => {
        const stream = new MockDuplexStream();
        Read.from(stream).onComplete((reader: Read) => {
            expect(reader.getData()).toBe("Hi");
            done();
        });
        stream.send("Hi");
        stream.send(null);
        stream.end();
    });
});
