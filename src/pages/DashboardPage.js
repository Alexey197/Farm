import {Page} from '../core/page'
import {$} from '../core/dom'
import {createRecordsTable} from './dashboard.functions'

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString()
    return $.create('div', 'db').html(`
      <div class="db__header">
      <h1>Farm Панель Управления</h1>
    </div>
    <div class="db__new">
      <div class="db__view">
        <a href="#farm/${now}" class="db__create">
          Новый <br />алгоритм <br />майнинга
        </a>
      </div>
    </div>
    <div class="db__farm db__view">
      ${createRecordsTable()}
    </div>
    `)
  }
}