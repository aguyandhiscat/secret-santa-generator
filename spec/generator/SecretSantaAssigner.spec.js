"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SecretSantaAssigner_1 = require("../../generator/SecretSantaAssigner");
const UtilsArray = require("../helpers/UtilsArray");
const UtilsSantaAssignment = require("../helpers/UtilsSantaAssignment");
const UtilsSanta = require("../helpers/UtilsSanta");
let secretSantaAssigner;
let addedSantas;
let assignments;
let storedAssignments;
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
    secretSantaAssigner = new SecretSantaAssigner_1.SecretSantaAssigner();
    addedSantas = new Array();
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
function addSantaWithName(name) {
    const santa = UtilsSanta.createFromName(name);
    secretSantaAssigner.addSanta(santa);
    addedSantas.push(santa);
}
function removeAssignedSantas() {
    assignments.forEach((santaAssignment) => {
        removeSantaByAssignment(santaAssignment);
    });
}
function removeSantaByAssignment(santaAssignment) {
    const receiver = santaAssignment.receiver;
    if (!UtilsArray.has(addedSantas, receiver)) {
        throw "Receiving Santa was never added.";
    }
    UtilsArray.removeItem(addedSantas, receiver);
}
function expectAllSantasToBeRemoved() {
    expect(addedSantas.length).toBe(0);
}
function generateNAssignments(count) {
    storedAssignments = new Array();
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
function assignmentsAreUnique(left, right) {
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
//# sourceMappingURL=SecretSantaAssigner.spec.js.map