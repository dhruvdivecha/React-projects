import { useState } from "react";

const JSXrules = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const jsxRules = [
    { rule: "JSX must return a single parent element" },
    { rule: "JSX elements must be properly closed" },
    { rule: "JSX attributes are written in camel case (e.g., className instead of class)" }
  ];

  const styles = {
    container: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "2rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      margin: "1rem 0"
    },
    title: {
      color: "#2c3e50",
      margin: 0,
      fontSize: "1.5rem"
    },
    ruleText: {
      fontSize: "1.2rem",
      color: "#333",
      margin: "2rem 0",
      minHeight: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem"
    },
    button: {
      padding: "0.8rem 1.5rem",
      border: "none",
      borderRadius: "6px",
      backgroundColor: "#2196F3",
      color: "white",
      cursor: "pointer",
      transition: "0.3s",
      ":hover": {
        opacity: 0.9
      }
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + jsxRules.length - 1) % jsxRules.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % jsxRules.length);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>JSX Rules</h1>
      <div style={styles.ruleText}>
        {jsxRules[currentIndex].rule}
      </div>
      <div style={styles.buttonContainer}>
        <button 
          style={styles.button} 
          onClick={handlePrevClick}
        >
          ← Previous
        </button>
        <button 
          style={styles.button} 
          onClick={handleNextClick}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default JSXrules;