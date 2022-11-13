import {DomListener} from './DomListener'

export class FarmComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.store = options.store
    this.subscribe = options.subscribe || []
  }
  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }
  
  $dispatch(action) {
    this.store.dispatch(action)
  }

  storeChanged() {
  
  }
  
  isWatching(key) {
    return this.subscribe.includes(key)
  }
  
  init() {
    this.initDomListeners()
  }
  
  destroy() {
    this.removeDomListeners()
  }
}