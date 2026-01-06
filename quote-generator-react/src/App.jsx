import { useState } from "react";
import "./App.css";

function App() {
  const quotes = [
    "Don't feed Mogwais after midnight.",
    "Believe in yourself.",
    "Stay hungry, stay foolish.",
    "Consistency beats motivation."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>{quote}</h1>
        <button onClick={getQuote}>GIVE ME ADVICE</button>
        <p className="footer">Random Quote Generator App using ReactJS</p>
      </div>
    </div>
  );
}

export default App;