import { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Loading user data...</div>;
  }

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
    text: {
      fontSize: "1.2rem",
      color: "#333",
      marginTop: "1rem"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Profile Information</h2>
      <p style={styles.text}>Name: {user.name}</p>
    </div>
  );
};

export { UserProfile };