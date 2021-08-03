import React, { useState } from 'react';
import { getQuote } from '../../../services/getQuote';
import { Load } from '../../quote/Load';
import { Quote } from '../../quote/Quote';

export function RickAndMorty() {
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
