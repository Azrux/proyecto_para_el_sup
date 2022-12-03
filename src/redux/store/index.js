import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Para la extensión

const store = createStore(
  reducer, 
  composeEnhancer(applyMiddleware(thunk))
)
  
export default store;