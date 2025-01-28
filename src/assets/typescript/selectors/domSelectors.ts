const calculadora = '#calculadora'
const tela = '#tela'
const display = '#display'
const topDisplay = '#top-display'
const date = '#date'
const time = '#time'
const teclado = '#teclado'
const acoes = '#acoes'
const settingsInfo = '#display-settings'

export const displaySelectors = {
    timeEl: `${calculadora} ${tela} ${display} ${time} time`,
    settingsEl: `${calculadora} ${tela} ${display} ${settingsInfo}`,
    soundIconEl: `${calculadora} ${tela} ${display} ${settingsInfo} #sound-icon`,
    displayLegendsEl: `${calculadora} ${tela} ${display} ${settingsInfo} #settings-legend`,
    dateEl: `${calculadora} ${tela} ${display} ${topDisplay}  ${date}`,
    displayValuesEl: `${calculadora} ${tela} ${display} #values`,
}

export const acoesSelectors = {
    muteButton: `${acoes} #sound-btn`
}

export const tecladoSelectors = {
    btnKeys: `${teclado} button`
}