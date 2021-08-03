import React from 'react';
import style from './Load.module.css';

export function Load({ onClick }) {
  return (
    <button data-testid="button" onClick={onClick}>LOAD</button>
  );
}
