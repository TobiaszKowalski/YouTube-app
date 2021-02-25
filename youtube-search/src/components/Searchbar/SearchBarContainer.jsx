import React from 'react';
import {connect} from 'react-redux';
import { setSearchValue, getVideosThunkCreator } from '../../store/reducers/searchBarReducer'
import SearchBar from './SearchBar';

let mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (searchValue) => {
            dispatch(setSearchValue(searchValue))
        },
        handleSubmit: (searchTerm) => {
            dispatch(getVideosThunkCreator(searchTerm))
        }
        /*handleSubmit: (searchTerm) => {
            dispatch(sendQuery(searchTerm))
        }*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);