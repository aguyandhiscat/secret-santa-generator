"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Read_1 = require("../../emailer/Read");
const MockDuplexStream_1 = require("../helpers/MockDuplexStream");
describe("The Reader", () => {
    it("should read in from a stream", (done) => {
        const stream = new MockDuplexStream_1.default();
        Read_1.default.from(stream).onComplete((reader) => {
            expect(reader.getData()).toBe("Hi");
            done();
        });
        stream.send("Hi");
        stream.send(null);
        stream.end();
    });
});
//# sourceMappingURL=Read.spec.js.map