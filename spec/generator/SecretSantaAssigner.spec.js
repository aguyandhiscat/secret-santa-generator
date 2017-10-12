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
                testAnAssignmentCase();
            }
        });
        function testAnAssignmentCase() {
            setupAssignTests();
            avoidManipulatingObjectReference();
            removeAssignedSantasFromClonedList();
            clonedSantasShouldBe0Length();
        }
        function setupAssignTests() {
            secretSantaAssigner.assign();
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
            clonedSantas = shallowCloneArray(santas);
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
            clonedSantas.splice(index, 1);
        }
    });
    describe("creates a random list", () => {
        let listOfRandomLists = new Array();
        it("and it must be randomly sorted", () => {
            setupAssignerWithSantasForRandomSorting();
            setupMultipleRandomLists();
            verifyThatEachSortIsUnique();
        });
        function setupAssignerWithSantasForRandomSorting() {
            addMoreSantas();
            secretSantaAssigner.copySantasForAssignment();
        }
        function setupMultipleRandomLists() {
            for (let i = 0, ii = 10; i < ii; i++) {
                doSortAndStoreRandomList();
            }
        }
        function doSortAndStoreRandomList() {
            doSort();
            storeRandomList();
        }
        function doSort() {
            secretSantaAssigner.randomlySortSantas();
        }
        function storeRandomList() {
            listOfRandomLists.push(getRandomList());
        }
        function getRandomList() {
            return shallowCloneArray(secretSantaAssigner.santasForAssignment);
        }
        function verifyThatEachSortIsUnique() {
            for (let i = 0, ii = (listOfRandomLists.length - 1); i < ii; i++) {
                let firstList = listOfRandomLists[i];
                let nextList = listOfRandomLists[i + 1];
                if (!listsAreUnique(firstList, nextList)) {
                    fail("Lists are not randomly sorted. Try reruning first before thinking this is an error.");
                    break;
                }
            }
        }
        function listsAreUnique(listA, listB) {
            if (listA.length !== listB.length) {
                return true;
            }
            for (let i = 0, ii = listA.length; i < ii; i++) {
                if (listA[i] !== listB[i]) {
                    return true;
                }
            }
            return false;
        }
    });
    function createSecretSantaAssigner() {
        secretSantaAssigner = new SecretSantaAssigner_1.SecretSantaAssigner();
    }
    function addSomeSantas() {
        addSantaWithName("Bilbo");
        addSantaWithName("Claus");
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
    function shallowCloneArray(arr) {
        return arr.slice(0);
    }
});
//# sourceMappingURL=SecretSantaAssigner.spec.js.map