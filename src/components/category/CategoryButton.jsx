import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function CategoryButton({ isCategoryOpen, onCategoryBtn, t }) {
  return (
    <button className="category-btn" onClick={onCategoryBtn} type="button">
      <p>{t('Categories')}</p>
      {isCategoryOpen ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  );
}

CategoryButton.propTypes = {
  isCategoryOpen: PropTypes.bool.isRequired,
  onCategoryBtn: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default CategoryButton;
