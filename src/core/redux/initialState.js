import {storage} from '../utils'
import {defaultTitle} from '../../../constants'

const defaultState = {
  currentText: '',
  dataState: {}, // {'1:0:0: '-2000'}
  title: defaultTitle
}

export const initialState = storage('farm-state')
  ? storage('farm-state')
  : defaultState