import { useContext } from "react";
import { FormContext } from "./Formcont";

const FormCard = () => {
  const { formData } = useContext(FormContext);

  if (!formData) return null; // Now properly checks for null

  const { username, email, password, confirmPassword } = formData;

  const styles = {
    container: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "2rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      flex: 1,
      margin: "1rem 0",
      maxWidth: "400px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      maxWidth: "400px",
      margin: "1rem auto",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    title: {
      textAlign: "center",
      fontSize: "1.5rem",
      marginBottom: "1rem",
    },
    detail: {
      margin: "0.5rem 0",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>User Details</h2>
        <p style={styles.detail}>
          <strong>Username:</strong> {username}
        </p>
        <p style={styles.detail}>
          <strong>Email:</strong> {email}
        </p>
        <p style={styles.detail}>
          <strong>Password:</strong> {password.replace(/./g, "*")}
        </p>
        <p style={styles.detail}>
          <strong>Confirm Password:</strong> {confirmPassword.replace(/./g, "*")}
        </p>
      </div>
    </div>
  );
};

export default FormCard;