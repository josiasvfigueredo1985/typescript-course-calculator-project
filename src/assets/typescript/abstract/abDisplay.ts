import { IDisplay } from "../interfaces/idisplay";
import { displaySelectors } from "../selectors/domSelectors";

export const defaultContent = '0';
export abstract class AbDisplay implements IDisplay {
    protected valuesElement: HTMLElement | null;

    constructor() {
        if (typeof document !== "undefined") {
            // Apenas inicializa `valuesElement` se o `document` estiver disponível
            this.valuesElement = document.querySelector(displaySelectors.displayValuesEl)
        } else {
            this.valuesElement = null;
        }
    }

    abstract errorSound(): void
    abstract get content(): string
    abstract set content(value: string)

}