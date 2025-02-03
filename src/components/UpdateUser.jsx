import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
    const { updateUser } = useContext(UserContext);
    const [newName, setNewName] = useState('');

    const styles = {
        container: {
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            margin: "1rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
        },
        input: {
            padding: "0.8rem",
            border: "1px solid #ecf0f1",
            borderRadius: "6px",
            fontSize: "1rem",
            width: "100%",
            maxWidth: "300px"
        },
        button: {
            backgroundColor: "#2196F3",
            color: "white",
            padding: "0.8rem 1.5rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "0.3s",
            width: "100%",
            maxWidth: "300px",
            ":hover": {
                opacity: 0.9
            }
        },
        title: {
            color: "#2c3e50",
            margin: 0,
            fontSize: "1.5rem"
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newName.trim()) {
            updateUser(newName); 
            setNewName(''); 
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Update Username</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input 
                    type="text" 
                    value={newName} 
                    onChange={(e) => setNewName(e.target.value)} 
                    placeholder="Enter New Name" 
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Update</button> 
            </form>
        </div>
    );
};

export { UpdateUser };