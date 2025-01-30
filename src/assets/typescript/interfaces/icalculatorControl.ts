export interface ICalculatorControl {
    buttonsEvent(): void
    calculate(): void
    addOps(value: string): void
    addNumber(value: number): void
    addOperator(operator: string): void
    renderWaitNewEntry(): NodeJS.Timeout
    stopRender(timeoutFunc: NodeJS.Timeout | null): void
    clickSound(mute: boolean): void
    clearAll(): void
    clearLastEntry(): void
    addDot(dot: string): void
}
