import { Santa } from "./Santa";
import * as fs from "fs";

export class SantaReader {
    jsonRawSantaData: string;
    jsonSantaData: any;
    santas: Array<Santa>;

    static fromFile(fileName: string): Array<Santa> {
        let reader = new this();
        reader.readInJson(fileName);
        reader.objectifyJson();
        reader.convertJsonToSantas();

        return reader.getSantas();
    }

    readInJson(fileName: string): void {
        this.jsonRawSantaData = fs.readFileSync(fileName, "utf8");
    }

    objectifyJson(): void {
        this.jsonSantaData = JSON.parse(this.jsonRawSantaData);
    }

    convertJsonToSantas(): void {
        let names = this.jsonSantaData.names;
        let emails = this.jsonSantaData.emails;

        if (names.length !== emails.length) {
            throw "Names and Emails must be same length";
        }

        this.santas = this.getSantasFromNamesAndEmails(names, emails);
    }

    getSantasFromNamesAndEmails(names: Array<string>, emails: Array<string>): Array<Santa> {
        let santas: Array<Santa> = new Array<Santa>();

        for (let i = 0, ii = names.length; i < ii; i++) {
            let name = names[i];
            let email = emails[i];
            let santa = this.createSantaFromNameAndEmail(name, email);
            santas.push(santa);
        }

        return santas;
    }

    createSantaFromNameAndEmail(name: string, email: string): Santa {
        let santa = new Santa();
        santa.setName(name);
        santa.setEmail(email);
        return santa;
    }

    getSantas(): Array<Santa> {
        return this.santas;
    }
}
