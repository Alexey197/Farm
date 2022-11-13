import {parameters} from '../../core/data'

function toCell(state, row, rig) {
  return function(_, col) {
    const id = `${rig}:${row}:${col}`
    const data = state.dataState[id]
    return `
    <div
      class="cell"
      contenteditable="true"
      data-rig="${rig}"
      data-row="${row}"
      data-col="${col}"
      data-id="${rig}:${row}:${col}"
      >${data || ''}</div>
  `
  }
}

function toColumn(col, index) {
  return `
    <div class="column" data-col="${index}">${col}</div>
  `
}

function createFirstRow(content) {
  return `
    <div class="row">
      <div class="row-number row-number__first"></div>
      <div class="row-info row-info__first"></div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function createRow(info, content, index) {
  return `
    <div class="row">
      <div class="row-number">${index}</div>
      <div class="row-info">${info}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function createRig(info, rigNumber = 1, state = {}) {
  const rowsCount = info.length
  const colsCount = parameters.length
  const rows = []
  
  const cols = new Array(colsCount)
      .fill('')
      .map((el, index) => {
        return parameters[index]
      })
      .map(toColumn)
      .join('')
  
  rows.push(createFirstRow(cols))
  
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(state, row, rigNumber))
        .join('')
    rows.push(createRow(info[row], cells, row))
  }
  
  return `
    <div class="rig">
      <h2 class="rig__title">RIG-${rigNumber}</h2>
      ${rows.join('')}
    </div>
  `
}

export function createRigs(farmer, state) {
  let rigNumber = 0
  const farm = farmer.map((el, index) => {
    rigNumber = index + 1
    return createRig(el, rigNumber, state)
  })
  
  return farm.join('')
}
