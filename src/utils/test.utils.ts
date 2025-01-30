export class TestUtils {
    protected static checkResultsLength(value: string): string {
        return value.length > 12 ? value.substring(0, 12) : value.toString()
    }

    static calculateExpectedResults(value: string): string {
        const val: string = <string>eval(value)
        const expected: string = this.checkResultsLength(val.toString())
        return expected
    }
}
