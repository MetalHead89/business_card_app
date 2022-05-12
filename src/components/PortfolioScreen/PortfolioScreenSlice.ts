import { createSlice } from '@reduxjs/toolkit';
import { SlideType } from './Slide/Slide';
import initialState from './PotfolioScreenInitialState';

type PortfolioScreenState = {
  slides: SlideType[];
};

export const PortfolioScreenSlice = createSlice({
  name: 'portfolioScreen',
  initialState,
  reducers: {},
});

export default PortfolioScreenSlice.reducer;
export type { PortfolioScreenState };
