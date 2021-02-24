import { createStore, combineReducers } from 'redux';
import searchReducer from './reducers/searchBarReducer';

let rootReducer = combineReducers({
    searchReducer
});

let store = createStore(rootReducer);

export default store;