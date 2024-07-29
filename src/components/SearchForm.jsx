import React, { useContext } from 'react';
import PropTypes from 'prop-types';

function SearchForm() {
    // const { keyword, onKeywordChangeHandler } = useContext(KeywoardContext);
    return(
        <input 
            type="text" 
            id='searchThread'
            className='header__search-thread'
            // value={keyword}
            // onChange={(event) => onKeywordChangeHandler(event.target.value)}
            placeholder='Search Thread'
            />
    );
}

// SearchForm.propType = {
//     keywoard: PropTypes.string.isRequired,
//     onKeywordChangeHandler: PropTypes.func.isRequired

// }

export default SearchForm;
