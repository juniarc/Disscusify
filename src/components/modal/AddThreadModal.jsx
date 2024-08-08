import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import { useInput } from '../../hooks/useInput';
import CategoriesInput from './CategoriesInput';
import Spinner from '../spinner/Spinner';

import '../../styles/components/AddThreadModal.css';

function AddThreadModal({ isOpen, setIsOpen, addThread, t }) {
  const isLoading = useSelector((states) => states.isLoading);
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, setCategory] = useState('');

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = () => {
    addThread({ title, body, category });
    setIsOpen(false);
  };

  return (
    <Modal
      className="add-thread"
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      parentSelector={() => document.querySelector('.home-page')}
    >
      <div className="add-thread__container">
        <div className="add-thread__header">
          <p className="add-thread__title">{t('Create Thread')}</p>
          <button
            className="add-thread__close-btn"
            onClick={onCloseModal}
            type="button"
            aria-label="close button"
          >
            <IoClose className="add-thread__close-icon" />
          </button>
        </div>
        <div className="add-thread__add-form">
          <input
            type="text"
            className="add-form__input-title"
            placeholder={t('Title')}
            value={title}
            onChange={onTitleChange}
          />
          <textarea
            type="text"
            className="add-form__input-body"
            placeholder={t('Write something ...')}
            value={body}
            onChange={onBodyChange}
          />
          <CategoriesInput
            category={category}
            setCategory={setCategory}
            t={t}
          />
          <button className="add-thread__btn" onClick={onSubmit} type="button">
            {isLoading ? <Spinner /> : t('Create Thread')}
          </button>
        </div>
      </div>
    </Modal>
  );
}

AddThreadModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  addThread: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};
export default AddThreadModal;
