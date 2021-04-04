import { combineReducers, createStore } from 'redux';
import headerReducer from './header-reducer';
import aboutScreenReducer from './about-screen-reducer';
import skillsScreenReducer from './skills-screen-reducer';
import appReducer from './app-reducer';
import servicesScreenReducer from './services-screen-reducer';

// Собирает переданные в параметрах reducers в один объект
const reducers = combineReducers({
  app: appReducer,
  header: headerReducer,
  aboutScreen: aboutScreenReducer,
  skillsScreen: skillsScreenReducer,
  servicesScreen: servicesScreenReducer,
});

// Создает store исходя из полученных в параметрах reducers
const store = createStore(reducers);

export default store;
