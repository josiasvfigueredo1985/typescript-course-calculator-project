import { AbDateTime } from '../abstract/abDateTime'

export default class DateTime extends AbDateTime {
    renderDateTime(): void {
        const divN = 2
        const currentDate = new Date()
        const day = currentDate.getDate()
        const month = currentDate.toLocaleDateString('pt-BR', { month: 'long' })
        const year = currentDate.getFullYear()
        const hours = currentDate.getHours()
        const minutes = currentDate.getMinutes().toString().padStart(divN, '0')
        const twoDots = currentDate.getSeconds() % divN === 0 ? ':' : ' '

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
}
