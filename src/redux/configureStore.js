import { createStore } from 'redux'
import {combineReducers} from 'react-redux'
import reducers from './reducers/index'



export const store = createStore(reducers);