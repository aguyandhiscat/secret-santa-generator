"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SantaReader_1 = require("./SantaReader");
const SecretSantaAssigner_1 = require("./SecretSantaAssigner");
const SecretSantaPrinter_1 = require("./SecretSantaPrinter");
class AppRunner {
    constructor() {
        this.santas = new Array();
        this.secretSantaAssigner = new SecretSantaAssigner_1.SecretSantaAssigner();
    }
    setPathToSantaData(path) {
        this.dataFilePath = path;
    }
    run() {
        this.readInSantaData();
        this.assignSecretSantas();
        this.printSecretSantas();
    }
    readInSantaData() {
        this.santas = SantaReader_1.SantaReader.fromFile(this.dataFilePath);
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
exports.AppRunner = AppRunner;
//# sourceMappingURL=AppRunner.js.map