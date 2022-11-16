import '../index.css';
import {Router} from './core/routes/Router'
import {DashboardPage} from './pages/DashboardPage'
import {FarmPage} from './pages/FarmPage'

new Router('#app', {
  dashboard: DashboardPage,
  farm: FarmPage
})
