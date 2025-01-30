export interface IOperations {
    addValues(value: string): number
    clear(): void
    undo(): void
    calculate(): void
    percentage(): string
    getResults(): string
    get lastPosition(): string
    set lastPosition(value: string)
    get length(): number
}
