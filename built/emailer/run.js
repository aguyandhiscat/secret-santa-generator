"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentMailer_1 = require("./AssignmentMailer");
const Assignments_1 = require("./Assignments");
const Input_1 = require("./Input");
const Read_1 = require("./Read");
const SendmailEmailer_1 = require("./SendmailEmailer");
run();
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const emailer = new SendmailEmailer_1.default();
        yield emailer.connect();
        const assignmentMailer = AssignmentMailer_1.default.fromMailer(emailer);
        const read = Read_1.default.from(process.stdin);
        read.onComplete(() => __awaiter(this, void 0, void 0, function* () {
            const lines = Input_1.default.getLinesFromData(read.getData());
            const assignments = Assignments_1.default.fromLines(lines);
            for (const assignment of assignments.next()) {
                assignmentMailer.sendForAssignment(assignment);
                yield giveMailerTime();
            }
        }));
    });
}
function giveMailerTime() {
    // tslint:disable-next-line:no-empty
    return new Promise((fulfill) => {
        setTimeout(fulfill, 1000);
    });
}
//# sourceMappingURL=run.js.map