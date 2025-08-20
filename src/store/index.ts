import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

// Временный reducer чтобы убрать ошибку
const tempReducer = (state = {}, action: any) => state;

// Redux Toolkit store с современным подходом
export const store = configureStore({
  reducer: {
    temp: tempReducer,//  slice
  },
  // Включаем Redux DevTools в development
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Типизированные хуки для использования в компонентах
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;