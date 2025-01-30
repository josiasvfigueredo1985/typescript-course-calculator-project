import { AbSettingsDisplay } from '../abstract/abSettingsDisplay'
import { ELegends } from '../enums/elegends'
import { volumeIcon } from '../resources/resources'
import { displaySelectors } from '../selectors/domSelectors'

export default class SettingsDisplay extends AbSettingsDisplay {
    set soundIcon(mute: boolean) {
        const soundElement = this.settingsElement?.querySelector(
            displaySelectors.soundIconEl
        )
        const attr = 'src'
        if (soundElement !== null && soundElement !== undefined) {
            if (mute) {
                soundElement.setAttribute(attr, volumeIcon.on)
                this.legend = ELegends.soundOn
            } else {
                soundElement.setAttribute(attr, volumeIcon.off)
                this.legend = ELegends.soundOff
            }
        }
    }

    set legend(legendText: string) {
        const legend = this.settingsElement?.querySelector(
            displaySelectors.displayLegendsEl
        )
        if (legend !== null && legend !== undefined) {
            legend.innerHTML = legendText
        }
    }
}
