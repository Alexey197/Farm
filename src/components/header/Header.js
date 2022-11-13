import {FarmComponent} from '../../core/FarmComponent'
import {$} from '../../core/dom'
import {changeTitle} from '../../core/redux/actions'
import {defaultTitle} from '../../../constants'

export class Header extends FarmComponent {
  static className = 'farm__header'
  
  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }
  
  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
      <input type="text"class="input" value="${title}" />
    `
  }
  
  init() {
    super.init()
  }
  
  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}