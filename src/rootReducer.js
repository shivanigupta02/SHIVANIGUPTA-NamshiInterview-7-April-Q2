import { combineReducers } from 'redux'
import plpReducer from './container/PLP/reducer.js';

export default combineReducers({cart: plpReducer})