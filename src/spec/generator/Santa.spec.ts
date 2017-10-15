import { Santa } from "../../generator/Santa";

describe("A Santa", () => {
    it("should be creatable from a name and email", () => {
        const santa: Santa = Santa.fromNameAndEmail("Claus", "me@me.com");
        expect(santa.name).toBe("Claus");
        expect(santa.email).toBe("me@me.com");
    });
});
