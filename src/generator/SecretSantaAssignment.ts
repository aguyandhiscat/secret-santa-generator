import { Santa } from "./Santa";

export class SecretSantaAssignment {
    public static fromGifterAndReceiver(gifter: Santa, receiver: Santa): SecretSantaAssignment {
        const assignment = new this();
        assignment.gifter = gifter;
        assignment.receiver = receiver;
        return assignment;
    }

    public gifter: Santa;
    public receiver: Santa;
}
