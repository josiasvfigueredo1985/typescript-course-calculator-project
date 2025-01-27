import click from '../../sounds/click.mp3'
import { AbCalculatorControl } from '../abstract/abcalculatorControl'
import { defaultContent } from '../abstract/abDisplay'
import { Actions } from '../enums/actions'
import { Events } from '../enums/events'
import { KeyNumbers } from '../enums/keyNumbers'
import { OperationsType } from '../enums/operationsType'
import { OperationsSymbols } from '../enums/operatorsSymbols'
import { acoesSelectors, tecladoSelectors } from '../selectors/domSelectors'
import SettingsDisplay from './settingsDisplay'

export default class CalculatorControl extends AbCalculatorControl {

  constructor() {
    super()
  }

  buttonsEvent(): void {
    const settings = new SettingsDisplay()
    document.querySelectorAll(acoesSelectors.muteButton).forEach((button) => {
      button.addEventListener(Events.click, async () => {
        this.isMuted = !this.isMuted; // Alterna o estado de mudo
        settings.soundIcon = this.isMuted
      })
    })

    document.querySelectorAll(tecladoSelectors.btnKeys).forEach((button) => {
      button.addEventListener(Events.click, async (event: Event) => {
        const target = event.target as HTMLButtonElement
        this.stopRender(this.renderInterval)
        this.clickSound(this.isMuted)
        switch (target.id) {
          case KeyNumbers.zero:
          case KeyNumbers.one:
          case KeyNumbers.two:
          case KeyNumbers.three:
          case KeyNumbers.four:
          case KeyNumbers.five:
          case KeyNumbers.six:
          case KeyNumbers.seven:
          case KeyNumbers.eight:
          case KeyNumbers.nine:
            this.addNumber(Number(target.dataset.valor))
            break
          case OperationsType.add:
          case OperationsType.sub:
          case OperationsType.mult:
          case OperationsType.div:
          case OperationsType.percentage:
            this.addOperator(target.dataset.valor ?? '')
            break
          case OperationsType.dot:
            this.addDot(target.dataset.valor ?? '')
            break
          case Actions.clean:
            this.clearAll()
            break
          case Actions.undo:
            this.clearLastEntry()
            this.renderInterval = this.renderWaitNewEntry()
            break
          case Actions.equal:
            this.calculate()
            break
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
    let visible = true
    const icon1 = '_'
    const icon2 = ' '
    const waitNewEntry = setInterval(() => {
      this.display.content = visible ? icon1 : icon2
      visible = !visible
    }, 500)
    return waitNewEntry
  }

  stopRender(timeoutFunc: NodeJS.Timeout | null): void {
    if (timeoutFunc !== null) {
      clearInterval(timeoutFunc)
    }
  }

  clickSound(mute: boolean): void {
    const audio = new Audio(click)
    mute && audio.play()
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
      if (this.ops.lastPosition.toString() === OperationsSymbols.dot) {
        this.ops.clear()
      }
      this.addOps(dot)
    }
  }
}
