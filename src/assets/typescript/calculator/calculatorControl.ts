import click from '../../sounds/click.mp3'
import { AbCalculatorControl } from '../abstract/abcalculatorControl'
import { defaultContent } from '../abstract/abDisplay'
import { EActions } from '../enums/eactions'
import { EEvents } from '../enums/eevents'
import { ENumFormatting } from '../enums/enumFormatting'
import { EOperationsSymbols } from '../enums/eoperatorsSymbols'
import { acoesSelectors, tecladoSelectors } from '../selectors/domSelectors'
import SettingsDisplay from './settingsDisplay'

export default class CalculatorControl extends AbCalculatorControl {
    buttonsEvent(): void {
        const settings = new SettingsDisplay()
        document
            .querySelectorAll(acoesSelectors.muteButton)
            .forEach((button) => {
                button.addEventListener(EEvents.click, () => {
                    this.isMuted = !this.isMuted // Alterna o estado de mudo
                    settings.soundIcon = this.isMuted
                })
            })

        document
            .querySelectorAll(tecladoSelectors.btnKeys)
            .forEach((button) => {
                button.addEventListener(EEvents.click, (event: Event) => {
                    const target = event.target as HTMLButtonElement
                    this.stopRender(this.renderInterval)
                    this.clickSound(this.isMuted)
                    if (this.keyNumbers.includes(target.id)) {
                        this.addNumber(Number(target.dataset.valor))
                    }
                    if (this.operations.includes(target.id)) {
                        this.addOperator(target.dataset.valor ?? '')
                    }
                    if (target.id === ENumFormatting.dot.toString()) {
                        this.addDot(target.dataset.valor ?? '')
                    }
                    if (target.id === EActions.clean.toString()) {
                        this.clearAll()
                    }
                    if (target.id === EActions.equal.toString()) {
                        this.calculate()
                    }
                    if (target.id === EActions.undo.toString()) {
                        this.clearLastEntry()
                        this.renderInterval = this.renderWaitNewEntry()
                    }
                })
            })
    }

    calculate(): void {
        this.ops.calculate()
    }

    addOps(value: string): void {
        this.ops.addValues(value)
    }

    addNumber(value: number): void {
        if (isNaN(Number(this.ops.lastPosition))) {
            this.addOps(value.toString())
        } else {
            value = Number(this.ops.lastPosition.toString() + value.toString())
            this.ops.lastPosition = value.toString()
        }
        this.display.content = value.toString()
    }

    addOperator(operator: string): void {
        if (isNaN(Number(this.ops.lastPosition))) {
            this.ops.lastPosition = operator
        } else {
            if (this.ops.length === 0) {
                this.addOps('0')
            }
            this.addOps(operator)
        }
    }

    renderWaitNewEntry(): NodeJS.Timeout {
        let isVisible = true
        const secTime = 500
        const icon1 = '_'
        const icon2 = ' '
        const waitNewEntry = setInterval(() => {
            this.display.content = isVisible ? icon1 : icon2
            isVisible = !isVisible
        }, secTime)
        return waitNewEntry
    }

    stopRender(timeoutFunc: NodeJS.Timeout | null): void {
        if (timeoutFunc !== null) {
            clearInterval(timeoutFunc)
        }
    }

    clickSound(mute: boolean): void {
        const audio = new Audio(click)
        if (mute) {
            void audio.play()
        }
    }

    clearAll(): void {
        this.ops.clear()
        this.display.content = defaultContent
    }

    clearLastEntry(): void {
        this.ops.undo()
        this.display.content = '_'
    }

    addDot(dot: string): void {
        if (!isNaN(Number(this.ops.lastPosition))) {
            const value = this.ops.lastPosition.toString() + dot
            this.ops.lastPosition = value.toString()
        } else {
            if (
                this.ops.lastPosition.toString() ===
                EOperationsSymbols.dot.toString()
            ) {
                this.ops.clear()
            }
            this.addOps(dot)
        }
    }

    getResults(): string {
        return this.ops.getResults()
    }
}
