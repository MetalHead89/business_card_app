import { ISkillsScreenState } from '../interfaces';

const initialState = {
  skills: [
    { id: 1, icon: 'fab fa-react' },
    { id: 2, icon: 'fab fa-js' },
    { id: 3, icon: 'fab fa-git' },
    { id: 4, icon: 'fab fa-html5' },
    { id: 5, icon: 'fab fa-css3-alt' },
    { id: 6, icon: 'fab fa-sass' },
  ],
};

const skillsScreenReducer = (
  state: ISkillsScreenState = initialState
): ISkillsScreenState => {
  return state;
};

export default skillsScreenReducer;
