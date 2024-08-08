/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CreateThreadBtn from '../buttons/CreateThreadBtn';
import AddThreadModal from '../modal/AddThreadModal';
import CategoryButton from '../category/CategoryButton';
import CategoryList from '../category/CategoryList';
import { asyncAddThread } from '../../states/threads/action';
import { asyncPopulateUsersAndThreads } from '../../states/shared/action';

function HomeLeftContent({ t }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const dispatch = useDispatch();

  function onHandleChreateThreadBtn() {
    setIsModalOpen(true);
  }

  function onHandleCategoryBtn() {
    setCategoryOpen((prevState) => !prevState);
  }

  function onSubmit({ title, body, category }) {
    dispatch(asyncAddThread({ title, body, category }));
    dispatch(asyncPopulateUsersAndThreads());
  }

  return (
    <section className="home-left-content">
      <CreateThreadBtn handleCreateThreadBtn={onHandleChreateThreadBtn} t={t} />
      <AddThreadModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        addThread={onSubmit}
        t={t}
      />
      <div className="home-left-content__category__container">
        <CategoryButton
          isCategoryOpen={isCategoryOpen}
          onCategoryBtn={onHandleCategoryBtn}
          t={t}
        />
        <CategoryList isOpen={isCategoryOpen} />
      </div>
    </section>
  );
}

HomeLeftContent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default HomeLeftContent;
