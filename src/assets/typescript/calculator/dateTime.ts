import { IDateTime } from "../interfaces/idateTime"

export default class DateTime implements IDateTime{
  constructor(
    private readonly dateElement: HTMLDivElement | null = document.querySelector(
      '#datetime > div:nth-child(2)'
    ),
    private readonly timeElement: HTMLDivElement | null = document.querySelector(
      '#datetime time'
    )
    ,
    private readonly soundElement: HTMLDivElement | null = document.querySelector(
      '#datetime #audio'
    )
  ) {
    this.renderDateTime()
    setInterval(() => {
      this.renderDateTime()
    }, 1000)
  }

  renderDateTime(): void {
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.toLocaleDateString('pt-BR', { month: 'long' })
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes().toString().padStart(2, '0')
    const twoDots = currentDate.getSeconds() % 2 === 0 ? ':' : ' '

    this.date = `${day} de ${month} de ${year}`
    this.time = `${hours}${twoDots}${minutes}`
  }

  set date(content: string) {
    if (this.dateElement != null) {
      this.dateElement.innerHTML = content
    }
  }

  set time(content: string) {
    if (this.timeElement != null) {
      this.timeElement.innerHTML = content
    }
  }

  set soundIcon(mute: boolean) {
    if (this.soundElement !== null) {
      if (mute) {
        this.soundElement.setAttribute('src', '/assets/images/volume-on.svg')
      } else {
        this.soundElement.setAttribute('src', '/assets/images/volume-off.svg')
      }
    }
  }
}

