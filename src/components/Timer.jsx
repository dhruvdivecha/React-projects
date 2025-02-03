import {useEffect, useRef , useState} from 'react'

const Timer = () => {

    const [count, setCount ] = useState(0)
    const [isRunning, setisRunning] = useState(false)
    const interval = useRef(null)
    

    const startTimer = () => {
        if (!isRunning) {
            setisRunning(true);
            interval.current = setInterval(() => {
                setCount(prevCount => prevCount + 1)
           }, 1000)
        }
    };

    const pauseTimer = () => {
        if (isRunning) {
            setisRunning(false);
            clearInterval(interval.current);
        }
    };

    const resetTimer = () => {
        setisRunning(false);
        clearInterval(interval.current)
        setCount(0)

    };

    useEffect (() => {
        return () => {
            clearInterval(interval.current)
        }
    }, [])

    const buttonStyle = {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        margin: "5px",
        
      };
    const containerStyle = {
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    textAlign: "center", 
    };

    const styles = {
        container: {
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          textAlign: "center"
        },
        timerText: {
          fontSize: "1.5rem",
          color: "#333",
          marginBottom: "1.5rem"
        }
      };

  return ( 
    <div style={{...containerStyle, ...styles.container}}>
        <h2  style={styles.timerText}> Timer : {count} seconds</h2>
        <button onClick={startTimer} style={buttonStyle} >Start</button>
        <button onClick={pauseTimer} style={buttonStyle} >Pause</button>
        <button onClick={resetTimer} style={buttonStyle} >Reset</button>
    </div>
  )
}

export default Timer