"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SantaReader_1 = require("./SantaReader");
const SecretSantaAssigner_1 = require("./SecretSantaAssigner");
const SecretSantaPrinter_1 = require("./SecretSantaPrinter");
class Generator {
    constructor() {
        this.santas = [];
        this.secretSantaAssigner = new SecretSantaAssigner_1.SecretSantaAssigner();
    }
    readInSantaDataFromFile(path) {
        this.santas = SantaReader_1.SantaReader.fromFile(path);
    }
    assignSecretSantas() {
        this.addSantasToAssigner();
        this.secretSantaAssigner.assign();
    }
    printSecretSantas() {
        const assignments = this.secretSantaAssigner.getAssignments();
        SecretSantaPrinter_1.SecretSantaPrinter.printAssignments(assignments);
    }
    addSantasToAssigner() {
        let santa;
        for (santa of this.santas) {
            this.secretSantaAssigner.addSanta(santa);
        }
    }
}
exports.Generator = Generator;
//# sourceMappingURL=Generator.js.map