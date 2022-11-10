import {FarmComponent} from '../../core/FarmComponent'
import {createRigs} from './rig.template'
import {farm} from '../../core/data'
import {$} from '../../core/dom'

export class Rig extends FarmComponent {
  static className = 'farm__rigs'
  
  constructor($root) {
    super($root, {
      name: 'Rig',
      listeners: ['click']
    })
  }
  
  toHTML() {
    return createRigs(farm)
  }
  
  onClick(event) {
    const target = $(event.target)
    console.log(target.$el)
    // console.log(target.data)
    // console.log(event.target.getAttribute('data-col'))
    if (event.target.dataset.col) {
      console.log(target.data.col)
    }
  }
}