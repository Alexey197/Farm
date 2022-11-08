import '../index.css';
import {Farm} from './components/farm/Farm'
import {Header} from './components/header/Header'
import {Rig} from './components/rig/Rig'

const farm = new Farm('#app', {
  components: [Header, Rig]
})

farm.render()