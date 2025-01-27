import { AbSettingsDisplay } from "../abstract/abSettingsDisplay"
import { displaySelectors } from "../selectors/domSelectors"

export default class SettingsDisplay extends AbSettingsDisplay {
  constructor() {
    super()
  }

  set soundIcon(mute: boolean) {
    const soundElement = this.settingsElement?.querySelector(displaySelectors.soundIconEl)

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
    const legend = this.settingsElement?.querySelector(displaySelectors.displayLegendsEl)
    if (legend !== null && legend !== undefined) {
      legend.innerHTML = legendText
    }
  }
}

