import { ISettingsDisplay } from "../interfaces/isettingsDisplay";
import { displaySelectors } from "../selectors/domSelectors";

export abstract class AbSettingsDisplay implements ISettingsDisplay {
    constructor(
        protected readonly settingsElement: HTMLDivElement | null = document.querySelector(
            displaySelectors.settingsEl
        )
    ) {
    }

    abstract set soundIcon(mute: boolean)
    abstract set legend(legendText: string)

}