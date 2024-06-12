import { configureStore } from '@reduxjs/toolkit'
import { servicesApi } from './postsApi'

export const store = configureStore({
    reducer: {
        [servicesApi.reducerPath]: servicesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(servicesApi.middleware) 
})