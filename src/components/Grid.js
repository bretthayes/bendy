import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createProps from '../createProps';
import style from '../style.scss';

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

export default function Grid(props) {
  const containerClass = style[props.fluid ? 'container-fluid' : 'container'];
  const className = classNames(props.className, containerClass);

  return React.createElement(props.tagName || 'div', createProps(propTypes, props, className));
}

Grid.propTypes = propTypes;
