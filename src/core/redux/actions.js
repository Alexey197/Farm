import {
  CHANGE_TEXT,
  CHANGE_TITLE,
  UPDATE_DATE
} from './types'

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

export function updateDate() {
  return {
    type: UPDATE_DATE
  }
}