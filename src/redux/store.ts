import { configureStore } from '@reduxjs/toolkit';
import aboutMeScreenReducer from '../components/AboutMeScreen/AboutMeScreenSlice';
import skillsScreenReducer from '../components/SkillsScreen/SkillsScreenSlice';
import portfolioScreenReducer from '../components/PortfolioScreen/PortfolioScreenSlice';

export const store = configureStore({
  reducer: { aboutMeScreenReducer, skillsScreenReducer, portfolioScreenReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
