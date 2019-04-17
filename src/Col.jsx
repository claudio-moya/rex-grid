import isobject from 'lodash.isobject';
import React from 'react';
import {
  string,
  oneOfType,
  bool,
  number,
  shape,
  arrayOf,
  oneOf,
} from 'prop-types';
import { composeClassName } from 'rex-react-utils';
import { TYPE, DEFAULT_TYPE } from './props';

const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
const stringOrNumberProp = oneOfType([number, string]);

const getColumnSizeClass = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : `col-${colWidth}`;
  }
  if (colSize === 'auto') {
    return isXs ? 'col-auto' : `col-${colWidth}-auto`;
  }

  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

export default function Col(props) {
  const { className, widths, type, ...attributes } = props;
  const Tag = TYPE[type];
  const colClasses = [];

  widths.forEach((colWidth, i) => {
    const columnProp = props[colWidth];
    const isXs = !i;

    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') return;

    if (isobject(columnProp)) {
      const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      const colObj = {
        [colClass]: columnProp.size || columnProp.size === '',
        [`order${colSizeInterfix}${columnProp.order}`]:
          columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]:
          columnProp.offset || columnProp.offset === 0,
      };
      const objClasses = Object.keys(colObj).filter(
        key => colObj[key] !== false
      );

      objClasses.map(objClass => colClasses.push(objClass));
    } else {
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp);

      colClasses.push(colClass);
    }
  });

  if (!colClasses.length) colClasses.push('col');

  const classes = composeClassName([className, ...colClasses]);

  return <Tag {...classes} {...attributes} />;
}

const columnProps = oneOfType([
  bool,
  number,
  string,
  shape({
    size: oneOfType([bool, number, string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

Col.defaultProps = {
  widths: colWidths,
  type: DEFAULT_TYPE,
  className: '',
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: string,
  widths: arrayOf(string),
  type: oneOf(Object.keys(TYPE)),
};
