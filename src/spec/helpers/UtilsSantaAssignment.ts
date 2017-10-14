import { SecretSantaAssignment } from "../../generator/SecretSantaAssignment";
import * as UtilsSanta from "./UtilsSanta";

export function equals(left: SecretSantaAssignment, right: SecretSantaAssignment) {
    if (!UtilsSanta.equals(left.gifter, right.gifter)) {
        return false;
    }
    if (!UtilsSanta.equals(left.receiver, right.receiver)) {
        return false;
    }
    return true;
}
