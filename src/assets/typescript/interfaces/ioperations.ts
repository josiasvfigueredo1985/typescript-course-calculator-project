export interface IOperations {
    addValues(value: string): number
    clear(): void
    undo(): void
    calculate(): void
    percentage(): string
    getResults(): string
    lastPosition: string
    length: number
}