import { ISettingDisplay } from "../interfaces/isettingsDisplay"

export default class SettingsDisplay implements ISettingDisplay {
  constructor(
    private readonly settingsElement: HTMLDivElement | null = document.querySelector(
      '#display-settings'
    )
  ) {
  }

  set soundIcon(mute: boolean) {
    const soundElement = this.settingsElement?.querySelector('#audio')

    if (soundElement !== null && soundElement !== undefined) {
      if (mute) {
        soundElement.setAttribute('src', '/assets/images/volume-on.svg')
        this.legend = 'sound on'

      } else {
        soundElement.setAttribute('src', '/assets/images/volume-off.svg')
        this.legend = 'sound off'
      }
    }
  }

  set legend(legendText: string) {
    const legend = this.settingsElement?.querySelector('#settings-legend')
    if (legend !== null && legend !== undefined) {
      legend.innerHTML = legendText
    }
  }
}

