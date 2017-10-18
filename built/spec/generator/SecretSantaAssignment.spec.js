"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SecretSantaAssignment_1 = require("../../generator/SecretSantaAssignment");
const UtilsSanta = require("../helpers/UtilsSanta");
describe("A SecretSantaAssignment", () => {
    it("should be creatable from a gifter and a receiver", () => {
        const gifter = UtilsSanta.createFromName("gifter");
        const receiver = UtilsSanta.createFromName("receiver");
        const assignment = SecretSantaAssignment_1.SecretSantaAssignment.fromGifterAndReceiver(gifter, receiver);
        expect(assignment.gifter).toBe(gifter);
        expect(assignment.receiver).toBe(receiver);
    });
});
//# sourceMappingURL=SecretSantaAssignment.spec.js.map