import click from '../../sounds/click.mp3'
import { AbCalculatorControl } from '../abstract/abcalculatorControl'
import { acoesSelectors, tecladoSelectors } from '../selectors/domSelectors'
import SettingsDisplay from './settingsDisplay'

export default class CalculatorControl extends AbCalculatorControl {

  constructor() {
    super()
  }

  buttonsEvent(): void {
    const settings = new SettingsDisplay()
    document.querySelectorAll(acoesSelectors.muteButton).forEach((button) => {
      button.addEventListener('click', async () => {
        this.isMuted = !this.isMuted; // Alterna o estado de mudo
        settings.soundIcon = this.isMuted
      })
    })

    document.querySelectorAll(tecladoSelectors.btnKeys).forEach((button) => {
      button.addEventListener('click', async (event: Event) => {
        const target = event.target as HTMLButtonElement
        this.stopRender(this.renderInterval)
        this.clickSound(this.isMuted)
        switch (target.id) {
          case 'zero':
          case 'um':
          case 'dois':
          case 'tres':
          case 'quatro':
          case 'cinco':
          case 'seis':
          case 'sete':
          case 'oito':
          case 'nove':
            this.addNumber(Number(target.dataset.valor))
            break
          case 'adicao':
          case 'subtracao':
          case 'multiplicacao':
          case 'divisao':
          case 'porcentagem':
            this.addOperator(target.dataset.valor ?? '')
            break
          case 'ponto':
            this.addDot(target.dataset.valor ?? '')
            break
          case 'limpar':
            this.clearAll()
            break
          case 'desfazer':
            this.clearLastEntry()
            this.renderInterval = this.renderWaitNewEntry()
            break
          case 'igual':
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
    this.display.content = '0'
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
      if (this.ops.lastPosition.toString() === '.') {
        this.ops.clear()
      }
      this.addOps(dot)
    }
  }
}
