export default class Santa {
    public static fromNameAndEmail(name: string, email: string) {
        const obj = new this();
        obj.name = name;
        obj.email = email;
        return obj;
    }

    public name: string;
    public email: string;
}
