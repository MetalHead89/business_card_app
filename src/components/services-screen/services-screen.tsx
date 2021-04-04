import React from 'react';
import { IServicesScreenState } from '../../ts/interfaces';
import ServiceBlock from './service-block/service-block';
import './services-screen.scss';

const ServicesScreen = (props: IServicesScreenState): JSX.Element => {
  const services = props.services.map((service) => {
    return (
      <ServiceBlock
        id={service.id}
        icon={service.icon}
        title={service.title}
        description={service.description}
      />
    );
  });

  return (
    <div id="services" className="services-screen">
      <div className="services-screen__services">{services}</div>
    </div>
  );
};

export default ServicesScreen;
