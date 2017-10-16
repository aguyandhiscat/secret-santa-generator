"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InputWorker {
    static fromPromise(promise) {
        const inputWorker = new this();
        inputWorker.setPromise(promise);
        return inputWorker;
    }
    onComplete(callback) {
        this.promise.then(callback);
    }
    setPromise(promise) {
        this.promise = promise;
    }
}
exports.InputWorker = InputWorker;
//# sourceMappingURL=InputWorker.js.map