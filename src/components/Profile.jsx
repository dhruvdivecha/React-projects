import { useState } from "react";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "",
        age: "",
    });
    
    const handleChange = event => {
        const {name, value} = event.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };
    
    const styles = {
        container: {
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            flex: 1,
            margin: "1rem 0"
        },
        inputGroup: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem",
            marginBottom: "1.5rem"
        },
        input: {
            padding: "0.8rem",
            border: "1px solid #ecf0f1",
            borderRadius: "6px",
            fontSize: "1rem",
            width: "100%",
            boxSizing: "border-box" 
        },
        list: {
            listStyle: "none",
            padding: 0,
            fontSize: "1.1rem",
            color: "#2c3e50",
            margin: 0
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={{marginBottom: "1.5rem", color: "#2c3e50"}}>User Profile</h2>
            <div style={styles.inputGroup}>
                <input 
                    type="text" 
                    name="name" 
                    value={profile.name} 
                    onChange={handleChange} 
                    placeholder="Enter name" 
                    style={styles.input} 
                />
                <input 
                    type="number" 
                    name="age" 
                    value={profile.age} 
                    onChange={handleChange} 
                    placeholder="Enter age" 
                    style={styles.input}
                    min="0"
                    step="1"
                />
            </div>
            <div>
                <h3 style={{color: "#2c3e50", marginBottom: "1rem"}}>Profile Information</h3>
                <ul style={styles.list}>
                    <li>Name: {profile.name || "-"}</li>
                    <li>Age: {profile.age || "-"}</li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;