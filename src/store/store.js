import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import searchBarReducer from './reducers/searchBarReducer';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
    searchBarReducer
});

//let rdxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let enhancers = [applyMiddleware(thunk)]

let store = createStore(rootReducer, compose(...enhancers));

export default store;