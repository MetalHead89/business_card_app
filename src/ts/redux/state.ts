const state = {
  header: {
    menuItems: [
      { id: 1, anchor: 'about', linkText: 'Обо мне', active: true },
      { id: 2, anchor: 'skills', linkText: 'Навыки', active: false },
      { id: 3, anchor: 'services', linkText: 'Услуги', active: false },
      { id: 4, anchor: 'contacts', linkText: 'Контакты', active: false },
    ],
  },
  aboutScreen: {
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
  skillsScreen: {
    iconClasses: [
      'fab fa-react',
      'fab fa-js',
      'fab fa-git',
      'fab fa-html5',
      'fab fa-css3-alt',
      'fab fa-sass',
    ],
  },
};

const selectMenuItem = (id: number): void => {
  state.header.menuItems.forEach((item) => {
    item.active = item.id === id ? true : false;
  });
};

export default state;
export { selectMenuItem };
