"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tester_1 = require("../helpers/Tester");
const Generator_1 = require("../../generator/Generator");
const Santa_1 = require("../../generator/Santa");
const SecretSantaPrinter_1 = require("../../generator/SecretSantaPrinter");
describe("The Generator", () => {
    let generator;
    beforeEach(() => {
        createGenerator();
    });
    describe("can read in santa data", () => {
        it("but file must exist", () => {
            let run = () => {
                generator.readInSantaDataFromFile(Tester_1.Tester.helpersPwd() + "/nothing");
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
                let className = Santa_1.Santa.name;
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
        expect(SecretSantaPrinter_1.SecretSantaPrinter.printAssignments).toHaveBeenCalledWith("these are the assignments");
        SecretSantaPrinter_1.SecretSantaPrinter;
    });
    function createGenerator() {
        generator = new Generator_1.Generator();
    }
    function readInGoodSantaData() {
        generator.readInSantaDataFromFile(Tester_1.Tester.helpersPwd() + "/test-santa-list.json");
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
        spyOn(SecretSantaPrinter_1.SecretSantaPrinter, "printAssignments");
    }
    function addSomeSantasForAssignTest() {
        generator.santas.push(new Santa_1.Santa());
        generator.santas.push(new Santa_1.Santa());
        generator.santas.push(new Santa_1.Santa());
    }
});
//# sourceMappingURL=Generator.spec.js.map