import { IOperations } from "../interfaces/ioperations"
import { IOperationsOptions } from "../interfaces/ioperationsOptions"

export default class Operations implements IOperations {
  private readonly onCalculation: any

  constructor(
    opts: IOperationsOptions,
    private ops: string[] = []
  ) {
    this.onCalculation = opts.onCalculation // ['122', +, '44']
  }

  addValues(value: string): number {
    const opsLimit = 3
    this.ops.length === opsLimit && this.calculate()

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
    const lastValue = values.substring(values.search('%') + 1)
    const newValue = values.replace(
      `%${lastValue}`,
      `*${Number(lastValue) * 0.01}`
    )
    return eval(newValue).toString()
  }

  getResults(): string {
    let results: string
    const values = this.ops.join('')
    try {
      results = values.includes('%')
        ? this.percentage()
        : eval(values).toString()
    } catch (error) {
      results = 'error'
    }
    return results
  }

  get lastPosition(): string {
    const lastIndex = this.ops.length > 0 ? this.ops[this.ops.length - 1] : '0'
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
