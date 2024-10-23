// src/redux/store.js
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
    reducer: {
        user: userReducer,
        // Puedes agregar más reducers aquí
    },
    // Puedes personalizar middleware y otras configuraciones si es necesario
});


/**
 * Todo esto es para poder usar los hooks `useDispatch` y `useSelector` con los tipos correctos
 */
export type AppsStore = typeof store;
export type RootState = ReturnType<AppsStore['getState']>;
export type AppDispatch = AppsStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
