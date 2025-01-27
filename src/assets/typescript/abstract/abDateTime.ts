import { IDateTime } from "../interfaces/idateTime";

export abstract class AbDateTime implements IDateTime {

    constructor(
        protected readonly dateElement: HTMLDivElement | null = document.querySelector(
            '#datetime > div:nth-child(2)'
        ),
        protected readonly timeElement: HTMLDivElement | null = document.querySelector(
            '#datetime time'
        )
        ,
    ) {
        this.renderDateTime()
        setInterval(() => {
            this.renderDateTime()
        }, 1000)
    }

    abstract renderDateTime(): void
    abstract set date(content: string)
    abstract set time(content: string)
}