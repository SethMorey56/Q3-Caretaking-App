import { createStore, combineReducers, applyMiddleware } from 'redux';
import medications_reducer from './medications_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let rootReducer = combineReducers({
    meds: medications_reducer
})

let middleware = [ thunk, logger ]
export default () => createStore(rootReducer, applyMiddleware(...middleware))