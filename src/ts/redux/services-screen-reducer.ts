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
};

const servicesScreenReducer = (
  state: IServicesScreenState = initialState
): IServicesScreenState => {
  return state;
};

export default servicesScreenReducer;
