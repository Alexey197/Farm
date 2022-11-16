import {Page} from '../core/page'
import {createStore} from '../core/createStore'
import {rootReducer} from '../core/redux/rootReducer'
import {normalizeInitialState} from '../core/redux/initialState'
import {debounce, storage} from '../core/utils'
import {Farm} from '../components/farm/Farm'
import {Header} from '../components/header/Header'
import {Rig} from '../components/rig/Rig'

function storageName(param) {
  return 'farm:' + param
}

export class FarmPage extends Page {
  getRoot() {
    const params = this.params ? this.params : Date.now().toString()
  
    console.log('params', params)
    
    const state = storage(storageName(params))
    const initialState = normalizeInitialState(state)
    const store = createStore(rootReducer, initialState)
    
    const stateListener = debounce((state) => {
      console.log('App State', state)
      storage(storageName(params), state)
    }, 300)

    store.subscribe(stateListener)

    this.farm = new Farm( {
      components: [Header, Rig],
      store
    })

    return this.farm.getRoot()
  }
  
  afterRender() {
    this.farm.init()
  }
  
  destroy() {
    this.farm.destroy()
  }
}