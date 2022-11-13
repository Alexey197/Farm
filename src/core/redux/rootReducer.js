import {CHANGE_TEXT, CHANGE_TITLE} from './types'

export function rootReducer(state, action) {
  let prevState
  switch (action.type) {
    case CHANGE_TEXT:
      prevState = state['dataState'] || {}
      prevState[action.data.id] = action.data.value
      return {...state, currentText: action.data.value, dataState: prevState}
    case CHANGE_TITLE:
      return {...state, title: action.data}
    default: return state
  }
}