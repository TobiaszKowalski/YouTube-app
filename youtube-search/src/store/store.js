import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import searchBarReducer from './reducers/searchBarReducer';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
    searchBarReducer
});

let enhancers = [applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]

let store = createStore(rootReducer, compose(...enhancers));

export default store;