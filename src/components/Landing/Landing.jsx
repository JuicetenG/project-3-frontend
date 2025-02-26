import { useState, useEffect } from "react";
import "./Landing.css";

const Landing = () => {
  const text = "Hello, welcome to the code tracker.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index < text.length) {
          return text.slice(0, index + 1);
        } else {
          clearInterval(interval);
          return prev;
        }
      });
      index++;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="landing-container">
      <h1 className="landing-heading">{displayedText}</h1>
      <p className="landing-description">Sign up or sign in to track your code projects</p>
    </main>
  );
};

export default Landing;
