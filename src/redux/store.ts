import { configureStore } from '@reduxjs/toolkit';
import skillsScreenReducer from '../components/SkillsScreen/SkillsScreenSlice';

export const store = configureStore({
  reducer: { skillsScreenReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
