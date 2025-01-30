export class TestUtils {
    protected static checkResultsLength(value: string): string {
        const valLength = 12
        return value.length > valLength
            ? value.substring(0, valLength)
            : value.toString()
    }

    static calculateExpectedResults(value: string): string {
        const val: string = <string>eval(value)
        const expected: string = this.checkResultsLength(val.toString())
        return expected
    }
}
