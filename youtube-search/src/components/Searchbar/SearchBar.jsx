import React from 'react';
import {Paper, TextField} from '@material-ui/core';

const SearchBar = (props) =>{

    let handleChange = (event) =>{
        props.handleChange(event.target.value)
        console.log(event.target.value)
    }
    
    let handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(props.searchTerm)
        console.log(props.searchTerm)
    }

    return (
        <Paper elevation={6} style = {{padding: '25px'}}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label='Search video' onChange={handleChange}/>
            </form>
        </Paper>
    )
}
//<input placeholder='Search video' onChange={handleChange} />
export default SearchBar;