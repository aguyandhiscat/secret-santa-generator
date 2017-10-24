"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Read {
    static from(stream) {
        const obj = new this();
        obj.setStream(stream);
        obj.read();
        return obj;
    }
    onComplete(callback) {
        this.onReadComplete.then(callback);
    }
    getData() {
        return this.data;
    }
    setStream(stream) {
        this.stream = stream;
    }
    read() {
        this.data = "";
        this.stream.setEncoding("utf8");
        this.stream.on("readable", () => {
            this.readPartFromStream();
        });
        this.assignOnEnd();
    }
    readPartFromStream() {
        const chunk = this.stream.read();
        if (chunk !== null) {
            this.data += chunk;
        }
    }
    assignOnEnd() {
        this.onReadComplete = new Promise((resolve, reject) => {
            this.stream.on("end", () => {
                resolve(this);
            });
        });
    }
}
exports.default = Read;
//# sourceMappingURL=Read.js.map