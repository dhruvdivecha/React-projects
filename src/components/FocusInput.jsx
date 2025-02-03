import { useRef } from "react";


const FocusInput = () => {

    const inputRef = useRef(null)

    const styles = {
        container: {
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          textAlign: "center"
        },
        input: {
          padding: "0.8rem",
          marginRight: "1rem",
          border: "1px solid #ddd",
          borderRadius: "6px",
          width: "200px",
        },
        button: {
          padding: "0.8rem 1.5rem",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "0.3s",
          ":hover": {
            backgroundColor: "#45a049"
          }
        }
      };
      
    
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    
    return (
        <div style={styles.container}>
            <input 
            type="text"
            style={styles.button}
            ref={inputRef} 
            placeholder="click button to focus"
            />
            <button onClick={focusInput}
            style={styles.button}
            >CLick to focus</button>
        </div>
    )
}

export default FocusInput;