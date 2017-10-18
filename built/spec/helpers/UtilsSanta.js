"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Santa_1 = require("../../generator/Santa");
function equals(left, right) {
    if (left.name !== right.name) {
        return false;
    }
    if (left.email !== right.email) {
        return false;
    }
    return true;
}
exports.equals = equals;
function createFromName(name) {
    return Santa_1.Santa.fromNameAndEmail(name, "");
}
exports.createFromName = createFromName;
//# sourceMappingURL=UtilsSanta.js.map