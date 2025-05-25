import React, { useState } from "react";
import quotes from "../data/quotes"

export default function Quotes() {
  const [randomQuoteIndex, setRandomQuoteIndex] = useState(0);

  const handleChange = () => {
    setRandomQuoteIndex(Math.floor(Math.random() * quotes.length));
  };

  const quote = quotes[randomQuoteIndex];

  return (
    <div>
      <div className="quote-section">
        <h2>{quote.quote}</h2>
        {/* <h3>--- {quote.author}</h3> */}
      </div>
      <button onClick={handleChange}>Generate Random Quote</button>
    </div>
  );
}
