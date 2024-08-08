function saveThemeToStorage(theme) {
  localStorage.setItem('theme', theme);
}

function getThemeFromStorage() {
  return localStorage.getItem('theme') || 'light-theme';
}

function saveLangToStorage(lang) {
  localStorage.setItem('lang', lang);
}

function getLangFromStorage() {
  return localStorage.getItem('lang') || 'en';
}

export {
  saveThemeToStorage,
  getThemeFromStorage,
  saveLangToStorage,
  getLangFromStorage,
};
