import error from '../../sounds/error.mp3';

export default class Display {
  private readonly valuesElement: HTMLElement | null;

  constructor() {
    if (typeof document !== "undefined") {
      // Apenas inicializa `valuesElement` se o `document` estiver disponível
      this.valuesElement = document.querySelector('#values');
    } else {
      this.valuesElement = null;
    }

    this.content = '0';
  }

  errorSound(): void {
    const audio = new Audio(error)
    audio.play()
  }

  get content(): string {
    return this.valuesElement != null ? this.valuesElement.innerHTML : '0';
  }

  set content(value: string) {
    const displayLengthLimit = 12;
    if (this.valuesElement != null) {
      this.valuesElement.innerHTML =
        value.length > displayLengthLimit ? 'ERROR' : value.replace('.', ',');
      value.length > displayLengthLimit && this.errorSound()
    }
  }
}
