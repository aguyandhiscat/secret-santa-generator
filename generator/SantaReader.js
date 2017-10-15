"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Santa_1 = require("./Santa");
const fs = require("fs");
class SantaReader {
    static fromFile(fileName) {
        const reader = new this();
        reader.readInJson(fileName);
        reader.objectifyJson();
        reader.convertJsonToSantas();
        return reader.santas;
    }
    readInJson(fileName) {
        this.jsonRawSantaData = fs.readFileSync(fileName, "utf8");
    }
    objectifyJson() {
        this.jsonSantaData = JSON.parse(this.jsonRawSantaData);
    }
    convertJsonToSantas() {
        const names = this.jsonSantaData.names;
        const emails = this.jsonSantaData.emails;
        if (names.length !== emails.length) {
            throw "Names and Emails must be same length.";
        }
        this.santas = this.getSantasFromNamesAndEmails(names, emails);
    }
    getSantasFromNamesAndEmails(names, emails) {
        const santas = new Array();
        for (let i = 0, ii = names.length; i < ii; i++) {
            const name = names[i];
            const email = emails[i];
            santas.push(Santa_1.Santa.fromNameAndEmail(name, email));
        }
        return santas;
    }
}
exports.SantaReader = SantaReader;
//# sourceMappingURL=SantaReader.js.map