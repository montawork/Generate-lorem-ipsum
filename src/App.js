import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = +count;
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>generate lorem ipsum dummy text</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          value={count}
          id="amount"
          min="1"
          max="8"
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((txt, index) => {
          return <p key={index}>{txt}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
