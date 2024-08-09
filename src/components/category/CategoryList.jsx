import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media screen and (min-width: 1280px) {
    margin-top: 16px;
    row-gap: 32px;
  }

  @media screen and (max-width: 1280px) {
    margin-top: 16px;
    row-gap: 16px;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: -350%;

    z-index: 99;

    background-color: #03346e;
    width: 100%;
    border-radius: 0 0 13px 16px;

    padding: 10px;

    row-gap: 8px;
  }
`;

const StyledCategoryList = styled(List)``;

function CategoryList({ isOpen }) {
  const categories = useSelector((states) => states.categories);

  if (isOpen) {
    return (
      <StyledCategoryList className="category-list">
        {categories.map((category) => (
          <CategoryItem key={category} category={category} />
        ))}
      </StyledCategoryList>
    );
  }
}

CategoryList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default CategoryList;
