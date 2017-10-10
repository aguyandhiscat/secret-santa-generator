"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SantaReader_1 = require("../../generator/SantaReader");
const Tester_1 = require("../helpers/Tester");
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
                let santas = SantaReader_1.SantaReader.fromFile(Tester_1.Tester.helpersPwd() + "/test-santa-list.json");
                expect(santas.length).toBe(5);
                expect(santas[2].email).toBe("bloop@blue.com");
            });
        });
    });
    function thisFileWillThrow(fileName) {
        let run = () => {
            SantaReader_1.SantaReader.fromFile(Tester_1.Tester.helpersPwd() + "/" + fileName);
        };
        expect(run).toThrow();
    }
});
//# sourceMappingURL=SantaReader.spec.js.map