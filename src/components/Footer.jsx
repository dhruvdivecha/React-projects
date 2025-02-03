function Footer() {
    const styles = {
      footer: {
        gridColumn: "1 / -1",
        backgroundColor: "#1a73e8",
        color: "white",
        padding: "1.5rem",
        textAlign: "center",
        marginTop: "auto",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)"
      },
      text: {
        margin: 0,
        fontSize: "0.9rem"
      }
    };
  
    return (
      <footer style={styles.footer}>
        <p style={styles.text}>© 2024 My Website</p>
      </footer>
    );
  };
  
  export default Footer;