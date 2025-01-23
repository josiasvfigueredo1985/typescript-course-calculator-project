export default class Display {
  constructor(
    private readonly valuesElement: HTMLElement | null = document.querySelector(
      '#values'
    )
  ) {
    this.content = '0'
  }

  get content(): string {
    return this.valuesElement != null ? this.valuesElement.innerHTML : '0'
  }

  set content(value: string) {
    const displayLengthLimit = 12
    if (this.valuesElement != null) {
      this.valuesElement.innerHTML =
        value.length > displayLengthLimit ? 'ERROR' : value.replace('.', ',')
    }
  }
}
