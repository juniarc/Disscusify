import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Button = styled.button`
  display: flex;
  align-items: center;

  font-weight: 700;

  color: var(--var-color-black-to-white);

  @media screen and (min-width: 1280px) {
    column-gap: 16px;
  }
`;

const StyledCategoryButton = styled(Button)``;

function CategoryButton({ isCategoryOpen, onCategoryBtn, t }) {
  return (
    <StyledCategoryButton
      className="category-btn"
      onClick={onCategoryBtn}
      type="button"
    >
      <p>{t('Categories')}</p>
      {isCategoryOpen ? <FaChevronUp /> : <FaChevronDown />}
    </StyledCategoryButton>
  );
}

CategoryButton.propTypes = {
  isCategoryOpen: PropTypes.bool.isRequired,
  onCategoryBtn: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default CategoryButton;
