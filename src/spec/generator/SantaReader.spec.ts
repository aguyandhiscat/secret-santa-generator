import { SantaReader } from "../../generator/SantaReader";
import { Santa } from "../../generator/Santa";
import { Tester } from "../helpers/Tester";

describe("A SantaReader", () => {
    describe("can accept a file and return Santas", () => {
        it("but an unknown file will throw", () => {
            thisFileWillThrow("notafile");
        });

        describe("from a real file", () => {
            it("that's not json, will throw", () => {
                thisFileWillThrow("not-json-list.json");
            });

            it("that's missing proper keys, will throw", () => {
                thisFileWillThrow("invalid-keys.json");
            });

            it("where names and emails don't match up, will throw", () => {
                thisFileWillThrow("non-matching-names-emails.json");
            });

            it("that has matching names and emails", () => {
                let santas: Array<Santa> = SantaReader.fromFile(Tester.helpersPwd() + "/test-santa-list.json");
                expect(santas.length).toBe(5);
                expect(santas[2].email).toBe("bloop@blue.com");
            });
        });
    });

    function thisFileWillThrow(fileName: string) {
        let run = () => {
            SantaReader.fromFile(Tester.helpersPwd() + "/" + fileName);
        };
        expect(run).toThrow();
    }
});
