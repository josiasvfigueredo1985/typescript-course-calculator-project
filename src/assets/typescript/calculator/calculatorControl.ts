import click from '../../sounds/click.mp3'
import { ICalculatorControl } from '../interfaces/icalculatorControl'
import DateTime from './dateTime'
import Display from './display'
import Operations from './operations'

export default class CalculatorControl implements ICalculatorControl {
  private renderInterval: NodeJS.Timeout | null = null
  private isMuted: boolean = true

  constructor(
    private readonly display = new Display(),
    private readonly ops = new Operations({
      onCalculation: (result: string) => {
        this.display.content = result
      },
    })
  ) {
    new DateTime()
    this.buttonsEvent()
  }

  buttonsEvent(): void {
    const display = new DateTime()
    document.querySelectorAll('#acoes button').forEach((button) => {
      button.addEventListener('click', async () => {
        this.isMuted = !this.isMuted; // Alterna o estado de mudo
        display.soundIcon = this.isMuted
      })
    })

    document.querySelectorAll('#teclado button').forEach((button) => {
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
