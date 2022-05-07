import { configureStore } from '@reduxjs/toolkit';
import aboutMeScreenReducer from '../components/AboutMeScreen/AboutMeScreenSlice';
import skillsScreenReducer from '../components/SkillsScreen/SkillsScreenSlice';

export const store = configureStore({
  reducer: { aboutMeScreenReducer, skillsScreenReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
