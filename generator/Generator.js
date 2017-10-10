"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SantaReader_1 = require("./SantaReader");
const SecretSantaAssigner_1 = require("./SecretSantaAssigner");
const SecretSantaPrinter_1 = require("./SecretSantaPrinter");
class Generator {
    constructor() {
        this.santas = new Array();
        this.secretSantaAssigner = new SecretSantaAssigner_1.SecretSantaAssigner();
    }
    readInSantaDataFromFile(path) {
        this.santas = SantaReader_1.SantaReader.fromFile(path);
    }
    assignSecretSantas() {
        this.addSantasToAssigner();
        this.secretSantaAssigner.assign();
    }
    addSantasToAssigner() {
        let santa;
        for (santa of this.santas) {
            this.secretSantaAssigner.addSanta(santa);
        }
    }
    printSecretSantas() {
        let assignments = this.secretSantaAssigner.getAssignments();
        SecretSantaPrinter_1.SecretSantaPrinter.printAssignments(assignments);
    }
}
exports.Generator = Generator;
//# sourceMappingURL=Generator.js.map