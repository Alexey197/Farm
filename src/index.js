import '../index.css';
import {Farm} from './components/farm/Farm'
import {Header} from './components/header/Header'
import {Rig} from './components/rig/Rig'
import {createStore} from './core/createStore'
import {rootReducer} from './core/redux/rootReducer'
import {storage, debounce} from './core/utils'
import {initialState} from './core/redux/initialState'

const store = createStore(rootReducer, initialState)

const stateListener = debounce(state => {
  console.log('App State', state)
  storage('farm-state', state)
}, 300)

store.subscribe(stateListener)

const farm = new Farm('#app', {
  components: [Header, Rig],
  store
})

farm.render()