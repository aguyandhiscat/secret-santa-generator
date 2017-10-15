import { Santa } from "../../generator/Santa";

export function equals(left: Santa, right: Santa) {
    if (left.name !== right.name) {
        return false;
    }
    if (left.email !== right.email) {
        return false;
    }
    return true;
}

export function createFromName(name: string) {
    return Santa.fromNameAndEmail(name, "");
}
