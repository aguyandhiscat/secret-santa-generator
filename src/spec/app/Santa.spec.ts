import { Santa } from "../../app/Santa";

describe("A Santa", () => {
    let santa: Santa;

    beforeEach(() => {
        createSanta();
    });

    describe("has a name", () => {
        it("and it is not set", () => {
            expect(santa.name).toBeUndefined();
        });

        it("and it is set", () => {
            santa.setName("Claus");
            expect(santa.name).toBe("Claus");
        });
    });

    describe("has an email", () => {
        it("and it is not set", () => {
            expect(santa.email).toBeUndefined();
        });

        it("and it is set", () => {
            santa.setEmail("me@me.com");
            expect(santa.email).toBe("me@me.com");
        });
    });

    function createSanta() {
        santa = new Santa();
    }
});
