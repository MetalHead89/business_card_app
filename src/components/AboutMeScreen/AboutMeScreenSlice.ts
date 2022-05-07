import { createSlice } from '@reduxjs/toolkit';
import { InfoItemType } from '../InfoItem/InfoItem';
import initialState from './AboutMeScreenInitialState';

type AboutMeScreenState = {
  infoItems: InfoItemType[];
};

export const AboutMeScreenSlice = createSlice({
  name: 'aboutMeScreen',
  initialState,
  reducers: {},
});

export default AboutMeScreenSlice.reducer;
export type { AboutMeScreenState };
