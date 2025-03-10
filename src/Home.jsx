import React, { useState, useEffect } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  // Add a custom marker '|' for a line break
  const headingText =
    "Your Trusted Source | for Motor and  Vehicle Parts.";

  useEffect(() => {
    let i = 0;
    const typeEffect = () => {
      if (i <= headingText.length) {
        setTypedText(headingText.slice(0, i));
        i++;
        setTimeout(typeEffect, 50);
      } else {
        setIsTypingComplete(true);
      }
    };
    typeEffect();
  }, [headingText]);

  return (
    <div className="home">
      <h2 style={isTypingComplete ? { borderRight: "none" } : {}}>
        {typedText.split("|").map((line, index) => (
          <span key={index}>
            {line}
            {index !== typedText.split("|").length - 1 && <br />}
          </span>
        ))}
      </h2>
      {isTypingComplete && (
        <>
          <h3 className="subheading">
            Explore a World of Quality Motor and Vehicle Parts, 
            <br/>
            Engineered to
            Keep You Ahead on Every Journey.
          </h3>
          <a href="#explore" className="hero-button-discover">
          Discover Now
          </a>
          <a href="#" className="hero-button-started">
            GET STARTED
          </a>
        </>
      )}
    </div>
  );
};

export default Home;
