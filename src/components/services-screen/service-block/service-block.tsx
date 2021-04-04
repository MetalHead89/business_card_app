import React from 'react';
import { IServiceBlock } from '../../../ts/interfaces';

const ServiceBlock = (props: IServiceBlock): JSX.Element => {
  return (
    <div className="service-block">
      <i className={`service-block__icon ${props.icon}`}></i>
      <div className={'service-block__title'}>{props.title}</div>
      <div className={'service-block__description'}>{props.description}</div>
    </div>
  );
};

export default ServiceBlock;
