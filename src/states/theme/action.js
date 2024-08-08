import {
  saveThemeToStorage,
  getThemeFromStorage,
} from '../../utils/storageService';

const ActionType = {
  SET_THEME: 'SET_THEME',
  GET_THEME: 'GET_THEME',
};

function setThemeActionCreator(theme) {
  return {
    type: ActionType.SET_THEME,
    payload: {
      theme,
    },
  };
}

function getThemeActionCreator(theme) {
  return {
    type: ActionType.GET_THEME,
    payload: {
      theme,
    },
  };
}

function setTheme() {
  return (dispatch) => {
    const theme = getThemeFromStorage();

    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';

    saveThemeToStorage(newTheme);

    dispatch(setThemeActionCreator(newTheme));
  };
}

function getTheme() {
  return (dispatch) => {
    const savedTheme = getThemeFromStorage();
    dispatch(getThemeActionCreator(savedTheme));
  };
}

export {
  ActionType,
  setThemeActionCreator,
  getThemeActionCreator,
  setTheme,
  getTheme,
};
