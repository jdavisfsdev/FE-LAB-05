import React from 'react';
import style from './Quote.module.css';

export function Quote({ quote }) {
  return (
    <div className={style.quoteDisplay}>
      <h1>Random Rick and Morty Character</h1>
      <h2>{JSON.stringify(quote)}</h2>
    </div>
  );
}
