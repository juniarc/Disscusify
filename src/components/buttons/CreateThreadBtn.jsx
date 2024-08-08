import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

function CreateThreadBtn({ handleCreateThreadBtn, t }) {
  return (
    <button
      className="create-thread-btn"
      onClick={handleCreateThreadBtn}
      type="button"
    >
      {t('Create Thread')}
      <FaPlus className="plus-icon" />
    </button>
  );
}

CreateThreadBtn.propTypes = {
  handleCreateThreadBtn: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default CreateThreadBtn;
