"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=UtilsSanta.js.map