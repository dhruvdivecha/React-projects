import { useState } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const styles = {
        container: {
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            margin: "1rem 0",
            flex: 1
        },
        form: {
            display: "flex",
            gap: "1rem",
            marginBottom: "1.5rem"
        },
        input: {
            padding: "0.8rem",
            border: "1px solid #ecf0f1",
            borderRadius: "6px",
            fontSize: "1rem",
            flex: 1
        },
        button: {
            backgroundColor: "#27ae60",
            color: "white",
            padding: "0.8rem 1.5rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
        },
        list: {
            listStyle: "none",
            padding: 0,
            textAlign: "left",
            color: "#2c3e50"
        },
        listItem: {
            padding: "0.8rem",
            borderBottom: "1px solid #ecf0f1",
            marginBottom: "0.5rem"
        }
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodo([...todo, inputValue]);
            setInputValue("");
        }
    };
    
    return (
        <div style={styles.container}>
            <h2 style={{ marginBottom: "1.5rem", color: "#2c3e50" }}>Todo List</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add Your Todos" 
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Add Todo</button>
            </form>
            <ul style={styles.list}>
                {todo.map((todos, index) => (
                    <li key={index} style={styles.listItem}>{todos}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
