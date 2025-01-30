import { defaultContent } from '../abstract/abDisplay'
import { AbOperations } from '../abstract/abOperations'
import { Actions } from '../enums/actions'
import { OperationsSymbols } from '../enums/operatorsSymbols'

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
        const values = this.ops.join('')
        const lastValue = values.substring(
            values.search(OperationsSymbols.percentage) + 1
        )
        const newValue = values.replace(
            `${OperationsSymbols.percentage}${lastValue}`,
            `${OperationsSymbols.mult}${Number(lastValue) * 0.01}`
        )
        const valResult = <string>eval(newValue)
        return valResult
    }

    getResults(): string {
        let results: string
        const values = this.ops.join('')
        try {
            results = values.includes(OperationsSymbols.percentage)
                ? this.percentage()
                : <string>eval(values)
        } catch {
            results = Actions.error
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
