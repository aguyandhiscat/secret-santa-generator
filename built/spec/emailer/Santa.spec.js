"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Santa_1 = require("../../emailer/Santa");
describe("A Santa", () => {
    it("should be creatable from name and email", () => {
        const santa = Santa_1.default.fromNameAndEmail("alfa", "bravo");
        expect(santa.name).toBe("alfa");
        expect(santa.email).toBe("bravo");
    });
});
//# sourceMappingURL=Santa.spec.js.map