export class Santa {
    name: string;
    email: string;

    static fromNameAndEmail(name: string, email: string) {
        const santa: Santa = new Santa();
        santa.name = name;
        santa.email = email;
        return santa;
    }
}
