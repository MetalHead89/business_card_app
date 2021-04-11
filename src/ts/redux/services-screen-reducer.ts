import { IServicesScreenState } from '../interfaces';

const initialState = {
  services: [
    {
      id: 1,
      icon: 'fab fa-react',
      title: 'This Is TITLE!!!',
      description: 'Some text dor description',
    },
    {
      id: 2,
      icon: 'fab fa-react',
      title: 'This Is TITLE!!!',
      description: 'Some text dor description',
    },
    {
      id: 3,
      icon: 'fab fa-react',
      title: 'This Is TITLE!!!',
      description: 'Some text dor description',
    },
    {
      id: 4,
      icon: 'fab fa-react',
      title: 'This Is TITLE!!!',
      description: 'Some text dor description',
    },
    {
      id: 5,
      icon: 'fab fa-react',
      title: 'This Is TITLE!!!',
      description: 'Some text dor description',
    },
    {
      id: 6,
      icon: 'fab fa-react',
      title: 'This Is TITLE!!!',
      description: 'Some text dor description',
    },
  ],
};

const servicesScreenReducer = (
  state: IServicesScreenState = initialState
): IServicesScreenState => {
  return state;
};

export default servicesScreenReducer;
