const calculadora = '#calculadora'
const tela = '#tela'
const display = '#display'
const dateTime = '#datetime'
const teclado = '#teclado'
const acoes = '#acoes'
const settingsInfo = '#display-settings'

export const displaySelectors = {
    dateEl: `${calculadora} ${tela} ${display} ${dateTime}>div:nth-child(2)`,
    timeEl: `${calculadora} ${tela} ${display} ${dateTime} time`,
    settingsEl: `${calculadora} ${tela} ${display} ${settingsInfo}`,
    displayValuesEl: `${calculadora} ${tela} ${display} #values`,
    soundIconEl: `${calculadora} ${tela} ${display} ${settingsInfo} #sound-icon`,
    displayLegendsEl: `${calculadora} ${tela} ${display} ${settingsInfo} #settings-legend`,
}

export const acoesSelectors = {
    muteButton: `${acoes} #sound-btn`
}

export const tecladoSelectors = {
    btnKeys: `${teclado} button`
}