import error from '../../sounds/error.mp3'
import { AbDisplay, defaultContent } from '../abstract/abDisplay'
import { Actions } from '../enums/actions'

export default class Display extends AbDisplay {
    constructor() {
        super()
        this.content = defaultContent
    }

    errorSound(): void {
        const audio = new Audio(error)
        audio.play()
    }

    get content(): string {
        return this.valuesElement != null
            ? this.valuesElement.innerHTML
            : defaultContent
    }

    set content(value: string) {
        const displayLengthLimit = 12
        if (this.valuesElement != null) {
            this.valuesElement.innerHTML =
                value.length > displayLengthLimit
                    ? Actions.error
                    : value.replace('.', ',')
            value.length > displayLengthLimit && this.errorSound()
        }
    }
}
