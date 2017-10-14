"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsSanta = require("./UtilsSanta");
function equals(left, right) {
    if (!UtilsSanta.equals(left.gifter, right.gifter)) {
        return false;
    }
    if (!UtilsSanta.equals(left.receiver, right.receiver)) {
        return false;
    }
    return true;
}
exports.equals = equals;
//# sourceMappingURL=UtilsSantaAssignment.js.map