import React from 'react';
import { ISVGIcon } from '../../ts/interfaces';

const SPRITE = '/src/images/svg-icons-sprite.svg'; // Путь к SVG спрайту

const SVGIcon = (props: ISVGIcon): JSX.Element => {
  return (
    <svg className={props.class}>
      <use href={`${SPRITE}#${props.icon}`}></use>
    </svg>
  );
};

export default SVGIcon;
