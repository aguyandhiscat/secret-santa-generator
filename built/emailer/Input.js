"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Input {
    static getLinesFromData(data) {
        return data.trim().split("\n").map((value) => {
            return value.trim();
        });
    }
}
exports.default = Input;
//# sourceMappingURL=Input.js.map