import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import themeReducer from './theme/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import filteredThreadsReducer from './filteredThreads/reducer';
import categoriesReducer from './categories/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import errorStatusReducer from './error/reducer';
import isLoadingReducer from './isLoading/reducer';
import langReducer from './language/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    theme: themeReducer,
    threads: threadsReducer,
    detailThread: threadDetailReducer,
    filteredThreads: filteredThreadsReducer,
    categories: categoriesReducer,
    leaderboards: leaderboardsReducer,
    errorStatus: errorStatusReducer,
    isLoading: isLoadingReducer,
    lang: langReducer,
  },
});

export default store;
