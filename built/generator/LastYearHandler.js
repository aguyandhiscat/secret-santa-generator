"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class LastYearHandler {
    static fromFile(fileName) {
        const handler = new this();
        handler.readInJson(fileName);
        handler.objectifyJson();
        return handler;
    }
    assignUnavailableSantas(santas) {
        this.santas = santas;
        for (const assignment of this.lastYearAssignments) {
            const giverName = assignment[0];
            const receiverName = assignment[1];
            this.assignUnavailableForGiverAndReceiverName(giverName, receiverName);
        }
    }
    assignUnavailableForGiverAndReceiverName(giverName, receiverName) {
        const giver = this.findSantaByName(giverName);
        const receiver = this.findSantaByName(receiverName);
        giver.assignLastYearsSanta(receiver);
    }
    findSantaByName(name) {
        let found;
        this.santas.forEach((s) => {
            if (s.name === name) {
                found = s;
            }
        });
        return found;
    }
    readInJson(fileName) {
        this.jsonRawSantaData = fs.readFileSync(fileName, "utf8");
    }
    objectifyJson() {
        this.lastYearAssignments = JSON.parse(this.jsonRawSantaData).lastyearassignments;
    }
}
exports.LastYearHandler = LastYearHandler;
//# sourceMappingURL=LastYearHandler.js.map