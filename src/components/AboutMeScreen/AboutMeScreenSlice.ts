import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './AboutMeScreenInitialState';

// type ListItem = {
//   id: number;
//   text: string;
//   isComplete: boolean;
// };

type AboutMeScreenState = {
  aboutText: string[];
};



// let id = 0;

export const AboutMeScreenSlice = createSlice({
  name: 'aboutMeScreen',
  initialState,
  reducers: {},
});

export default AboutMeScreenSlice.reducer;
export type { AboutMeScreenState };