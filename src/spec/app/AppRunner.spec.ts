import { Tester } from "../helpers/Tester";
import { AppRunner } from "../../app/AppRunner";
import { Santa } from "../../app/Santa";
import { SecretSantaPrinter } from "../../app/SecretSantaPrinter";

describe("The AppRunner", () => {
    let appRunner: AppRunner;

    beforeEach(() => {
        createAppRunner();
    });

    describe("can read in santa data", () => {
        it("but file must be set first", () => {
            let run = () => {
                appRunner.readInSantaData();
            };
            expect(run).toThrow();
        });

        it("but file must exist", () => {
            let run = () => {
                appRunner.setPathToSantaData(Tester.helpersPwd() + "/nothing");
                appRunner.readInSantaData();
            };
            expect(run).toThrow();
        });

        describe("found in .santas", () => {
            beforeEach(() => {
                setPathAndReadInSantaData();
            });

            it("which is defined", () => {
                expect(appRunner.santas).toBeDefined();
            });

            it("which has a valid length", () => {
                expect(appRunner.santas.length).toBe(5);
            });

            it("of which items are of class Santa", () => {
                let objectName = appRunner.santas[0].constructor.name;
                let className = Santa.name;
                expect(objectName).toBe(className);
            });
        });
    });

    it("has a main function 'run', which calls in sequence", () => {
        mockOutAppRunnerForRunTest();
        appRunner.run();
        // @ts-ignore: Argument not assignable
        expect(appRunner.readInSantaData).toHaveBeenCalledBefore(appRunner.assignSecretSantas);
        // @ts-ignore: Argument not assignable
        expect(appRunner.assignSecretSantas).toHaveBeenCalledBefore(appRunner.printSecretSantas);
        expect(appRunner.printSecretSantas).toHaveBeenCalled();
    });

    describe("can assign secret santas", () => {
        beforeEach(() => {
            mockOutSecretSantaAssignerForAssignTest();
        });

        it("with an empty set of santas", () => {
            appRunner.assignSecretSantas();
            expect(appRunner.secretSantaAssigner.addSanta).not.toHaveBeenCalled();
            expect(appRunner.secretSantaAssigner.assign).toHaveBeenCalled();
        });

        it("with some santas", () => {
            addSomeSantasForAssignTest();
            appRunner.assignSecretSantas();
            expect(appRunner.secretSantaAssigner.addSanta).toHaveBeenCalledTimes(3);
            expect(appRunner.secretSantaAssigner.assign).toHaveBeenCalled();
        });
    });

    it("can print the santa assignments", () => {
        mockOutSecretSantaAssignerForPrintTest();
        mockOutPrinterForPrintTest();
        appRunner.printSecretSantas();
        expect(SecretSantaPrinter.printAssignments).toHaveBeenCalledWith("these are the assignments");

        SecretSantaPrinter;
    });

    function createAppRunner() {
        appRunner = new AppRunner();
    }

    function setPathAndReadInSantaData() {
        appRunner.setPathToSantaData(Tester.helpersPwd() + "/test-santa-list.json");
        appRunner.readInSantaData();
    }

    function mockOutAppRunnerForRunTest() {
        spyOn(appRunner, "readInSantaData");
        spyOn(appRunner, "assignSecretSantas");
        spyOn(appRunner, "printSecretSantas");
    }

    function mockOutSecretSantaAssignerForAssignTest() {
        spyOn(appRunner.secretSantaAssigner, "addSanta");
        spyOn(appRunner.secretSantaAssigner, "assign");
    }

    function mockOutSecretSantaAssignerForPrintTest() {
        let spy = spyOn(appRunner.secretSantaAssigner, "getAssignments");
        spy.and.returnValue("these are the assignments");
    }

    function mockOutPrinterForPrintTest() {
        spyOn(SecretSantaPrinter, "printAssignments");
    }

    function addSomeSantasForAssignTest() {
        appRunner.santas.push(new Santa());
        appRunner.santas.push(new Santa());
        appRunner.santas.push(new Santa());
    }
});
