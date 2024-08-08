import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { filterThreads } from '../../states/filteredThreads/action';

function CategoryItem({ category }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const threads = useSelector((states) => states.threads);
  const [, setSelectedCategory] = useState(
    () => searchParams.get('category') || '',
  );

  const dispatch = useDispatch();

  const handleSelectedCategory = () => {
    setSelectedCategory(category);
    dispatch(filterThreads({ threads: threads, selectedCategory: category }));
    setSearchParams({ category: category });
  };

  return (
    <button
      className="category-list__category-item"
      type="button"
      onClick={handleSelectedCategory}
    >
      <p>{category}</p>
    </button>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryItem;
