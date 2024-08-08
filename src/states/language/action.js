import {
  saveLangToStorage,
  getLangFromStorage,
} from '../../utils/storageService';

const ActionType = {
  SET_LANG: 'SET_LANG',
  GET_LANG: 'GET_LANG',
};

function setLangActionCreator(lang) {
  return {
    type: ActionType.SET_LANG,
    payload: {
      lang,
    },
  };
}

function getLangActionCreator(lang) {
  return {
    type: ActionType.GET_LANG,
    payload: {
      lang,
    },
  };
}

function setLang() {
  return (dispatch) => {
    const lang = getLangFromStorage();

    const newLang = lang === 'id' ? 'en' : 'id';

    saveLangToStorage(newLang);
    dispatch(setLangActionCreator(newLang));
  };
}

function getLang() {
  return (dispatch) => {
    const savedLang = getLangFromStorage();
    dispatch(getLangActionCreator(savedLang));
  };
}

export {
  ActionType,
  setLangActionCreator,
  getLangActionCreator,
  setLang,
  getLang,
};
