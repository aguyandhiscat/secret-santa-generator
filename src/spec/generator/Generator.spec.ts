import { Tester } from "../helpers/Tester";
import { Generator } from "../../generator/Generator";
import { Santa } from "../../generator/Santa";
import { SecretSantaPrinter } from "../../generator/SecretSantaPrinter";

describe("The Generator", () => {
    let generator: Generator;

    beforeEach(() => {
        createGenerator();
    });

    describe("can read in santa data", () => {
        it("but file must exist", () => {
            let run = () => {
                generator.readInSantaDataFromFile(Tester.helpersPwd() + "/nothing");
            };
            expect(run).toThrow();
        });

        describe("found in .santas", () => {
            beforeEach(() => {
                readInGoodSantaData();
            });

            it("which is defined", () => {
                expect(generator.santas).toBeDefined();
            });

            it("which has a valid length", () => {
                expect(generator.santas.length).toBe(5);
            });

            it("of which items are of class Santa", () => {
                let objectName = generator.santas[0].constructor.name;
                let className = Santa.name;
                expect(objectName).toBe(className);
            });
        });
    });

    describe("can assign secret santas", () => {
        beforeEach(() => {
            mockOutSecretSantaAssignerForAssignTest();
        });

        it("with an empty set of santas", () => {
            generator.assignSecretSantas();
            expect(generator.secretSantaAssigner.addSanta).not.toHaveBeenCalled();
            expect(generator.secretSantaAssigner.assign).toHaveBeenCalled();
        });

        it("with some santas", () => {
            addSomeSantasForAssignTest();
            generator.assignSecretSantas();
            expect(generator.secretSantaAssigner.addSanta).toHaveBeenCalledTimes(3);
            expect(generator.secretSantaAssigner.assign).toHaveBeenCalled();
        });
    });

    it("can print the santa assignments", () => {
        mockOutSecretSantaAssignerForPrintTest();
        mockOutPrinterForPrintTest();
        generator.printSecretSantas();
        expect(SecretSantaPrinter.printAssignments).toHaveBeenCalledWith("these are the assignments");

        SecretSantaPrinter;
    });

    function createGenerator() {
        generator = new Generator();
    }

    function readInGoodSantaData() {
        generator.readInSantaDataFromFile(Tester.helpersPwd() + "/test-santa-list.json");
    }

    function mockOutSecretSantaAssignerForAssignTest() {
        spyOn(generator.secretSantaAssigner, "addSanta");
        spyOn(generator.secretSantaAssigner, "assign");
    }

    function mockOutSecretSantaAssignerForPrintTest() {
        let spy = spyOn(generator.secretSantaAssigner, "getAssignments");
        spy.and.returnValue("these are the assignments");
    }

    function mockOutPrinterForPrintTest() {
        spyOn(SecretSantaPrinter, "printAssignments");
    }

    function addSomeSantasForAssignTest() {
        generator.santas.push(new Santa());
        generator.santas.push(new Santa());
        generator.santas.push(new Santa());
    }
});
