import { createStore, applyMiddleware } from 'redux'; 
import rootReducer from '../reducers/index'; 
import thunkMiddleware from 'redux-thunk'; 
import {createLogger} from 'redux-logger'; 

const logger = createLogger()

const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));

export default store; 
