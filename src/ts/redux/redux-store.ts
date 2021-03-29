import { combineReducers, createStore } from 'redux';
import headerReducer from './header-reducer';
import aboutScreenReducer from './about-screen-reducer';
import skillsScreenReducer from './skills-screen-reducer';

// Собирает переданные в параметрах reducers в один reducer
const reducers = combineReducers({
  header: headerReducer,
  aboutScreen: aboutScreenReducer,
  skillsScreen: skillsScreenReducer,
});

// Создает store исходя из полученных в параметрах reducers
const store = createStore(reducers);

export default store;
