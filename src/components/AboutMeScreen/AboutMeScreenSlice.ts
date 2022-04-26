import { createSlice } from '@reduxjs/toolkit';
import initialState from './AboutMeScreenInitialState';

type AboutMeScreenState = {
  aboutText: string[];
};

export const AboutMeScreenSlice = createSlice({
  name: 'aboutMeScreen',
  initialState,
  reducers: {},
});

export default AboutMeScreenSlice.reducer;
export type { AboutMeScreenState };