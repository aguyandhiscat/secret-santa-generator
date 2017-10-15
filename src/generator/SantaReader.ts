import * as fs from "fs";
import { Santa } from "./Santa";

export class SantaReader {
    public static fromFile(fileName: string): Santa[] {
        const reader = new this();
        reader.readInJson(fileName);
        reader.objectifyJson();
        reader.convertJsonToSantas();
        return reader.santas;
    }

    protected santas: Santa[];
    private jsonRawSantaData: string;
    private jsonSantaData: any;

    protected readInJson(fileName: string): void {
        this.jsonRawSantaData = fs.readFileSync(fileName, "utf8");
    }

    protected objectifyJson(): void {
        this.jsonSantaData = JSON.parse(this.jsonRawSantaData);
    }

    protected convertJsonToSantas(): void {
        const names = this.jsonSantaData.names;
        const emails = this.jsonSantaData.emails;
        if (names.length !== emails.length) {
            throw new Error("Names and Emails must be same length.");
        }
        this.santas = this.getSantasFromNamesAndEmails(names, emails);
    }

    protected getSantasFromNamesAndEmails(names: string[], emails: string[]): Santa[] {
        const santas: Santa[] = [];
        for (let i = 0, ii = names.length; i < ii; i++) {
            const name = names[i];
            const email = emails[i];
            santas.push(Santa.fromNameAndEmail(name, email));
        }
        return santas;
    }
}
