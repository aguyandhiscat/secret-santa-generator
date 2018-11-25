"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Santa {
    static fromNameAndEmail(name, email) {
        const santa = new Santa();
        santa.name = name;
        santa.email = email;
        return santa;
    }
    constructor() {
        this.unavailableReceivers = [this];
    }
    assignLastYearsSanta(santa) {
        this.unavailableReceivers.push(santa);
    }
    getUnavailableReceivers() {
        return this.unavailableReceivers;
    }
}
exports.Santa = Santa;
//# sourceMappingURL=Santa.js.map