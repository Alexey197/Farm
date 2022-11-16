import {$} from '../../core/dom'
import {StoreSubscriber} from '../../core/StoreSubscriber'
import {updateDate} from '../../core/redux/actions'

export class Farm {
  constructor(options) {
    this.components = options.components || []
    this.store = options.store
    this.subscriber = new StoreSubscriber(this.store)
  }
  
  getRoot() {
    const $root = $.create('div', 'farm')
    
    const componentOptions = {
      store: this.store
    }
  
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, componentOptions)
      
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }
  
  init() {
    this.store.dispatch(updateDate())
    this.subscriber.subscribeComponents(this.components)
    this.components.forEach(component => component.init())
  }
  
  destroy() {
    this.subscriber.unsubscribeFromStore()
    this.components.forEach(component => component.destroy())
  }
}