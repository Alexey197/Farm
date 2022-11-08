import {parameters} from '../../core/data'

function toCell() {
  return `
    <div class="cell" contenteditable="true"></div>
  `
}

function toColumn(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(index, content) {
  return `
    <div class="row">
      <div class="row-info">${index}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function createFirstRow(content) {
  return `
    <div class="row">
      <div class="row-info row-info__first"></div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function createRig(rig, rigNumber = 1) {
  const rowsCount = rig.length
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
  
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(rig[i], cells))
  }
  
  return `
    <div class="rig">
      <h2 class="rig__title">RIG-${rigNumber}</h2>
      ${rows.join('')}
    </div>
  `
}

export function createRigs(farmer) {
  let rigNumber = 0
  const farm = farmer.map((el, index) => {
    rigNumber = index + 1
    return createRig(el, rigNumber)
  })
  console.log(farm)
  
  return farm.join('')
}
