import { AboutMeScreenState } from "./AboutMeScreenSlice";

const initialState: AboutMeScreenState = {
  title: 'Привет! Меня зовут Виталий',
  aboutText: ['Я начинающий frontend разработчик из небольшого Сибирского городка. Здесь ты можешь ознакомиться с моими работами, узнать об уровне моих скиллов и если возникнет необходимость - связаться со мной.'],
  skills: [
    { title: 'HTML', progress: 85 },
    { title: 'CSS', progress: 74 },
    { title: 'SCSS', progress: 84 },
    { title: 'SASS', progress: 65 },
    { title: 'JavaScript', progress: 74 },
    { title: 'TypeScript', progress: 69 },
    { title: 'PUG', progress: 90 },
    { title: 'БЭМ', progress: 80 },
    { title: 'React', progress: 76 },
    { title: 'Redux', progress: 73 },
    { title: 'Angular', progress: 35 },
    { title: 'NgRx', progress: 35 },
    { title: 'Jest', progress: 40 },
    { title: 'Webpack', progress: 62 }
  ]
};

export default initialState;