import Santa from "../../emailer/Santa";

describe("A Santa", () => {
    it("should be creatable from name and email", () => {
        const santa = Santa.fromNameAndEmail("alfa", "bravo");
        expect(santa.name).toBe("alfa");
        expect(santa.email).toBe("bravo");
    });
});
