function saveThemeToStorage(theme) {
    localStorage.setItem('theme', theme);
}

function getThemeFromStorage() {
    return localStorage.getItem('theme') || 'light-theme';
}

export { 
    saveThemeToStorage,
    getThemeFromStorage,
}
