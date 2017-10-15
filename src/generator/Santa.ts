export class Santa {
    public static fromNameAndEmail(name: string, email: string) {
        const santa: Santa = new Santa();
        santa.name = name;
        santa.email = email;
        return santa;
    }

    public email: string;
    public name: string;
}
