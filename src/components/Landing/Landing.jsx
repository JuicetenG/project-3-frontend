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
    <main>
      <h1>{displayedText}</h1>
      <p>Sign up or sign in to track your code projects</p>
    </main>
  );
};

export default Landing;
