export default class DateTime {
  constructor(
    private readonly dateElement: HTMLDivElement | null = document.querySelector(
      '#datetime > div:nth-child(2)'
    ),
    private readonly timeElement: HTMLDivElement | null = document.querySelector(
      '#datetime time'
    )
  ) {
    this.renderDateTime()
    setInterval(() => {
      this.renderDateTime()
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    }, 1000)
  }

  renderDateTime(): void {
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.toLocaleDateString('pt-BR', { month: 'long' })
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const minutes = currentDate.getMinutes().toString().padStart(2, '0')
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const twoDots = currentDate.getSeconds() % 2 === 0 ? ':' : ' '

    this.date = `${day} de ${month} de ${year}`
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    this.time = `${hours}${twoDots}${minutes}`
  }

  // eslint-disable-next-line accessor-pairs
  set date(content: string) {
    if (this.dateElement != null) {
      this.dateElement.innerHTML = content
    }
  }

  // eslint-disable-next-line accessor-pairs
  set time(content: string) {
    if (this.timeElement != null) {
      this.timeElement.innerHTML = content
    }
  }
}
