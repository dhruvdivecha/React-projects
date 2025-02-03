import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { FormContext } from "./Formcont";

const validateUsername = (value) => {
  const trimmed = value.trim();
  if (trimmed === "") return { isValid: false, message: "Username is required." };
  if (trimmed.length < 8) return { isValid: false, message: "Username must be at least 8 characters." };
  if (/[^\w]/.test(trimmed)) return { isValid: false, message: "Username cannot contain special characters." };
  return { isValid: true, message: "" };
};

const validateEmail = (value) => {
  const trimmed = value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (trimmed === "") return { isValid: false, message: "Email is required." };
  if (!emailRegex.test(trimmed)) return { isValid: false, message: "Please enter a valid email address." };
  return { isValid: true, message: "" };
};

const validatePassword = (value) => {
  const trimmed = value.trim();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (trimmed === "") return { isValid: false, message: "Password is required." };
  if (!passwordRegex.test(trimmed)) return { isValid: false, message: "Password must be at least 8 characters and include a number, a lowercase and an uppercase letter." };
  return { isValid: true, message: "" };
};

const validateConfirmPassword = (confirmValue, passwordValue) => {
  const trimmed = confirmValue.trim();
  if (trimmed === "") return { isValid: false, message: "Confirm Password is required." };
  if (trimmed !== passwordValue) return { isValid: false, message: "Passwords do not match." };
  return { isValid: true, message: "" };
};

const Form = () => {
  const { handleFormSubmit } = useContext(FormContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState("");
  const [touchedUsername, setTouchedUsername] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [touchedConfirmPassword, setTouchedConfirmPassword] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  useEffect(() => {
    if (!touchedUsername && username === "") return;
    const timerId = setTimeout(() => {
      const validation = validateUsername(username);
      setErrorUsername(!validation.isValid);
      setUsernameErrorMessage(validation.message);
    }, 500);
    return () => clearTimeout(timerId);
  }, [username, touchedUsername]);

  useEffect(() => {
    if (!touchedEmail && email === "") return;
    const timerId = setTimeout(() => {
      const validation = validateEmail(email);
      setErrorEmail(!validation.isValid);
      setEmailErrorMessage(validation.message);
    }, 500);
    return () => clearTimeout(timerId);
  }, [email, touchedEmail]);

  useEffect(() => {
    if (!touchedPassword && password === "") return;
    const timerId = setTimeout(() => {
      const validation = validatePassword(password);
      setErrorPassword(!validation.isValid);
      setPasswordErrorMessage(validation.message);
    }, 500);
    return () => clearTimeout(timerId);
  }, [password, touchedPassword]);

  useEffect(() => {
    if (!touchedConfirmPassword && confirmPassword === "") return;
    const timerId = setTimeout(() => {
      const validation = validateConfirmPassword(confirmPassword, password);
      setErrorConfirmPassword(!validation.isValid);
      setConfirmPasswordErrorMessage(validation.message);
    }, 500);
    return () => clearTimeout(timerId);
  }, [confirmPassword, password, touchedConfirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouchedUsername(true);
    setTouchedEmail(true);
    setTouchedPassword(true);
    setTouchedConfirmPassword(true);

    const usernameValidation = validateUsername(username);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const confirmPasswordValidation = validateConfirmPassword(confirmPassword, password);

    setErrorUsername(!usernameValidation.isValid);
    setUsernameErrorMessage(usernameValidation.message);
    setErrorEmail(!emailValidation.isValid);
    setEmailErrorMessage(emailValidation.message);
    setErrorPassword(!passwordValidation.isValid);
    setPasswordErrorMessage(passwordValidation.message);
    setErrorConfirmPassword(!confirmPasswordValidation.isValid);
    setConfirmPasswordErrorMessage(confirmPasswordValidation.message);

    const hasErrors = !usernameValidation.isValid || !emailValidation.isValid || !passwordValidation.isValid || !confirmPasswordValidation.isValid;
    if (hasErrors) return;

    handleFormSubmit({ username, email, password, confirmPassword });
  };

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
    formTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    inputField: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      border: "2px solid #ccc",
      fontSize: "1rem",
      marginBottom: "1rem",
      transition: "border-color 0.3s ease, background-color 0.3s ease",
    },
    errorMessage: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: "-0.5rem",
      marginBottom: "0.5rem",
    },
    submitButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.formTitle}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          style={{
            ...styles.inputField,
            borderColor: isUsernameFocused ? "#007bff" : errorUsername && touchedUsername ? "red" : "#ccc",
            backgroundColor: errorUsername && touchedUsername ? "#ffe6e6" : "white",
          }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setIsUsernameFocused(true)}
          onBlur={() => setIsUsernameFocused(false)}
        />
        {errorUsername && touchedUsername && <p style={styles.errorMessage}>{usernameErrorMessage}</p>}

        <input
          type="email"
          placeholder="Enter email"
          style={{
            ...styles.inputField,
            borderColor: isEmailFocused ? "#007bff" : errorEmail && touchedEmail ? "red" : "#ccc",
            backgroundColor: errorEmail && touchedEmail ? "#ffe6e6" : "white",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
        {errorEmail && touchedEmail && <p style={styles.errorMessage}>{emailErrorMessage}</p>}

        <input
          type="password"
          placeholder="Enter password"
          style={{
            ...styles.inputField,
            borderColor: isPasswordFocused ? "#007bff" : errorPassword && touchedPassword ? "red" : "#ccc",
            backgroundColor: errorPassword && touchedPassword ? "#ffe6e6" : "white",
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
        {errorPassword && touchedPassword && <p style={styles.errorMessage}>{passwordErrorMessage}</p>}

        <input
          type="password"
          placeholder="Re-Enter password"
          style={{
            ...styles.inputField,
            borderColor: isConfirmPasswordFocused ? "#007bff" : errorConfirmPassword && touchedConfirmPassword ? "red" : "#ccc",
            backgroundColor: errorConfirmPassword && touchedConfirmPassword ? "#ffe6e6" : "white",
          }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onFocus={() => setIsConfirmPasswordFocused(true)}
          onBlur={() => setIsConfirmPasswordFocused(false)}
        />
        {errorConfirmPassword && touchedConfirmPassword && <p style={styles.errorMessage}>{confirmPasswordErrorMessage}</p>}

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default Form;