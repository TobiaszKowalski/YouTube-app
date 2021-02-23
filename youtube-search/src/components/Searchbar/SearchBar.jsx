import React from 'react';

const SearchBar = (props) =>{

    let handleChange = (e) =>{
        props.handleChange(e.target.value)
    }
    
    let handleSubmit = (props) => {
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