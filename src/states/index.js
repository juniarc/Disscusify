import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from "./users/reducer";
import themeReducer from './theme/reducer'; 
import threadsReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        users: usersReducer,
        theme: themeReducer,
        threads: threadsReducer,
        detailThread: threadDetailReducer,
    },
});

export default store
