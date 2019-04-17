import React from 'react';
import { oneOf, string, bool } from 'prop-types';
import { composeClassName } from 'rex-react-utils';
import { TYPE, DEFAULT_TYPE } from './props';

export default function Container({ className, type, fluid, ...attributes }) {
  const Tag = TYPE[type];
  const classes = composeClassName([
    className,
    fluid ? 'container-fluid' : 'container',
  ]);

  return <Tag {...classes} {...attributes} />;
}

Container.defaultProps = {
  className: '',
  type: DEFAULT_TYPE,
  fluid: false,
};

Container.propTypes = {
  className: string,
  type: oneOf(Object.keys(TYPE)),
  fluid: bool,
};
