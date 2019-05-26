import React from 'react';

export default ({ children, type, className }) => (
  <button className={`sp-btn ${type ? `sp-btn-${type}` : ''} ${className || ''}`}>
    {children}
  </button>
);