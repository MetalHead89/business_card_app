import { createSlice } from '@reduxjs/toolkit';
import { SlideType } from './Slide/Slide';
import initialState from './PotfolioScreenInitialState';

type PortfolioScreenWork = {
  title: string;
  description: string;
  titleImage: string;
  gitHubLink?: string;
  demoPageLink?: string;
  slides: SlideType[];
}

type PortfolioScreenState = {
  works: PortfolioScreenWork[];
}

export const PortfolioScreenSlice = createSlice({
  name: 'portfolioScreen',
  initialState,
  reducers: {},
});

export default PortfolioScreenSlice.reducer;
export type { PortfolioScreenWork, PortfolioScreenState };
