export interface IDateTime {
    renderDateTime(): void
    set date(content: string)
    set time(content: string)
    set soundIcon(mute: boolean)
}