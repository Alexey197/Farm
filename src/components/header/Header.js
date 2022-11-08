import {FarmComponent} from '../../core/FarmComponent'

export class Header extends FarmComponent {
  static className = 'farm__header'
  
  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click']
    })
  }
  
  toHTML() {
    return `
      <input type="text"class="input" value="Новая монета" />
    `
  }
  
  onInput(event) {
    console.log('Header: onInput', event.target.value)
  }
  
  onClick(event) {
    console.log('Header: onClick', event)
  }
}