import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CategoryItem from './CategoryItem';

import '../../styles/components/Category.css';

function CategoryList({ isOpen }) {
  const categories = useSelector((states) => states.categories);

  if (isOpen) {
    return (
      <div className="category-list">
        {categories.map((category) => (
          <CategoryItem key={category} category={category} />
        ))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default CategoryList;
