import { IDateTime } from '../interfaces/idateTime'
import { displaySelectors } from '../selectors/domSelectors'

export abstract class AbDateTime implements IDateTime {
    constructor(
        protected readonly dateElement: HTMLDivElement | null = document.querySelector(
            displaySelectors.dateEl
        ),
        protected readonly timeElement: HTMLDivElement | null = document.querySelector(
            displaySelectors.timeEl
        )
    ) {
        const secTime = 1000
        this.renderDateTime()
        setInterval(() => {
            this.renderDateTime()
        }, secTime)
    }

    abstract renderDateTime(): void
    abstract set date(content: string)
    abstract set time(content: string)
}
