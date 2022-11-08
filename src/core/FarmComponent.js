import {DomListener} from './DomListener'

export class FarmComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }
  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }
  
  init() {
    this.initDomListeners()
  }
  
  destroy() {
    this.removeDomListeners()
  }
}