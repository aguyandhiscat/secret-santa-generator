import IMail from "./IMail";

export default class AssignmentMail implements IMail {
    public to: string;
    public from: string;
    public subject: string;
    public body: string;
}
