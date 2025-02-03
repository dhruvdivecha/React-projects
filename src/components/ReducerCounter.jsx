import { useReducer, useState } from "react";

const initialState = {count : 0};

const reducer = (state, action) => {
    switch (action.type) {
        case "incrememt":
            return { ...state, count: state.count + 1};
        case "decrement":
            return{ ...state, count: state.count - 1 };
        case "reset":
            return { ...state, count: 0 };
        case "incrementByAmount":
            return{ ...state, count: state.count + action.payload};
        case "decrementByAmount":
            return{ ...state, count: state.count - action.payload};
        default:
            return state;
    }
};

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    const styles = {
        container: {
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            margin: "1rem 0"
        },
        input: {
            padding: "0.8rem",
            border: "1px solid #ecf0f1",
            borderRadius: "6px",
            width: "100px",
            margin: "0 0.5rem"
        },
        button: {
            padding: "0.8rem 1.5rem",
            margin: "0.3rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            backgroundColor: "#2196F3",
            color: "white",
            transition: "0.3s",
            ":hover": {
                opacity: 0.9
            }
        },
        resetButton: {
            backgroundColor: "#f44336"
        }
    };

    const handleAdd = () => {
        if (inputValue) {
          dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
          setInputValue(0); 
        }
    };
    
    const handleSubtract = () => {
        if (inputValue) {
          dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
          setInputValue(0); 
        }
    };

    return(
        <div style={styles.container}>
            <h2 style={{ color: "#2c3e50", textAlign: "center", marginTop: 0 }}>Counter: {state.count}</h2>
            
            <div style={{ display: "flex", justifyContent: "center", margin: "1.5rem 0" }}>
                <input 
                    type="number"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    style={styles.input}
                />
            </div>

            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <button style={styles.button} onClick={() => dispatch({type: 'incrememt'})}>+1</button>
                <button style={styles.button} onClick={() => dispatch({type: 'decrement'})}>-1</button>
                <button style={{...styles.button, ...styles.resetButton}} onClick={() => dispatch({type: 'reset'})}>Reset</button>
                <button style={styles.button} onClick={handleAdd}>Add Amount</button>
                <button style={styles.button} onClick={handleSubtract}>Subtract Amount</button>
            </div>
        </div>
    );
};

export default CounterReducer;