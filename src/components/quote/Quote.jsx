import React from 'react';
import style from './Quote.module.css';

export function Quote({ quote }) {
  return (
    <div className={style.quoteDisplay}>
      <h2>{JSON.stringify(quote)}</h2>
    </div>
  );
}
