export class TestUtils {
    protected static checkResultsLength(value: string): string {
        if (value.length > 12) {
            return value.substring(0, 12)
        }
        return value.toString()
    }

    static calculateExpectedResults(value: string): string {
        const expected: string = eval(value).toString()
        return this.checkResultsLength(expected)
    }
}
