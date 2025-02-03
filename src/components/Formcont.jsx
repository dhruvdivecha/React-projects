import { createContext, useState } from "react";
import PropTypes from "prop-types"; 

// eslint-disable-next-line react-refresh/only-export-components
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(null); // Change to null for better state management

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <FormContext.Provider value={{ formData, handleFormSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};