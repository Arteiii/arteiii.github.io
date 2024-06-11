import React, { useState, useEffect } from "react";

interface Quote {
  text: string;
  link: string;
}

const QuoteComponent: React.FC = () => {
  const quotes: Quote[] = [
    {
      text: "Software is like sex: it's better when it's free...",
      link: "https://en.wikipedia.org/wiki/Linus_Torvalds",
    },
    {
      text: "Microsoft isn't evil, they just make really crappy operating systems.",
      link: "https://en.wikipedia.org/wiki/Linus_Torvalds",
    },
    {
      text: "My name is Linus, and I am your God.",
      link: "https://en.wikipedia.org/wiki/Linus_Torvalds",
    },
    {
      text: "Everything is a stream of bytes",
      link: "https://en.wikipedia.org/wiki/Linus_Torvalds",
    },
    {
      text: "The World’s First Computer Virus",
      link: "https://web.mit.edu/~simsong/www/ugh.pdf",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState<Quote>({
    text: "",
    link: "",
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  return (
    <div>
      <a href={currentQuote.link}>
        <p>{currentQuote.text}</p>
      </a>
    </div>
  );
};

export default QuoteComponent;
