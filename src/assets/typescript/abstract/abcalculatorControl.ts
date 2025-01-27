import DateTime from "../calculator/dateTime";
import Display from "../calculator/display";
import Operations from "../calculator/operations";
import { ICalculatorControl } from "../interfaces/icalculatorControl";

export abstract class AbCalculatorControl implements ICalculatorControl {

    protected renderInterval: NodeJS.Timeout | null = null
    protected isMuted: boolean = true

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