import { AbSettingsDisplay } from "../abstract/abSettingsDisplay"
import { Legends } from "../enums/legends"
import { volumeIcon } from "../resources/resources"
import { displaySelectors } from "../selectors/domSelectors"

export default class SettingsDisplay extends AbSettingsDisplay {
  constructor() {
    super()
  }

  set soundIcon(mute: boolean) {
    const soundElement = this.settingsElement?.querySelector(displaySelectors.soundIconEl)

    if (soundElement !== null && soundElement !== undefined) {
      if (mute) {
        soundElement.setAttribute('src', volumeIcon.on)
        this.legend = Legends.soundOn

      } else {
        soundElement.setAttribute('src', volumeIcon.off)
        this.legend = Legends.soundOff
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

