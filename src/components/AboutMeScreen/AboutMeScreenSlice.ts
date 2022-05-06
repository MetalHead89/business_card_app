import { createSlice } from '@reduxjs/toolkit';
import { SkillBarType } from '../SkillBar/SkillBar';
import initialState from './AboutMeScreenInitialState';

type AboutMeScreenState = {
  title: string;
  aboutText: string[];
  skills: SkillBarType[];
};

export const AboutMeScreenSlice = createSlice({
  name: 'aboutMeScreen',
  initialState,
  reducers: {},
});

export default AboutMeScreenSlice.reducer;
export type { AboutMeScreenState };