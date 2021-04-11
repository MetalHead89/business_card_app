import React from 'react';
import { IServicesScreenState } from '../../ts/interfaces';
import ServiceBlock from './service-block/service-block';
import './services-screen.scss';

const ServicesScreen = (props: IServicesScreenState): JSX.Element => {
  const services = props.services.map((service) => {
    return <ServiceBlock key={service.id} {...service} />;
  });

  return (
    <div id="services" className="services-screen">
      <div className="services-screen__services">{services}</div>
    </div>
  );
};

export default ServicesScreen;
