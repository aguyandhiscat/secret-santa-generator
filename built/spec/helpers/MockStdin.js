"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream = require("stream");
class MockStdin extends stream.Duplex {
    send(data) {
        this.data = data;
        this.emit("readable");
    }
    read(size) {
        const data = this.data;
        this.data = "";
        return data;
    }
    end() {
        this.emit("end");
    }
}
exports.MockStdin = MockStdin;
//# sourceMappingURL=MockStdin.js.map