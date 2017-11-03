export default class Input {
    public static getLinesFromData(data: string) {
        return data.trim().split("\n").map((value) => {
            return value.trim();
        });
    }
}
