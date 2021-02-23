import { createStore, combineReducers } from 'redux';
import searchReducer from './reducers/searchBarReducer';

let reducers = combineReducers({
    searchReducer
});

let store = createStore(reducers);

export default store;