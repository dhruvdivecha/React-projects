import { useState } from "react";
import { accordionData } from "../utils/content";


const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const styles = {
    container: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "2rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      flex: 1,
      margin: "1rem 0"
    },
  };

  return (
    <div style={styles.container}>
      <h2>Accordian</h2>
      {accordionData.map((item, index) => (
        <div style={styles.container} key={index}>
          <div onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{item.title}</h3>
              <p>{activeIndex === index ? '-' : '+'}</p>
            </div>
            {activeIndex === index && <div>{item.content}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;