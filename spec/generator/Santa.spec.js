"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Santa_1 = require("../../generator/Santa");
describe("A Santa", () => {
    it("should be creatable from a name and email", () => {
        const santa = Santa_1.Santa.fromNameAndEmail("Claus", "me@me.com");
        expect(santa.name).toBe("Claus");
        expect(santa.email).toBe("me@me.com");
    });
});
//# sourceMappingURL=Santa.spec.js.map