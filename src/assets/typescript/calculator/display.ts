import error from '../../sounds/error.mp3';
import { AbDisplay } from '../abstract/abDisplay';

export default class Display extends AbDisplay {

  constructor() {
    super()
    this.content = '0';
  }

  errorSound(): void {
    const audio = new Audio(error)
    audio.play()
  }

  get content(): string {
    return this.valuesElement != null ? this.valuesElement.innerHTML : '0';
  }

  set content(value: string) {
    const displayLengthLimit = 12;
    if (this.valuesElement != null) {
      this.valuesElement.innerHTML =
        value.length > displayLengthLimit ? 'ERROR' : value.replace('.', ',');
      value.length > displayLengthLimit && this.errorSound()
    }
  }
}
