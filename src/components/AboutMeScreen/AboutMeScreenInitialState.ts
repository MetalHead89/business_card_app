import { AboutMeScreenState } from './AboutMeScreenSlice';

const initialState: AboutMeScreenState = {
  infoItems: [
    { name: 'Возраст', text: '32' },
    { name: 'Город', text: 'Канск, Красноярский край' },
    { name: 'Email', text: 'bakalov.vitaliy@gmail.com' },
    { name: 'Telegram', text: 'metalhead_89' },
  ],
};

export default initialState;
