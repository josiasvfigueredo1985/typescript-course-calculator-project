import DateTime from "../calculator/dateTime";
import Display from "../calculator/display";
import Operations from "../calculator/operations";
import { KeyNumbers } from "../enums/keyNumbers";
import { OperationsType } from "../enums/operationsType";
import { ICalculatorControl } from "../interfaces/icalculatorControl";

export abstract class AbCalculatorControl implements ICalculatorControl {

    protected renderInterval: NodeJS.Timeout | null = null
    protected isMuted: boolean = true

    protected keyNumbers = [
        KeyNumbers.zero,
        KeyNumbers.one,
        KeyNumbers.two,
        KeyNumbers.three,
        KeyNumbers.four,
        KeyNumbers.five,
        KeyNumbers.six,
        KeyNumbers.seven,
        KeyNumbers.eight,
        KeyNumbers.nine,] as string[];

    protected operations = [OperationsType.add,
    OperationsType.sub,
    OperationsType.mult,
    OperationsType.div,
    OperationsType.percentage,] as string[];

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