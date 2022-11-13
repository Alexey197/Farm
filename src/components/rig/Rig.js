import {FarmComponent} from '../../core/FarmComponent'
import {createRigs} from './rig.template'
import {farm} from '../../core/data'
import {$} from '../../core/dom'
import * as actions from '../../core/redux/actions'

export class Rig extends FarmComponent {
  static className = 'farm__rigs'
  
  constructor($root, options) {
    super($root, {
      name: 'Rig',
      listeners: ['input'],
      subscribe: ['currentText', 'dataState'],
      ...options
    })
  }
  
  toHTML() {
    return createRigs(farm, this.store.getState())
  }
  
  init() {
    super.init()
  }
  
  storeChanged(changes) {
    // console.log(changes)
  }
  
  updateTextInStore(value) {
    this.$dispatch(actions.changeText({
      id: $(event.target).id(),
      value
    }))
  }
  
  onInput(event) {
    this.updateTextInStore($(event.target).text())
  }
}