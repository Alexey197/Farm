// import {storage} from '../utils'
import {defaultTitle} from '../../../constants'
import {clone} from '../utils'

export const defaultState = {
  currentText: '',
  dataState: {}, // {'1:0:0: '-2000'}
  title: defaultTitle,
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
