"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assignment_1 = require("../../emailer/Assignment");
const Santa_1 = require("../../emailer/Santa");
describe("An Assignment", () => {
    it("should have a from and to assignable to Santa", () => {
        const assignment = new Assignment_1.default();
        assignment.from = Santa_1.default.fromNameAndEmail("Alfa", "bravo");
        assignment.to = Santa_1.default.fromNameAndEmail("Charlie", "delta");
    });
});
//# sourceMappingURL=Assignment.spec.js.map