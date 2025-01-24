export class Actions {
    constructor(private readonly timeElement: HTMLDivElement | null = document.querySelector(
        '#datetime #audio'
    )) {
    }
    set soundIcon(mute: boolean) {
        if (mute && this.timeElement) {
            this.timeElement.setAttribute('#audio', 'off');
        }
     }
}