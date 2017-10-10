import { Santa } from "./Santa";

export class SecretSantaAssignment {
    gifter: Santa;
    receiver: Santa;

    getReceiver(): Santa {
        return this.receiver;
    }
}
