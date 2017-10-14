"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SecretSantaAssignment {
    static fromGifterAndReceiver(gifter, receiver) {
        const assignment = new this();
        assignment.gifter = gifter;
        assignment.receiver = receiver;
        return assignment;
    }
    getReceiver() {
        return this.receiver;
    }
}
exports.SecretSantaAssignment = SecretSantaAssignment;
//# sourceMappingURL=SecretSantaAssignment.js.map