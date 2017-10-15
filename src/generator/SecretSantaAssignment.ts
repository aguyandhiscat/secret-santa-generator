import { Santa } from "./Santa";

export class SecretSantaAssignment {
    gifter: Santa;
    receiver: Santa;

    static fromGifterAndReceiver(gifter: Santa, receiver: Santa): SecretSantaAssignment {
        const assignment = new this();
        assignment.gifter = gifter;
        assignment.receiver = receiver;
        return assignment;
    }
}
