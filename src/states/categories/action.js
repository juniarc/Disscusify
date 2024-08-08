const ActionType = {
  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
};

function receiveCategoriesActionCreator(categories) {
  return {
    type: ActionType.RECEIVE_CATEGORIES,
    payload: {
      categories,
    },
  };
}

function setCategories(threads = []) {
  return (dispatch) => {
    const categories = [];

    threads.forEach((thread) => {
      const CATEGORY_KEY = 'category';
      const category = thread[CATEGORY_KEY];

      categories.push(category);
    });

    dispatch(receiveCategoriesActionCreator(categories));
  };
}

export { ActionType, receiveCategoriesActionCreator, setCategories };
