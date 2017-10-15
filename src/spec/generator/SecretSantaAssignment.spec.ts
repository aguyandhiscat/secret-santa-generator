import { Santa } from "../../generator/Santa";
import { SecretSantaAssignment } from "../../generator/SecretSantaAssignment";
import * as UtilsSanta from "../helpers/UtilsSanta";

describe("A SecretSantaAssignment", () => {
    it("should be creatable from a gifter and a receiver", () => {
        const gifter: Santa = UtilsSanta.createFromName("gifter");
        const receiver: Santa = UtilsSanta.createFromName("receiver");
        const assignment = SecretSantaAssignment.fromGifterAndReceiver(gifter, receiver);
        expect(assignment.gifter).toBe(gifter);
        expect(assignment.receiver).toBe(receiver);
    });
});
