import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AppHeader from './components/app/AppHeader';
import AppFooter from './components/app/AppFooter';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import LeaderboardPage from './pages/LeaderboardPage';
import NotFoundPage from './pages/NotFoundPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { setTheme, getTheme } from './states/theme/action';
import { setLang, getLang } from './states/language/action';

function App() {
  const [t, i18n] = useTranslation();

  const isPreload = useSelector((states) => states.isPreload);
  const authUser = useSelector((states) => states.authUser);
  const theme = useSelector((states) => states.theme);
  const lang = useSelector((states) => states.lang);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getLang());
    dispatch(getTheme());
    document.documentElement.setAttribute('theme', theme);
    i18n.changeLanguage(lang);
  }, [theme, dispatch, lang, i18n]);

  const onLogOut = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/');
  };

  const onTheme = () => {
    dispatch(setTheme(theme));
  };

  const onSelectedLang = (language) => {
    dispatch(setLang(language));
    i18n.changeLanguage(language);
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <main>
        <Routes>
          <Route
            path="/"
            element={(
              <LoginPage
                theme={theme}
                changeTheme={onTheme}
                t={t}
                selectedLang={lang}
                onSelectedLang={onSelectedLang}
              />
            )}
          />
          <Route
            path="/register"
            element={(
              <RegisterPage
                theme={theme}
                changeTheme={onTheme}
                t={t}
                selectedLang={lang}
                onSelectedLang={onSelectedLang}
              />
            )}
          />
          <Route path="*" element={<NotFoundPage t={t} />} />
        </Routes>
      </main>
    );
  }

  return (
    <>
      <header className="app-header">
        <AppHeader path={pathName} onLogout={onLogOut} t={t} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
          <Route path="/threads/:id" element={<DetailPage t={t} />} />
          <Route path="/leaderboards" element={<LeaderboardPage t={t} />} />
          <Route path="*" element={<NotFoundPage t={t} />} />
        </Routes>
      </main>
      <AppFooter
        theme={theme}
        changeTheme={onTheme}
        t={t}
        selectedLang={lang}
        onSelectedLang={onSelectedLang}
      />
    </>
  );
}

export default App;
