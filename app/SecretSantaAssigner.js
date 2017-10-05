"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./lib/Utils");
class SecretSantaAssigner {
    constructor() {
        this.santas = new Array();
    }
    addSanta(santa) {
        this.santas.push(santa);
    }
    assign() {
        this.randomlySortedSantas = new Array();
        this.copySantasToRandomList();
        this.randomlySortSantas();
        this.assignments = Array();
        this.assignSecretSantas();
    }
    copySantasToRandomList() {
        let santa;
        for (santa of this.santas) {
            this.randomlySortedSantas.push(santa);
        }
    }
    randomlySortSantas() {
        this.randomlySortedSantas.sort(this.randomSortMethod);
    }
    assignSecretSantas() {
    }
    randomSortMethod(left, right) {
        return Utils_1.getRandomFloatInclusive(-1, 1);
    }
    getAssignments() {
        return this.assignments;
    }
}
exports.SecretSantaAssigner = SecretSantaAssigner;
//# sourceMappingURL=SecretSantaAssigner.js.map