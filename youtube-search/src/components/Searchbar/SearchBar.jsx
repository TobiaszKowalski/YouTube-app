import React from 'react';

const SearchBar = (props) =>{

    let handleChange = (event) =>{
        props.handleChange(event.target.value)
    }
    
    let handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(props.searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder='Search video' onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;