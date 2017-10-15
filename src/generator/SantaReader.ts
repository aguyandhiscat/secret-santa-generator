import { Santa } from "./Santa";
import * as fs from "fs";

export class SantaReader {
    jsonRawSantaData: string;
    jsonSantaData: any;
    santas: Array<Santa>;

    static fromFile(fileName: string): Array<Santa> {
        const reader = new this();
        reader.readInJson(fileName);
        reader.objectifyJson();
        reader.convertJsonToSantas();
        return reader.santas;
    }

    readInJson(fileName: string): void {
        this.jsonRawSantaData = fs.readFileSync(fileName, "utf8");
    }

    objectifyJson(): void {
        this.jsonSantaData = JSON.parse(this.jsonRawSantaData);
    }

    convertJsonToSantas(): void {
        const names = this.jsonSantaData.names;
        const emails = this.jsonSantaData.emails;
        if (names.length !== emails.length) {
            throw "Names and Emails must be same length.";
        }
        this.santas = this.getSantasFromNamesAndEmails(names, emails);
    }

    getSantasFromNamesAndEmails(names: Array<string>, emails: Array<string>): Array<Santa> {
        const santas: Array<Santa> = new Array<Santa>();
        for (let i = 0, ii = names.length; i < ii; i++) {
            const name = names[i];
            const email = emails[i];
            santas.push(Santa.fromNameAndEmail(name, email));
        }
        return santas;
    }
}
