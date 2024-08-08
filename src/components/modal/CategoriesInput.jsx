import React from 'react';
import PropTypes from 'prop-types';
import { IoClose } from 'react-icons/io5';

function CategoriesInput({ category, setCategory, t }) {
  const handleKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    if (!event.target.value.trim()) return;
    setCategory(event.target.value);
  };

  const handleDeleteCategory = () => {
    setCategory('');
  };
  return (
    <div className="categories-input__container">
      {category ? (
        <div className="category-item">
          <p className="category-text">{category}</p>
          <button
            className="category-item__close-btn"
            onClick={handleDeleteCategory}
            type="button"
          >
            {' '}
            <IoClose className="category-item__close-icon" />
          </button>
        </div>
      ) : (
        <input
          type="text"
          className="category-input"
          placeholder={t('Add category . . .')}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
}

CategoriesInput.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default CategoriesInput;
