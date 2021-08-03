import React, { useState, useEffect } from 'react';
import { getQuote } from '../../services/getQuote';
import { Load } from '../quote/Load';
import { Quote } from '../quote/Quote';
// import style from './TheOfficeQuote.module.css';

export function TheOfficeQuote() {
  const [quote, setQuote] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await getQuote();
    setQuote(response);
  };

  return (
    <div>
      <Quote quote={quote} />
      <Load onClick={handleClick}/>
    </div>
  );
}
