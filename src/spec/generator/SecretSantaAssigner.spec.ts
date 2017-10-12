import { SecretSantaAssigner } from "../../generator/SecretSantaAssigner";
import { Santa } from "../../generator/Santa";
import { SecretSantaAssignment } from "../../generator/SecretSantaAssignment";

describe("A SecretSantaAssigner", () => {
    let secretSantaAssigner: SecretSantaAssigner;

    beforeEach(() => {
        createSecretSantaAssigner();
    });

    describe("can add Santas", () => {
        beforeEach(() => {
            addSomeSantas();
        });

        it("and have a length", () => {
            let length: number = secretSantaAssigner.santas.length;
            expect(length).toBe(2);
        });

        it("and be those santas", () => {
            let s0: Santa = secretSantaAssigner.santas[0];
            let s1: Santa = secretSantaAssigner.santas[1];
            expect(s0.name).toBe("Bilbo");
            expect(s1.name).toBe("Claus");
        });
    });

    describe("can assign Santas", () => {
        let santas: Array<Santa>;
        let assignments: Array<SecretSantaAssignment>;
        let clonedSantas: Array<Santa>;

        beforeEach(() => {
            addMoreSantas();
            setupAssignTests();
        });

        it("and assignments are a certain object", () => {
            let objectName = secretSantaAssigner.assignments[0].constructor.name;
            let className = SecretSantaAssignment.name;
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
            assignments.forEach((santaAssignment: SecretSantaAssignment) => {
                removeClonedSantaByAssignment(santaAssignment);
            });
        }

        function clonedSantasShouldBe0Length() {
            expect(clonedSantas.length).toBe(0);
        }

        function shallowCloneSantas() {
            clonedSantas = shallowCloneArray(santas);
        }

        function removeClonedSantaByAssignment(santaAssignment: SecretSantaAssignment) {
            let receivingSanta: Santa = santaAssignment.getReceiver();
            removeClonedSanta(receivingSanta);
        }

        function removeClonedSanta(santa: Santa) {
            let index: number = clonedSantas.indexOf(santa);
            if (index < 0) {
                throw "Receiving Santa is not in santa list. How is this possible?";
            }
            removeClonedSantaByIndex(index);
        }

        function removeClonedSantaByIndex(index: number) {
            clonedSantas.splice(index, 1);
        }
    });

    describe("creates a random list", () => {
        let listOfRandomLists: Array<Array<Santa>> = new Array<Array<Santa>>();

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
                let firstList: Array<Santa> = listOfRandomLists[i];
                let nextList: Array<Santa> = listOfRandomLists[i + 1];
                if (!listsAreUnique(firstList, nextList)) {
                    fail("Lists are not randomly sorted. Try reruning first before thinking this is an error.");
                    break;
                }
            }
        }

        function listsAreUnique(listA: Array<any>, listB: Array<any>) {
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
        secretSantaAssigner = new SecretSantaAssigner();
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

    function addSantaWithName(name: string) {
        secretSantaAssigner.addSanta(createSantaWithName(name));
    }

    function createSantaWithName(name: string) {
        let santa: Santa = new Santa();
        santa.setName(name);
        return santa;
    }

    function shallowCloneArray(arr: Array<any>) {
        return arr.slice(0);
    }
});