import Assignment from "../../emailer/Assignment";
import Santa from "../../emailer/Santa";

describe("An Assignment", () => {
    it("should have a from and to assignable to Santa", () => {
        const assignment = new Assignment();
        assignment.from = Santa.fromNameAndEmail("Alfa", "bravo");
        assignment.to = Santa.fromNameAndEmail("Charlie", "delta");
    });
});
