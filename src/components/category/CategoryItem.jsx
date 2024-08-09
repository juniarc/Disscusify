/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { filterThreads } from '../../states/filteredThreads/action';

const Button = styled.button`
  cursor: pointer;

  color: var(--var-color-black-to-white);

  background-color: transparent;

  text-align: start;

  @media screen and (max-width: 768px) {
    color: white;
  }
`;

const StyledCategoryItem = styled(Button)``;

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
    <StyledCategoryItem
      className="category-list__category-item"
      type="button"
      onClick={handleSelectedCategory}
    >
      <p>{category}</p>
    </StyledCategoryItem>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryItem;
