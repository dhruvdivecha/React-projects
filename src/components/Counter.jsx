import { useState, useEffect } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `${count} times`
  }, [count]);

  const styles = {
    container: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "2rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      textAlign: "center"
    },
    text: {
      fontSize: "1.2rem",
      color: "#666",
      marginBottom: "1rem"
    },
    button: {
      padding: "0.8rem 1.5rem",
      backgroundColor: "#9C27B0",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "0.3s",
      ":hover": {
        backgroundColor: "#7B1FA2"
      }
    }
  };

  return (
    <div style={styles.container}>
        <p style={styles.text}>You clicked {count} times </p>
        <button  style={styles.button} onClick = {() => setCount(count+1)}>Click Me!</button>
    </div>
  )
};

export default Counter