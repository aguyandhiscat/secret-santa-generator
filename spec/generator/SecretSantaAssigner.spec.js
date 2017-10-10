"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SecretSantaAssigner_1 = require("../../generator/SecretSantaAssigner");
const Santa_1 = require("../../generator/Santa");
const SecretSantaAssignment_1 = require("../../generator/SecretSantaAssignment");
describe("A SecretSantaAssigner", () => {
    let secretSantaAssigner;
    beforeEach(() => {
        createSecretSantaAssigner();
    });
    describe("can add Santas", () => {
        beforeEach(() => {
            addSomeSantas();
        });
        it("and have a length", () => {
            let length = secretSantaAssigner.santas.length;
            expect(length).toBe(2);
        });
        it("and be those santas", () => {
            let s0 = secretSantaAssigner.santas[0];
            let s1 = secretSantaAssigner.santas[1];
            expect(s0.name).toBe("Bilbo");
            expect(s1.name).toBe("Claus");
        });
    });
    describe("can assign Santas", () => {
        let santas;
        let assignments;
        let clonedSantas;
        beforeEach(() => {
            addMoreSantas();
            setupAssignTests();
        });
        it("and assignments are a certain object", () => {
            let objectName = secretSantaAssigner.assignments[0].constructor.name;
            let className = SecretSantaAssignment_1.SecretSantaAssignment.name;
            expect(objectName).toBe(className);
        });
        it("and all santas are assigned", () => {
            for (let i = 0, ii = 10; i < ii; i++) {
                setupAssignTests();
                avoidManipulatingObjectReference();
                removeAssignedSantasFromClonedList();
                clonedSantasShouldBe0Length();
            }
        });
        function setupAssignTests() {
            assignSantas();
            santas = secretSantaAssigner.santas;
            assignments = secretSantaAssigner.assignments;
        }
        function avoidManipulatingObjectReference() {
            shallowCloneSantas();
        }
        function removeAssignedSantasFromClonedList() {
            assignments.forEach((santaAssignment) => {
                removeClonedSantaByAssignment(santaAssignment);
            });
        }
        function clonedSantasShouldBe0Length() {
            expect(clonedSantas.length).toBe(0);
        }
        function shallowCloneSantas() {
            clonedSantas = santas.slice(0);
        }
        function removeClonedSantaByAssignment(santaAssignment) {
            let receivingSanta = santaAssignment.getReceiver();
            removeClonedSanta(receivingSanta);
        }
        function removeClonedSanta(santa) {
            let index = clonedSantas.indexOf(santa);
            if (index < 0) {
                throw "Receiving Santa is not in santa list. How is this possible?";
            }
            removeClonedSantaByIndex(index);
        }
        function removeClonedSantaByIndex(index) {
            clonedSantas = clonedSantas.splice(index, 1);
        }
    });
    describe("creates a random list", () => {
        it("and it must be randomly sorted", () => {
        });
    });
    function createSecretSantaAssigner() {
        secretSantaAssigner = new SecretSantaAssigner_1.SecretSantaAssigner();
    }
    function addSomeSantas() {
        addSantaWithName("Bilbo");
        addSantaWithName("Claus");
    }
    function assignSantas() {
        secretSantaAssigner.assign();
    }
    function addMoreSantas() {
        addSantaWithName("Alfa");
        addSantaWithName("Bravo");
        addSantaWithName("Charlie");
        addSantaWithName("Delta");
        addSantaWithName("Echo");
        addSantaWithName("Foxtrot");
    }
    function addSantaWithName(name) {
        secretSantaAssigner.addSanta(createSantaWithName(name));
    }
    function createSantaWithName(name) {
        let santa = new Santa_1.Santa();
        santa.setName(name);
        return santa;
    }
});
//# sourceMappingURL=SecretSantaAssigner.spec.js.map