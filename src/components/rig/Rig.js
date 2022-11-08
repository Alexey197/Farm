import {FarmComponent} from '../../core/FarmComponent'
import {createRigs} from './rig.template'
import {farm} from '../../core/data'

export class Rig extends FarmComponent {
  static className = 'farm__rigs'
  
  toHTML() {
    return createRigs(farm)
  }
}