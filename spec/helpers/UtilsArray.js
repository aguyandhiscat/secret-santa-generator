"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function has(arr, item) {
    const index = arr.indexOf(item);
    if (index < 0) {
        return false;
    }
    return true;
}
exports.has = has;
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    arr.splice(index, 1);
}
exports.removeItem = removeItem;
//# sourceMappingURL=UtilsArray.js.map