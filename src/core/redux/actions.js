import {CHANGE_TEXT, CHANGE_TITLE} from './types'

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data
  }
}

export function changeTitle(data) {
  return {
    type: CHANGE_TITLE,
    data
  }
}