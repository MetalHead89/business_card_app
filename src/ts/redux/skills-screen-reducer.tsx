import { ISkillsScreenState } from '../interfaces';

const initialState = {
  skills: [
    { icon: 'fab fa-react' },
    { icon: 'fab fa-js' },
    { icon: 'fab fa-git' },
    { icon: 'fab fa-html5' },
    { icon: 'fab fa-css3-alt' },
    { icon: 'fab fa-sass' },
  ],
};

const skillsScreenReducer = (
  state: ISkillsScreenState = initialState,
): ISkillsScreenState => {
  return state;
};

export default skillsScreenReducer;
