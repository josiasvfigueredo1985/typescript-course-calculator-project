import { defaultContent } from '../abstract/abDisplay'
import { AbOperations } from '../abstract/abOperations'
import { EActions } from '../enums/eactions'
import { EOperationsSymbols } from '../enums/eoperatorsSymbols'

export default class Operations extends AbOperations {
    addValues(value: string): number {
        const opsLimit = 3
        if (this.ops.length === opsLimit) {
            this.calculate()
        }
        this.ops.push(value)
        console.log(this.ops)
        return this.length
    }

    clear(): void {
        this.ops = []
    }

    undo(): void {
        const arr = this.ops
        arr.pop()
        this.ops = arr
    }

    calculate(): void {
        const displayLimit = 12
        let result = this.getResults()

        if (result.length > displayLimit) {
            result = result.substring(0, displayLimit)
        }
        this.ops = [result]
        this.onCalculation(result)
    }

    percentage(): string {
        const calVal = 0.01
        const values = this.ops.join('')
        const lastValue = values.substring(
            values.search(EOperationsSymbols.percentage) + 1
        )
        const newValue = values.replace(
            `${EOperationsSymbols.percentage}${lastValue}`,
            `${EOperationsSymbols.mult}${Number(lastValue) * calVal}`
        )
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const valResult: string = eval(newValue).toString()
        return valResult
    }

    getResults(): string {
        let results: string
        const values = this.ops.join('')
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            results = values.includes(EOperationsSymbols.percentage)
                ? this.percentage()
                : // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                  eval(values).toString()
        } catch {
            results = EActions.error
        }
        return results
    }

    get lastPosition(): string {
        const lastIndex =
            this.ops.length > 0 ? this.ops[this.ops.length - 1] : defaultContent
        return lastIndex
    }

    set lastPosition(value: string) {
        const lastIndex = this.ops.length > 0 ? this.ops.length - 1 : 0
        this.ops[lastIndex] = value
    }

    get length(): number {
        return this.ops.length
    }
}
