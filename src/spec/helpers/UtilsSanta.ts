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
