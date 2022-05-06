import { createSlice } from '@reduxjs/toolkit';
import { SkillBarType } from '../SkillBar/SkillBar';
import initialState from './SkillsScreenState';

type SkillsScreenState = {
  skills: SkillBarType[];
};

export const SkillsScreenSlice = createSlice({
  name: 'skillsScreen',
  initialState,
  reducers: {},
});

export default SkillsScreenSlice.reducer;
export type { SkillsScreenState };