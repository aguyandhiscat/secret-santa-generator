"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Santa_1 = require("./Santa");
const fs = require("fs");
class SantaReader {
    static fromFile(fileName) {
        let reader = new this();
        reader.readInJson(fileName);
        reader.objectifyJson();
        reader.convertJsonToSantas();
        return reader.getSantas();
    }
    readInJson(fileName) {
        this.jsonRawSantaData = fs.readFileSync(fileName, "utf8");
    }
    objectifyJson() {
        this.jsonSantaData = JSON.parse(this.jsonRawSantaData);
    }
    convertJsonToSantas() {
        let names = this.jsonSantaData.names;
        let emails = this.jsonSantaData.emails;
        if (names.length !== emails.length) {
            throw "Names and Emails must be same length";
        }
        this.santas = this.getSantasFromNamesAndEmails(names, emails);
    }
    getSantasFromNamesAndEmails(names, emails) {
        let santas = new Array();
        for (let i = 0, ii = names.length; i < ii; i++) {
            let name = names[i];
            let email = emails[i];
            let santa = this.createSantaFromNameAndEmail(name, email);
            santas.push(santa);
        }
        return santas;
    }
    createSantaFromNameAndEmail(name, email) {
        let santa = new Santa_1.Santa();
        santa.setName(name);
        santa.setEmail(email);
        return santa;
    }
    getSantas() {
        return this.santas;
    }
}
exports.SantaReader = SantaReader;
//# sourceMappingURL=SantaReader.js.map