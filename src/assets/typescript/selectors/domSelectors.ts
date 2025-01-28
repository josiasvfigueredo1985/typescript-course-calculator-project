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
    dateEl: `${calculadora} ${tela} ${display} ${topDisplay}  ${date}`,
    timeEl: `${calculadora} ${tela} ${display} ${time} time`,
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