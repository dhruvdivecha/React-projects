function Header() {
    const styles = {
      header: {
        gridColumn: "1 / -1", // Span full width
        backgroundColor: "white",
        padding: "1.5rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        marginBottom: "1rem"
      },
      title: {
        color: "#1a73e8",
        textAlign: "center",
        margin: "0 0 1rem 0",
        fontSize: "2rem"
      },
      nav: {
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "0.5rem"
      },
      link: {
        color: "#333",
        textDecoration: "none",
        transition: "all 0.3s ease",
        ":hover": {
          color: "#1a73e8",
          transform: "translateY(-2px)"
        }
      }
    };
  
    return (
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to my website!</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/" style={styles.link}>About</a>
          <a href="/" style={styles.link}>Contact</a>
        </nav>
      </header>
    );
  };
  
  export default Header;