/* Этот файл больше не используется, так как в проект внедрен redux,
в данный момент он используется в качестве шпаргалки того, как работает redux */

import { IState, IAction } from '../interfaces';
import headerReducer from './header-reducer';

const store = {
  _state: {
    app: {
      activeScreen: 'about',
    },
    header: {
      topMenu: {
        menuItems: [
          { id: 1, anchor: 'about', linkText: 'Обо мне', active: true },
          { id: 2, anchor: 'skills', linkText: 'Навыки', active: false },
          { id: 3, anchor: 'services', linkText: 'Услуги', active: false },
          { id: 4, anchor: 'contacts', linkText: 'Контакты', active: false },
        ],
      },
    },
    aboutScreen: {
      aboutBlock: {
        text: [
          'Противоположная точка зрения подразумевает, что элементы политического процесса ' +
            'набирают популярность среди определенных слоев населения, а значит, должны быть ' +
            'ассоциативно распределены по отраслям.',
          'Также как разбавленное изрядной долей эмпатии, ' +
            'рациональное мышление в значительной степени обусловливает важность новых принципов ' +
            'формирования материально-технической и кадровой базы. Мы вынуждены отталкиваться ' +
            'от того, что граница обучения кадров предполагает независимые способы реализации ' +
            'инновационных методов управления процессами.',
        ],
        photoLink: '/src/images/photo.png',
      },
    },
    skillsScreen: {
      skills: [
        { icon: 'fab fa-react' },
        { icon: 'fab fa-js' },
        { icon: 'fab fa-git' },
        { icon: 'fab fa-html5' },
        { icon: 'fab fa-css3-alt' },
        { icon: 'fab fa-sass' },
      ],
    },
    portfolioScreen: {
      slider: {
        slides: [
          {
            active: true,
            imageSection: {
              image: '/src/images/image-stub.jpg',
            },
            textSection: {
              title: 'Заголовок',
              description: 'Какой-то текст с описанием работы',
            },
          },
          {
            active: false,
            imageSection: {
              image: '/src/images/image-stub.jpg',
            },
            textSection: {
              title: 'Заголовок',
              description: 'Какой-то текст с описанием работы',
            },
          },
          {
            active: false,
            imageSection: {
              image: '/src/images/image-stub.jpg',
            },
            textSection: {
              title: 'Заголовок',
              description: 'Какой-то текст с описанием работы',
            },
          },
        ],
      },
    },
    servicesScreen: {
      services: [
        {
          id: 1,
          icon: 'fab fa-react',
          title: 'This Is TITLE!!!',
          description: 'Some text dor description',
        },
        {
          id: 1,
          icon: 'fab fa-react',
          title: 'This Is TITLE!!!',
          description: 'Some text dor description',
        },
        {
          id: 1,
          icon: 'fab fa-react',
          title: 'This Is TITLE!!!',
          description: 'Some text dor description',
        },
        {
          id: 1,
          icon: 'fab fa-react',
          title: 'This Is TITLE!!!',
          description: 'Some text dor description',
        },
        {
          id: 1,
          icon: 'fab fa-react',
          title: 'This Is TITLE!!!',
          description: 'Some text dor description',
        },
        {
          id: 1,
          icon: 'fab fa-react',
          title: 'This Is TITLE!!!',
          description: 'Some text dor description',
        },
      ],
    },
    feedbackScreen: {
      feedbackForm: {
        elements: [
          { id: 1, type: 'input', label: 'Имя', required: true },
          { id: 2, type: 'input', label: 'Email', required: true },
          { id: 3, type: 'input', label: 'Ваша компания' },
          { id: 4, type: 'input', label: 'Тема обращения', required: true },
          { id: 5, type: 'textarea', label: 'Сообщение', required: true },
          { id: 6, type: 'submit', text: 'Отправить' },
        ],
      },
    },
  },
  _callSubscriber(arg: any): void {
    console.log('no subscribers');
  },
  getState(): IState {
    return this._state;
  },
  subscribe(observer: any): void {
    this._callSubscriber = observer;
  },

  dispatch(action: IAction): void {
    headerReducer(this._state.header, action);

    this._callSubscriber(this._state);
  },
};

export default store;
