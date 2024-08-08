import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterThreads } from '../states/filteredThreads/action';

function SearchForm({ isOpen, t }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const threads = useSelector((states) => states.threads);
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('keywoard') || '');
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const searchedQuery = event.target.value;
    setSearchQuery(searchedQuery);
    if (searchedQuery) {
      setSearchParams({ keywoard: searchedQuery });
    } else {
      setSearchParams({});
    }
    // eslint-disable-next-line object-shorthand
    dispatch(filterThreads({ threads: threads, searchQuery: searchedQuery }));
  };

  return (
    <input
      type="text"
      id="searchThread"
      className={`header__search-thread ${isOpen ? 'show' : null}`}
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder={t('Search Thread')}
    />
  );
}

SearchForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default SearchForm;
