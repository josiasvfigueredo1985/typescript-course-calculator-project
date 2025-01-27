import { ISettingDisplay } from "../interfaces/isettingsDisplay"

export default class SettingsDisplay implements ISettingDisplay {
  constructor(
    private readonly soundElement: HTMLDivElement | null = document.querySelector(
      '#datetime #audio'
    )
  ) {

  }

  set soundIcon(mute: boolean) {
    if (this.soundElement !== null) {
      if (mute) {
        this.soundElement.setAttribute('src', '/assets/images/volume-on.svg')
      } else {
        this.soundElement.setAttribute('src', '/assets/images/volume-off.svg')
      }
    }
  }
}

