const ProductList = () => {
    const products = [
        {id: 1, name:"Phone" ,price:"$699"},
        {id: 2, name:"Laptop" ,price:"$1200"},
        {id: 3, name:"Headphones" ,price:"$199"},
    ];

    const styles = {
        container: { 
            display: "flex", 
            flexWrap: "wrap",
            gap: "1.5rem",
            padding: "2rem",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            margin: "1rem 0"
        },
        productItem: { 
            listStyle: "none", 
            padding: "1.5rem",
            border: "1px solid #ecf0f1",
            borderRadius: "8px",
            minWidth: "200px",
            textAlign: "center",
            flex: "1 1 auto",
            transition: "transform 0.2s",
            ':hover': {
                transform: "translateY(-2px)"
            }
        },
        name: { 
            color: "#2c3e50", 
            fontWeight: "600", 
            margin: "0.5rem 0",
            fontSize: "1.1rem"
        },
        price: { 
            color: "#27ae60", 
            fontSize: "1.3rem", 
            margin: "0.5rem 0",
            fontWeight: "700"
        }
    };

  return (
    <div style={styles.container}>
        {products.map(({id, name, price})=>(
            <ul key={id} style={styles.productItem}>
                <p style={styles.name}>{name}</p>
                <p style={styles.price}>Price: {price}</p>
            </ul>
        ))}
    </div>
  )
}

export default ProductList;