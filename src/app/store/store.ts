import { configureStore } from '@reduxjs/toolkit'

import { authSlice } from 'features/auth/model'

import { APP_REDUCER_PATH, appApi } from './appApi'

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),
    reducer: {
        [APP_REDUCER_PATH]: appApi.reducer,
        [authSlice.name]: authSlice.reducer,
    },
})
