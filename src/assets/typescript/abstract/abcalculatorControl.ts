import DateTime from '../calculator/dateTime'
import Display from '../calculator/display'
import Operations from '../calculator/operations'
import { EKeyNumbers } from '../enums/ekeyNumbers'
import { EOperationsType } from '../enums/eoperationsType'
import { ICalculatorControl } from '../interfaces/icalculatorControl'

export abstract class AbCalculatorControl implements ICalculatorControl {
    protected renderInterval: NodeJS.Timeout | null = null
    protected isMuted: boolean = true
    protected keyNumbers = [
        EKeyNumbers.zero,
        EKeyNumbers.one,
        EKeyNumbers.two,
        EKeyNumbers.three,
        EKeyNumbers.four,
        EKeyNumbers.five,
        EKeyNumbers.six,
        EKeyNumbers.seven,
        EKeyNumbers.eight,
        EKeyNumbers.nine,
    ] as string[]
    protected operations = [
        EOperationsType.add,
        EOperationsType.sub,
        EOperationsType.mult,
        EOperationsType.div,
        EOperationsType.percentage,
    ] as string[]

    constructor(
        protected readonly display = new Display(),
        protected readonly ops = new Operations({
            onCalculation: (result: string) => {
                this.display.content = result
            },
        })
    ) {
        new DateTime()
        this.buttonsEvent()
    }

    abstract buttonsEvent(): void
    abstract calculate(): void
    abstract addOps(value: string): void
    abstract addNumber(value: number): void
    abstract addOperator(operator: string): void
    abstract renderWaitNewEntry(): NodeJS.Timeout
    abstract stopRender(timeoutFunc: NodeJS.Timeout | null): void
    abstract clickSound(mute: boolean): void
    abstract clearAll(): void
    abstract clearLastEntry(): void
    abstract addDot(dot: string): void
}
