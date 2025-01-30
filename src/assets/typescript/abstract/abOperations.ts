import { IOperations } from '../interfaces/ioperations'
import { IOperationsOptions } from '../interfaces/ioperationsOptions'

export abstract class AbOperations implements IOperations {
    protected onCalculation: (args: string) => void

    constructor(
        opts: IOperationsOptions,
        protected ops: string[] = []
    ) {
        this.onCalculation = opts.onCalculation // ['122', +, '44']
    }

    abstract addValues(value: string): number
    abstract clear(): void
    abstract undo(): void
    abstract calculate(): void
    abstract percentage(): string
    abstract getResults(): string
    abstract get lastPosition(): string
    abstract set lastPosition(value: string)
    abstract get length(): number
}
