import {FarmComponent} from '../../core/FarmComponent'
import {$} from '../../core/dom'
import {changeTitle} from '../../core/redux/actions'
import {defaultTitle} from '../../../constants'
import {ActiveRoute} from '../../core/routes/ActiveRoute'

export class Header extends FarmComponent {
  static className = 'farm__header'
  
  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
      ...options
    })
  }
  
  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
       <input type="text"class="input" value="${title}" />
      
      <div>
        <div class="button" data-button="remove">
          <i class="material-icons" data-button="remove">delete</i>
        </div>
        <div class="button" data-button="exit">
          <i class="material-icons" data-button="exit">exit_to_app</i>
        </div>
      </div>
    `
  }
  
  init() {
    super.init()
  }
  
  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
  
  onClick(event) {
    const target = $(event.target)
    
    if (target.data.button === 'remove') {
      const decision = confirm('Вы действительно хотите удалить эту таблицу?')
      
      if (decision) {
        localStorage.removeItem('farm:' + ActiveRoute.param)
        ActiveRoute.navigation('')
      }
    } else if (target.data.button === 'exit') {
      ActiveRoute.navigation('')
    }
  }
}