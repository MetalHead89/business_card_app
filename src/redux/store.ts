import { configureStore } from '@reduxjs/toolkit';
import aboutMeScreenReducer from '../components/AboutMeScreen/AboutMeScreenSlice'

export const store = configureStore({
  reducer: { aboutMeScreenReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
