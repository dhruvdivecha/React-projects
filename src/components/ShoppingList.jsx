import { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const styles = {
    input: {
      padding: "0.8rem",
      border: "1px solid #ecf0f1",
      borderRadius: "6px",
      fontSize: "1rem",
      width: "100%",
      boxSizing: "border-box" 
  },
    cardStyle : {
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      minHeight: "200px"
    },
    inputGroup: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      gap: "1rem",
      marginBottom: "1.5rem"
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity) {
      setItems([...items, { name, quantity: parseInt(quantity) }]);
      setName("");
      setQuantity("");
    }
  };

  return (
    <div style={styles.cardStyle}>
      <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>Shopping List</h2>
      <form onSubmit={handleSubmit} style={styles.inputGroup}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
         style={styles.input} 
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
         style={styles.input} 
        />
        <button type="submit" style={{ padding: "8px 16px" }}>Add</button>
      </form>
      <div>
        {items.map((item, index) => (
          <div key={index} style={{ padding: "5px 0" }}>
            {item.name} - {item.quantity}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShoppingList;