import { useEffect, useState } from "react"



const FetchDataEffect = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responses = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await responses.json();
            setPosts(data)
        }

        fetchData();

    },[]);

    const styles = {
      container: {
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "2rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center"
      },
      countText: {
        fontSize: "2rem",
        color: "#2196F3",
        margin: "0"
      },
      loadingText: {
        color: "#666",
        fontStyle: "italic"
      }
    };


  return (
    <div style={styles.container}>
        <h1 style={styles.countText}>Fetching data using useEffect</h1>
        <h2 style={styles.countText}>Number of posts: {posts.length > 0 ? <h2>{posts.length}</h2>: <p style={styles.countText}>Loading...</p>}</h2>
    </div>
  )
}

export default FetchDataEffect