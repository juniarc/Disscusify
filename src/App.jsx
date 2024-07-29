import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import AppHeader from './components/AppHeader';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { setTheme, getTheme } from './states/theme/action';

function App() {
    const authUser = useSelector((states) => states.authUser);
    const isPreload = useSelector((states) => states.isPreload);
    const theme = useSelector((states) => states.theme);

    const dispatch = useDispatch();

    const location = useLocation();
    const pathName = location.pathname;

    useEffect(() => {
        dispatch(asyncPreloadProcess())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getTheme())
        document.documentElement.setAttribute('theme', theme)
    }, [theme, dispatch])

    const onLogOut = () => {
        dispatch(asyncUnsetAuthUser());
    }

    const onTheme = () => {
        dispatch(setTheme(theme));
    }

    if (isPreload) {
        return null;
    }

    if (authUser === null) {
        return (
            <>
                <main>
                    <Routes>
                        <Route path='/' element={<LoginPage theme={theme} changeTheme={onTheme} />} />
                        <Route path='/register' element={<RegisterPage theme={theme} changeTheme={onTheme} />} />
                    </Routes>
                </main>
            </>
        );
    }

    return (
       <>
            <header className='app-header'>
                <AppHeader path={pathName} onLogout={onLogOut}/>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/threads/:id' element={<DetailPage />} />
                </Routes>
            </main>
       </>
    )
}

export default App;
