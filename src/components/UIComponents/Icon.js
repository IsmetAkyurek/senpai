import React from 'react';
import { icons } from 'helpers';

export default ({ type, className }) => (
  <i className={`sp-icon ${className || ''}`}>
    {icons[type]}
  </i>
);