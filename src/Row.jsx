import React from 'react';
import { oneOf, string, bool } from 'prop-types';
import { composeClassName } from 'rex-react-utils';
import { TYPE, DEFAULT_TYPE } from './props';

export default function Row({
  className,
  type,
  noGutters,
  form,
  ...attributes
}) {
  const Tag = TYPE[type];
  const classes = composeClassName([
    className,
    noGutters ? 'no-gutters' : null,
    form ? 'form-row' : 'row',
  ]);

  return <Tag {...classes} {...attributes} />;
}

Row.defaultProps = {
  className: '',
  type: DEFAULT_TYPE,
  noGutters: false,
  form: false,
};

Row.propTypes = {
  className: string,
  type: oneOf(Object.keys(TYPE)),
  noGutters: bool,
  form: bool,
};
