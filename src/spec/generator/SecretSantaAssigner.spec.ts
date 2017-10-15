import { SecretSantaAssigner } from "../../generator/SecretSantaAssigner";
import { Santa } from "../../generator/Santa";
import { SecretSantaAssignment } from "../../generator/SecretSantaAssignment";
import * as UtilsArray from "../helpers/UtilsArray";
import * as UtilsSantaAssignment from "../helpers/UtilsSantaAssignment";
import * as UtilsSanta from "../helpers/UtilsSanta";

let secretSantaAssigner: SecretSantaAssigner;
let addedSantas: Array<Santa>;
let assignments: Array<SecretSantaAssignment>;
let storedAssignments: Array<Array<SecretSantaAssignment>>;

describe("A SecretSantaAssigner's assignments", () => {
    it("should use all added santas", () => {
        doAssignment();
        removeAssignedSantas();
        expectAllSantasToBeRemoved();
    });

    it("should be random", () => {
        generateNAssignments(10);
        expectUniqueAssignments();
    });
});

function doAssignment() {
    setupAssigner();
    addSantas();
    callAssign();
}

function setupAssigner() {
    secretSantaAssigner = new SecretSantaAssigner();
    addedSantas = new Array<Santa>();
}

function addSantas() {
    addSantaWithName("Alfa");
    addSantaWithName("Bravo");
    addSantaWithName("Charlie");
    addSantaWithName("Delta");
    addSantaWithName("Echo");
    addSantaWithName("Foxtrot");
}

function callAssign() {
    secretSantaAssigner.assign();
    assignments = secretSantaAssigner.getAssignments();
}

function addSantaWithName(name: string) {
    const santa: Santa = UtilsSanta.createFromName(name);
    secretSantaAssigner.addSanta(santa);
    addedSantas.push(santa);
}

function removeAssignedSantas() {
    assignments.forEach((santaAssignment: SecretSantaAssignment) => {
        removeSantaByAssignment(santaAssignment);
    });
}

function removeSantaByAssignment(santaAssignment: SecretSantaAssignment) {
    const receiver: Santa = santaAssignment.receiver;
    if (!UtilsArray.has(addedSantas, receiver)) {
        throw "Receiving Santa was never added.";
    }
    UtilsArray.removeItem(addedSantas, receiver);
}

function expectAllSantasToBeRemoved() {
    expect(addedSantas.length).toBe(0);
}

function generateNAssignments(count: number) {
    storedAssignments = new Array<Array<SecretSantaAssignment>>();
    for (let i = 0; i < count; i++) {
        doAssignment();
        storedAssignments.push(assignments);
    }
}

function expectUniqueAssignments() {
    const length = storedAssignments.length;
    for (let i = 0, ii = length - 1; i < ii; i++) {
        const anchor = storedAssignments[i];
        for (let j = i + 1, jj = length; j < jj; j++) {
            const traverse = storedAssignments[j];
            if (!assignmentsAreUnique(anchor, traverse)) {
                fail("An identical list of assignments was found. Try rerunning before thinking this is an error.");
                return;
            }
        }
    }
}

function assignmentsAreUnique(left: Array<SecretSantaAssignment>, right: Array<SecretSantaAssignment>) {
    if (left.length !== right.length) {
        return true;
    }

    for (let i = 0, ii = left.length; i < ii; i++) {
        if (!UtilsSantaAssignment.equals(left[i], right[i])) {
            return true;
        }
    }

    return false;
}
